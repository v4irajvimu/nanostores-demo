import { persistentAtom } from "@nanostores/persistent";

export const count = persistentAtom<number>("persistant-count", 0, {
  encode: JSON.stringify,
  decode: JSON.parse,
  listen: true,
});

export const increase = () => {
  count.set(count.get() + 2);
};
export const decrease = () => {
  count.set(count.get() - 2);
};
