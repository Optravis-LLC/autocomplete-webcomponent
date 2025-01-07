import { forwardRef, InputHTMLAttributes } from "react";
import { defaultInputStyle } from "../style/DefaultInputStyle";
import { classNames } from "../utils/StylingUtil";
import { TooltipComponent } from "./TooltipComponent";

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  tooltipText?: string;
  disabledText?: string;
  disabledTextDirection?: "normal" | "left";
}

export const SimpleTextInputComponent = forwardRef<HTMLInputElement, InputWithLabelProps>(function SimpleNumberInput(props, ref) {
  const { disabled, disabledText, disabledTextDirection, tooltipText, ...otherProps } = props;

  return (
    <div className={classNames("tooltip w-full h-full", disabledTextDirection && disabledTextDirection === "left" ? "tooltip-left" : "")}>
      <input
        type="text"
        autoComplete="off"
        className={defaultInputStyle}
        {...otherProps}
        ref={ref}
        style={{ width: "calc(100% - 1px)" }}
        disabled={disabled ?? false}
      />
      {disabled && disabledText && <TooltipComponent text={disabledText} />}
      {!disabled && tooltipText && <TooltipComponent text={tooltipText} />}
    </div>
  );
});
