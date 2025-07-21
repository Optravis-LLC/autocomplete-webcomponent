import { useRef, useState } from "react";
import { AutocompleteListComponent } from "./components/AutocompleteListComponent";
import { BadgeComponent } from "./components/BadgeComponent";
import { DisabledTextComponent } from "./components/DisabledTextComponent";
import { SimpleTextInputComponent } from "./components/SimpleTextInputComponent";
import { SubmittableContentComponent } from "./components/SubmittableContentComponent";
import { useDetectOutsideClick } from "./hooks/useDetectOutsideClick";
import { useFilteredList } from "./hooks/useFilteredList";
import { AutocompleteItemModel } from "./models/AutocompleteItemModel";
import { classNames } from "./utils/StylingUtil";

import "./utils/font.css";

import "../index.css";

export interface AutocompleteProps {
  placeholder?: string;
  items: Array<AutocompleteItemModel>;
  onChange?: (values: Array<AutocompleteItemModel>) => void;
  disabled?: boolean;
  maximumItemsToRender?: number;
  keepSelectOrder?: boolean;
  initSelectedItems?: Array<AutocompleteItemModel>;
  stylesheetUrl?: string;
  controlName: string;
}

export const AutocompleteComponent = (props: AutocompleteProps) => {
  const disabled = props.disabled ?? false;
  const stylesheetUrl = props.stylesheetUrl ?? "./webcomponent.css";

  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>();
  const [itemToRemove, setItemToRemove] = useState<AutocompleteItemModel>();

  const [selectedItems, setSelectedItems] = useState(props.initSelectedItems || props.items.filter((item) => item.selected));
  const autoCompleteRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const onClickOutside = useDetectOutsideClick(autoCompleteRef);
  onClickOutside.subscribe({
    next() {
      setIsOpen(false);
      setIsFocused(false);
      setSearchTerm("");
    },
  });
  const { reducedItems, setMaxItemsToRender, maxItemsToRender } = useFilteredList({
    items: props.items,
    searchTerm,
    maximumItemsToRender: props.maximumItemsToRender ?? 20,
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
      props.onChange && props.onChange(updatedItems);
    } else {
      const unSelectedItems = updatedItems.filter((item) => !item.selected);
      props.onChange && props?.onChange([...newSelectedItems, ...unSelectedItems]);
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
      props.onChange && props.onChange(updatedItems);
    } else {
      const unSelectedItems = updatedItems.filter((item) => !item.selected);
      props.onChange && props.onChange([...newSelectedItems, ...unSelectedItems]);
    }
  };

  if (disabled) {
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
    .join(",");

  return (
    <>
      <style>{"@import '" + stylesheetUrl + "';"}</style>
      <SubmittableContentComponent name={props.controlName} value={formValues} />
      <div
        ref={autoCompleteRef}
        onClick={() => {
          setIsFocused(true);
          if (!disabled) {
            setIsOpen(true);
            inputRef.current?.focus();
          }
        }}
        onKeyDown={(event) => {
          if (event.code === "ArrowDown") {
            event.preventDefault();
            if (selectedItemIndex === undefined) {
              const firstNotSelectedItem = reducedItems.findIndex((item) => !item.selected);
              setSelectedItemIndex(firstNotSelectedItem);
            } else {
              const nextNotSelectedItem = reducedItems.slice(selectedItemIndex + 1).findIndex((item) => !item.selected) + selectedItemIndex + 1;
              setSelectedItemIndex(nextNotSelectedItem);
            }
          }
          if (event.code === "ArrowUp") {
            event.preventDefault();
            event.stopPropagation();
            if (selectedItemIndex === undefined) {
              const firstNotSelectedItem = reducedItems.findLastIndex((item) => !item.selected);
              setSelectedItemIndex(firstNotSelectedItem);
            } else {
              const nextNotSelectedItem = reducedItems.slice(0, selectedItemIndex).findLastIndex((item) => !item.selected);
              const firstNotSelectedItem = reducedItems.findIndex((item) => !item.selected);
              setSelectedItemIndex(nextNotSelectedItem === -1 ? firstNotSelectedItem : nextNotSelectedItem);
            }
          }
          if (event.code === "Enter" && selectedItemIndex !== undefined) {
            event.preventDefault();
            const itemToAdd = reducedItems.at(selectedItemIndex);
            itemToAdd && addItem(itemToAdd);
            setSearchTerm("");
          }
          if (event.code === "Backspace" && searchTerm === "") {
            setSelectedItemIndex(undefined);
            if (itemToRemove) {
              removeItem(itemToRemove);
              setItemToRemove(undefined);
            } else {
              const newItemToRemove = selectedItemsToShowInBadges.at(-1);
              setItemToRemove(newItemToRemove);
            }
          }
        }}
        className="w-full tooltip"
      >
        <div
          className={classNames(
            "w-full border-gray-300 shadow-sm border rounded-md min-h-[38px] relative cursor-pointer",
            isFocused ? "border-gray-400 border-2 -m-[1px]" : "border-gray-300",
            disabled ? "" : "hover:bg-gray-100",
          )}
        >
          {selectedItemsToShowInBadges.map((item) => (
            <BadgeComponent
              key={item.id}
              item={item}
              onRemove={removeItem}
              disabled={disabled}
              selected={item.id === itemToRemove?.id}
              setItemToRemove={setItemToRemove}
              setSelectedItemIndex={setSelectedItemIndex}
            />
          ))}
          {!disabled && (
            <span className="h-[36px] w-[240px] inline-block">
              <SimpleTextInputComponent
                ref={inputRef}
                value={searchTerm}
                type="text"
                placeholder={props.placeholder}
                className="w-full ml-3 p-0 align-middle h-full border-transparent focus:border-transparent focus:ring-0 text-sm bg-transparent"
                onChange={(event) => {
                  if (event.target) {
                    setItemToRemove(undefined);
                    setSelectedItemIndex(undefined);
                    setSearchTerm(event.target.value);
                  }
                }}
                autoComplete="off"
              />
            </span>
          )}
        </div>

        <div className="w-full">
          {!disabled && isOpen && (
            <AutocompleteListComponent
              key="list"
              searchTerm={searchTerm}
              items={props.items}
              displayedItems={reducedItems}
              onAdd={addItem}
              isOpen={isOpen}
              maximumItemsToRender={props.maximumItemsToRender}
              selectedItemIndex={selectedItemIndex}
              setSelectedIndex={setSelectedItemIndex}
              itemToRemove={itemToRemove}
              setItemToRemove={setItemToRemove}
              maxItemsToRender={maxItemsToRender}
              setMaxItemsToRender={setMaxItemsToRender}
            />
          )}
        </div>
      </div>
    </>
  );
};
