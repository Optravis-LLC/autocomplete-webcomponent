import r2wc from "@r2wc/react-to-web-component";
import { AutocompleteComponent } from "./autocomplete/AutocompleteComponent";

const AutoCompleteConstructor = r2wc(AutocompleteComponent, {
  shadow: "open",
  props: {
    items: "json",
    disabled: "boolean",
    keepSelectOrder: "boolean",
    onChange: "function",
    initSelectedItems: "json",
    maximumItemsToRender: "number",
    placeholder: "string",
    stylesheetUrl: "string",
  },
});

customElements.define("combo-box", AutoCompleteConstructor);

export const hmr = true;
