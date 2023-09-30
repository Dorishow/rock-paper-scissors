import { paths } from "@presentation/routes/router";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface Props {
  children: ReactNode;
}

export enum RoomState {
  NONE = "NONE",
  CREATING_ROOM = "CREATING_ROOM",
  CREATED_ROOM = "CREATED_ROOM",
  ERROR_ON_CREATE = "ERROR_ON_CREATE",
}

interface ContextValue {
  roomState: RoomState;
  createRoom: () => void;
  copyLink: () => void;
  getRoom: () => string;
}

const GameContext = createContext({} as ContextValue);

const GameProvider = ({ children }: Props) => {
  const [roomState, setRoomState] = useState<RoomState>(RoomState.NONE);

  const createRoom = () => {
    try {
      setRoomState(RoomState.CREATING_ROOM);
      console.log("Criando sala...");
      setTimeout(() => {
        setRoomState(RoomState.CREATED_ROOM);
      }, 2000);
    } catch (e) {
      setRoomState(RoomState.ERROR_ON_CREATE);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText("link");
  };

  const getRoom = () => `${paths.room.play}/uuid`;

  const providerValue = useMemo(() => ({ createRoom, copyLink, getRoom }), []);
  return (
    <GameContext.Provider value={{ ...providerValue, roomState }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
export const useGame = () => useContext(GameContext);
