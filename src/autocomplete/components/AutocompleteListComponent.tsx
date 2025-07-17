import { useState } from "react";
import { AutocompleteItemModel } from "../models/AutocompleteItemModel";
import { classNames } from "../utils/StylingUtil";

interface AutocompleteListProps {
  items: Array<AutocompleteItemModel>;
  selectedItemIndex?: number;
  setSelectedIndex: (newIndex?: number) => void;
  searchTerm: string;
  onAdd: (item: AutocompleteItemModel) => void;
  isOpen: boolean;
  maximumItemsToRender?: number;
}

export const AutocompleteListComponent = (props: AutocompleteListProps) => {
  const defaultMaximumItemsToRender = props.maximumItemsToRender || 20;
  const [maxItemsToRender, setMaxItemsToRender] = useState(defaultMaximumItemsToRender);

  const filteredItems = props.items.filter((item) => item.label.toLowerCase().indexOf(props.searchTerm.toLowerCase()) !== -1);
  const hasNotRenderedItems = filteredItems.length > maxItemsToRender;

  const reducedItems = hasNotRenderedItems ? filteredItems.slice(0, maxItemsToRender) : filteredItems;

  const isListVisible = filteredItems.length > 0;

  if (!props.isOpen || !isListVisible) return <></>;

  return (
    <div
      className="absolute w-full grid border-gray-300 shadow-sm border rounded-md text-sm my-1 mt-px z-50 overflow-hidden"
      data-testid="AutocompleteList"
    >
      {reducedItems.map((item, displayedItemIndex) => {
        return (
          <div
            className={classNames(
              !item.selected && props.selectedItemIndex === displayedItemIndex ? "bg-msg-red text-gray-50" : "",
              "block pl-4 py-1 select-none bg-white",
              !item.selected && !item.disabled ? "cursor-pointer text-gray-700" : "text-gray-300",
            )}
            key={item.id}
            onClick={() => {
              if (!item.disabled) {
                return props.onAdd(item);
              }
            }}
            onMouseEnter={() => props.setSelectedIndex(displayedItemIndex)}
            onMouseLeave={() => props.setSelectedIndex(undefined)}
          >
            {item.label}
          </div>
        );
      })}
      {hasNotRenderedItems && (
        <div
          key="show-more-item"
          className="block pl-4 py-1 text-gray-700 bg-white cursor-pointer hover:text-gray-50 hover:bg-msg-red select-none"
          onClick={() => {
            setMaxItemsToRender(maxItemsToRender + defaultMaximumItemsToRender);
          }}
        >
          Show more items
        </div>
      )}
    </div>
  );
};
