import * as Clock from "./clock.styles";

export default function ClockUI(props) {
  return (
    <Clock.Clock
      onMouseOver={() => props.setTooltipVisible(true)}
      onMouseOut={() => props.setTooltipVisible(false)}
    >
      <Clock.HandHour hourRatio={((((props.secondRatio / 60) + props.minuteRatio) / 60) + props.hourRatio) / 12} />
      <Clock.HandMinute minuteRatio={((props.secondRatio / 60) + props.minuteRatio) / 60} />
      <Clock.HandSecond secondRatio={props.secondRatio / 60} />
      {props.timeArray.map((el, i) => (
        <Clock.Number deg={el} key={i}>
          <div>{i + 1}</div>
        </Clock.Number>
      ))}
    </Clock.Clock>
  );
}
