import { atom } from "recoil";

export const second = atom({
  key: "second",
  default: 0,
});

export const minute = atom({
  key: "minute",
  default: 0,
});

export const hour = atom({
  key: "hour",
  default: 0,
});
