import "./assets/font.css";
import { useState } from "react";
import { AutocompleteComponent } from "../autocomplete/AutocompleteComponent";
import { AutocompleteItemModel } from "../autocomplete/models/AutocompleteItemModel";

export const WebcomponentWrapper = () => {
  const [items, setItems] = useState<Array<AutocompleteItemModel>>([
    { id: "1", label: "January", selected: false, disabled: false },
    { id: "2", label: "February", selected: false, disabled: false },
    { id: "3", label: "March", selected: false, disabled: false },
    { id: "4", label: "April", selected: false, disabled: false },
    { id: "5", label: "May", selected: false, disabled: false },
    { id: "6", label: "June", selected: false, disabled: false },
    { id: "7", label: "July", selected: false, disabled: false },
    { id: "8", label: "August", selected: false, disabled: false },
    { id: "9", label: "September", selected: false, disabled: false },
    { id: "10", label: "October", selected: false, disabled: false },
    { id: "11", label: "November", selected: false, disabled: false },
    { id: "12", label: "December", selected: false, disabled: false },
  ]);

  return (
    <div className="relative w-72 h-[30px] m-4">
      <AutocompleteComponent items={items} onChange={setItems} disabled={false} controlName="my-list" />
    </div>
  );
};
