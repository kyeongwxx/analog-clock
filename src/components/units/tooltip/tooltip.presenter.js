import * as Tooltip from "./tooltip.styles";

export default function TooltipUI(props) {
  return (
    <Tooltip.Tooltip
      clientX={props.clientX}
      clientY={props.clientY}
      tooltipVisible={props.tooltipVisible}
    >
      {props.message}
    </Tooltip.Tooltip>
  );
}
