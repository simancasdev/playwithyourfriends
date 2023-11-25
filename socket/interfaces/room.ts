import {Player} from "./player";

export type Room = {
  id: string;
  host: Player;
  players: Player[];
};
