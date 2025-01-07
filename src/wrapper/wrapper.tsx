import "./assets/font.css";
import { useState } from "react";
import { AutocompleteComponent } from "../autocomplete/AutocompleteComponent";
import { AutocompleteItemModel } from "../autocomplete/models/AutocompleteItemModel";

export const WebcomponentWrapper = () => {
  const [items, setItems] = useState<Array<AutocompleteItemModel>>([{ id: "test", label: "Test entry", disabled: false, selected: false }]);

  return (
    <div className="relative w-72 h-[30px] m-4">
      <AutocompleteComponent items={items} onChange={setItems} disabled={false} />
    </div>
  );
};
