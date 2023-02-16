import { persistentAtom, persistentMap } from "@nanostores/persistent";

export type PlayerStoreType = {
  speed: number;
  mode: "player" | "theater";
};

export const playerStore = persistentMap<PlayerStoreType>(
  "persistant-player-store-afkar",
  { speed: 0, mode: "player" },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
    listen: true,
  }
);

export const updateSpeed = (val: number) => {
  playerStore.setKey("speed", val);
};
export const changeMode = (mode: "player" | "theater") => {
  playerStore.setKey("mode", mode);
};
