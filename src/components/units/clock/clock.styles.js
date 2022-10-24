import styled from "@emotion/styled";

export const Clock = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: -8px 8px 15px rgba(225, 225, 225, 0.05),
    20px 20px 20px rgba(0, 0, 0, 0.2),
    inset -8px -8px 15px rgba(225, 225, 225, 0.05),
    inset 20px 20px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1000;
  &::after {
    content: "";
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 11;
  }
`;
export const HandHour = styled.div`
  transform: translate(-50%) rotate(${(props) => props.hourRatio * 360}deg);
  position: absolute;
  bottom: 50%;
  left: 50%;
  border: 1px solid white;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: black;
  transform-origin: bottom;
  z-index: 10;
  width: 10px;
  height: 30%;
  background-color: black;
`;
export const HandMinute = styled.div`
  transform: translate(-50%) rotate(${(props) => props.minuteRatio * 360}deg);
  position: absolute;
  bottom: 50%;
  left: 50%;
  border: 1px solid white;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: black;
  transform-origin: bottom;
  z-index: 10;
  width: 7px;
  height: 40%;
  background-color: black;
`;
export const HandSecond = styled.div`
  transform: translate(-50%) rotate(${(props) => props.secondRatio * 360}deg);
  position: absolute;
  bottom: 50%;
  left: 50%;
  border: 1px solid white;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: black;
  transform-origin: bottom;
  z-index: 10;
  width: 5px;
  height: 45%;
  background-color: red;
`;
export const Number = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transform: rotate(var(--roation));
  font-size: 1.5rem;
  padding: 18px;
  --roation: ${(props) => props.deg}deg;
  div {
    transform: rotate(${(props) => -props.deg}deg);
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 5px;
    height: 15px;
    background-color: black;
  }
`;
