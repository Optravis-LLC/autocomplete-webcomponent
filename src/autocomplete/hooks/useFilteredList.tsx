import { useState } from "react";
import { AutocompleteItemModel } from "../models/AutocompleteItemModel";

interface FilteredListArgs {
  maximumItemsToRender?: number;
  items: Array<AutocompleteItemModel>;
  searchTerm: string;
}

export const useFilteredList = (args: FilteredListArgs) => {
  const { maximumItemsToRender, items, searchTerm } = args;
  const defaultMaximumItemsToRender = maximumItemsToRender || 20;
  const [maxItemsToRender, setMaxItemsToRender] = useState(defaultMaximumItemsToRender);

  const filteredItems = items.filter((item) => item.label.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  const hasNotRenderedItems = filteredItems.length > maxItemsToRender;

  const reducedItems = hasNotRenderedItems ? filteredItems.slice(0, maxItemsToRender) : filteredItems;

  return { reducedItems, setMaxItemsToRender, maxItemsToRender };
};
