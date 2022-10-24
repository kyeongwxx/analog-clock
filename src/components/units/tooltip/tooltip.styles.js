import styled from "@emotion/styled";

export const Tooltip = styled.div`
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  transform: translate(10%, -100%);
  z-index: 1001;
  left: ${(props) => props.clientX}px;
  top: ${(props) => props.clientY}px;
  display: ${(props) => (props.tooltipVisible ? "block" : "none")};
`;
