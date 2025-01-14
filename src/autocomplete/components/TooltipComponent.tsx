interface TooltipProps {
  text: string;
}

export const TooltipComponent = (props: TooltipProps) => {
  if (!props.text) {
    return <></>;
  }

  return (
    <div className="tooltiptext flex items-center">
      <div className="px-2 text-center w-full block">{props.text}</div>
    </div>
  );
};
