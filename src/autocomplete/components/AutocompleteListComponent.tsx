import { useState } from "react";
import { AutocompleteItemModel } from "../models/AutocompleteItemModel";
import { classNames } from "../utils/StylingUtil";

interface AutocompleteListProps {
  items: Array<AutocompleteItemModel>;
  searchTerm: string;
  onAdd: (item: AutocompleteItemModel) => void;
  isOpen: boolean;
  actionItem?: string;
  onActionItem?: () => void;
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
    <div className="absolute w-full grid border-gray-300 shadow-sm border rounded-md text-sm py-1 mt-px z-50 overflow-hidden" data-testid="AutocompleteList">
      {props.actionItem && (
        <div
          key="action-item"
          className="block pl-4 py-1 cursor-pointer hover:bg-gray-100 text-gray-900 select-none"
          onClick={() => {
            if (props.onActionItem) {
              props.onActionItem();
            }
          }}
        >
          {props.actionItem}
        </div>
      )}
      {reducedItems.map((item) => {
        return (
          <div
            className={classNames(
              "block pl-4 my-1 select-none bg-white",
              !item.selected && !item.disabled ? "cursor-pointer hover:bg-msg-red hover:text-gray-50 text-gray-700" : "text-gray-300",
            )}
            key={item.id}
            onClick={() => {
              console.log("here", { item, props });
              if (!item.disabled) {
                return props.onAdd(item);
              }
            }}
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
