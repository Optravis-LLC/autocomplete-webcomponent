import { useRef, useState } from "react";
import { AutocompleteListComponent } from "./components/AutocompleteListComponent";
import { BadgeComponent } from "./components/BadgeComponent";
import { DisabledTextComponent } from "./components/DisabledTextComponent";
import { SimpleTextInputComponent } from "./components/SimpleTextInputComponent";
import { SubmittableContentComponent } from "./components/SubmittableContentComponent";
import { useDetectOutsideClick } from "./hooks/useDetectOutsideClick";
import { AutocompleteItemModel } from "./models/AutocompleteItemModel";
import { classNames } from "./utils/StylingUtil";

import "./utils/font.css";

import "../index.css";

export interface AutocompleteProps {
  placeholder?: string;
  items: Array<AutocompleteItemModel>;
  onChange: (values: Array<AutocompleteItemModel>) => void;
  disabled: boolean;
  maximumItemsToRender?: number;
  keepSelectOrder?: boolean;
  initSelectedItems?: Array<AutocompleteItemModel>;
  stylesheetUrl?: string;
  controlName: string;
}

export const AutocompleteComponent = (props: AutocompleteProps) => {
  const stylesheetUrl = props.stylesheetUrl ?? "./webcomponent.css";

  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState(props.initSelectedItems || props.items.filter((item) => item.selected));
  const autoCompleteRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const onClickOutside = useDetectOutsideClick(autoCompleteRef);
  onClickOutside.subscribe({
    next() {
      console.log("click outside trigger");
      setIsOpen(false);
      setIsFocused(false);
      setSearchTerm("");
    },
  });

  const removeItem = (itemToRemove: AutocompleteItemModel) => {
    const updatedItems = [...props.items];
    updatedItems.forEach((item) => {
      if (item.id === itemToRemove.id) {
        item.selected = false;
      }
    });

    const newSelectedItems = selectedItems.filter((item) => item.id !== itemToRemove.id);
    setSelectedItems(newSelectedItems);

    if (!props.keepSelectOrder) {
      props.onChange(updatedItems);
    } else {
      const unSelectedItems = updatedItems.filter((item) => !item.selected);
      props.onChange([...newSelectedItems, ...unSelectedItems]);
    }

    setIsFocused(true);
  };

  const addItem = (itemToAdd: AutocompleteItemModel) => {
    const updatedItems = [...props.items];
    updatedItems.forEach((item) => {
      if (item.id === itemToAdd.id) {
        item.selected = true;
      }
    });

    const isAlreadyAdded = selectedItems.some((item) => item.id === itemToAdd.id);
    const newSelectedItems = isAlreadyAdded ? selectedItems : [...selectedItems, itemToAdd];

    if (!isAlreadyAdded) {
      setSelectedItems(newSelectedItems);
    }

    if (!props.keepSelectOrder) {
      props.onChange(updatedItems);
    } else {
      const unSelectedItems = updatedItems.filter((item) => !item.selected);
      props.onChange([...newSelectedItems, ...unSelectedItems]);
    }
  };

  if (props.disabled) {
    const selectedItems = props.items.filter((item) => item.selected);
    if (selectedItems.length > 0) {
      const disabledLabel = selectedItems.map((item) => item.label).join(", ");
      return <DisabledTextComponent text={disabledLabel} />;
    } else {
      return <DisabledTextComponent text={props.placeholder} />;
    }
  }

  const selectedItemsToShowInBadges = props.keepSelectOrder ? selectedItems : props.items.filter((item) => item.selected);

  const formValues = props.items
    .filter((item) => item.selected)
    .map((item) => item.id)
    .join(", ");

  return (
    <>
      <style>{"@import '" + stylesheetUrl + "';"}</style>
      <SubmittableContentComponent name={props.controlName} value={formValues} />
      <div
        ref={autoCompleteRef}
        onClick={() => {
          setIsFocused(true);
          if (!props.disabled) {
            setIsOpen(true);
            inputRef.current?.focus();
          }
        }}
        className="w-full tooltip"
      >
        <div
          className={classNames(
            "w-full border-gray-300 shadow-sm border rounded-md min-h-[38px] relative cursor-pointer",
            isFocused ? "border-gray-400 border-2 -m-[1px]" : "border-gray-300",
            props.disabled ? "" : "hover:bg-gray-100",
          )}
        >
          {selectedItemsToShowInBadges.map((item) => (
            <BadgeComponent key={item.id} item={item} onRemove={removeItem} disabled={props.disabled} />
          ))}
          {!props.disabled && (
            <span className="h-[36px] w-[240px] inline-block">
              <SimpleTextInputComponent
                ref={inputRef}
                value={searchTerm}
                type="text"
                placeholder={props.placeholder}
                className="w-full ml-3 p-0 align-middle h-full border-transparent focus:border-transparent focus:ring-0 text-sm bg-transparent"
                onChange={(event) => {
                  if (event.target) {
                    setSearchTerm(event.target.value);
                  }
                }}
                autoComplete="off"
              />
            </span>
          )}
        </div>

        <div className="w-full">
          {!props.disabled && isOpen && (
            <AutocompleteListComponent
              key="list"
              searchTerm={searchTerm}
              items={props.items}
              onAdd={addItem}
              isOpen={isOpen}
              maximumItemsToRender={props.maximumItemsToRender}
            />
          )}
        </div>
      </div>
    </>
  );
};
