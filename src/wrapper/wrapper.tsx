import "./assets/font.css";
import { useState } from "react";
import { AutocompleteComponent } from "../autocomplete/AutocompleteComponent";
import { AutocompleteItemModel } from "../autocomplete/models/AutocompleteItemModel";

export const WebcomponentWrapper = () => {
  const [items, setItems] = useState<Array<AutocompleteItemModel>>([
    { id: "A", label: "A", disabled: false, selected: false },
    { id: "B", label: "B", disabled: false, selected: false },
    { id: "C", label: "C", disabled: false, selected: false },
    { id: "D", label: "D", disabled: false, selected: false },
    { id: "E", label: "E", disabled: false, selected: false },
  ]);

  return (
    <div className="relative w-72 h-[30px] m-4">
      <AutocompleteComponent items={items} onChange={setItems} disabled={false} controlName="my-list" />
    </div>
  );
};
