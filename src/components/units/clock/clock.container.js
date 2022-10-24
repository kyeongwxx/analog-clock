import React from "react";
import { useRecoilState } from "recoil";
import { hour, minute, second } from "../../commons/store";
import ClockUI from "./clock.presenter";

export default function Clock(props) {
  const timeArray = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360];
  const [secondRatio] = useRecoilState(second);
  const [minuteRatio] = useRecoilState(minute);
  const [hourRatio] = useRecoilState(hour);

  return (
    <ClockUI
      secondRatio={secondRatio}
      minuteRatio={minuteRatio}
      hourRatio={hourRatio}
      props={props}
      timeArray={timeArray}
      setTooltipVisible={props.setTooltipVisible}
    />
  );
}
