import { atom } from "nanostores";

export const count = atom<number>(0);

export const increase = () => {
  count.set(count.get() + 1);
};
export const decrease = () => {
  count.set(count.get() - 1);
};
