import {useRoom} from "context";
import {Game, Join} from "./lib";

interface RoomProps {}

export const Room: React.FC<RoomProps> = () => {
  const {connected} = useRoom();
  return connected ? <Game /> : <Join />;
};
