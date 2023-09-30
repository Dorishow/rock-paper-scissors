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

export enum GameState {
  PLAYING = "PLAYING",
  CALCULATING = "CALCULATING",
  FINISHED = "FINISHED",
}

export type PlayerChoice = "ROCK" | "PAPER" | "SCISSORS" | "NONE";
export type GameResult = "YOU_WIN" | "YOU_LOOSE" | "DRAW" | "NONE";

interface ContextValue {
  roomState: RoomState;
  createRoom: () => void;
  copyLink: () => void;
  getRoom: () => string;
  gameState: GameState;
  executePlay: () => void;
  matchResult: GameResult;
  restartGame: (onSuccess?: () => void) => void;
}

const GameContext = createContext({} as ContextValue);

const GameProvider = ({ children }: Props) => {
  const [roomState, setRoomState] = useState<RoomState>(RoomState.NONE);
  const [gameState, setGameState] = useState<GameState>(GameState.PLAYING);
  const [matchResult, setMatchResult] = useState<GameResult>("NONE");

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

  const executePlay = () => {
    setGameState(GameState.CALCULATING);
    setTimeout(() => {
      setGameState(GameState.FINISHED);
      setMatchResult("DRAW");
    }, 2000);

    console.log(gameState);
  };

  const restartGame = (onSuccess?: () => void) => {
    setGameState(GameState.PLAYING);
    onSuccess?.();
  };

  const providerValue = useMemo(
    () => ({
      createRoom,
      copyLink,
      getRoom,
      executePlay,
      roomState,
      gameState,
      matchResult,
      restartGame,
    }),
    []
  );
  return (
    <GameContext.Provider value={{ ...providerValue, roomState, gameState }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
export const useGame = () => useContext(GameContext);
