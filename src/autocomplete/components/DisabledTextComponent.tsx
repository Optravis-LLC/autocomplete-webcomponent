import { Listbox } from "@headlessui/react";
import { defaultDisabledDropdownStyleWithinCard } from "../style/DefaultDisabledDropdownStyle";
import { classNames } from "../utils/StylingUtil";
import { TooltipComponent } from "./TooltipComponent";

interface DisabledTextProps {
  text?: string | null;
  disabledText?: string;
  disabledTextDirection?: "normal" | "left";
}

export const DisabledTextComponent = (props: DisabledTextProps) => {
  return (
    <Listbox>
      <div className={classNames("w-full tooltip", props.disabledTextDirection && props.disabledTextDirection === "left" ? "tooltip-left" : "")}>
        <Listbox.Label className={classNames("block text-sm font-medium text-gray-700 ")} />
        <div className="relative w-full">
          <Listbox.Button className={defaultDisabledDropdownStyleWithinCard}>
            <span className="block truncate">{props.text}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" />
          </Listbox.Button>
          {props.disabledText && <TooltipComponent text={props.disabledText} />}
        </div>
      </div>
    </Listbox>
  );
};
