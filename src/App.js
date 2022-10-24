import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import "./App.css";
import Clock from "./components/units/clock/clock.container";
import Tooltip from "./components/units/tooltip/tooltip.container";
import { hour, minute, second } from "./components/commons/store/index";

function App() {
  const [, setGlobalSecond] = useRecoilState(second);
  const [, setGlobalMinute] = useRecoilState(minute);
  const [, setGlobalHour] = useRecoilState(hour);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const currentDate = new Date();

  const setClock = () => {
    setGlobalSecond(currentDate.getSeconds());
    setGlobalMinute(currentDate.getMinutes());
    setGlobalHour(currentDate.getHours());
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setClock();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <Tooltip tooltipVisible={tooltipVisible} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Clock setTooltipVisible={setTooltipVisible} />
      </div>
    </>
  );
}

export default App;
