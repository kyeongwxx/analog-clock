import { useState } from "react";
import { useRecoilState } from "recoil";
import { hour, minute, second } from "../../commons/store";
import TooltipUI from "./tooltip.presenter";

export default function Tooltip(props) {
  const [globalSecond] = useRecoilState(second);
  const [globalMinute] = useRecoilState(minute);
  const [globalHour] = useRecoilState(hour);

  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  let hh = globalHour;
  let mm = String(globalMinute).padStart(2, "0");
  let ss = String(globalSecond).padStart(2, "0");

  let message = `${hh}:${mm}:${ss}`;

  const mousemove = (event) => {
    setClientX(event.clientX);
    setClientY(event.clientY);
  };

  window.addEventListener("mousemove", mousemove);

  return (
    <TooltipUI
      message={message}
      clientX={clientX}
      clientY={clientY}
      tooltipVisible={props.tooltipVisible}
    />
  );
}
