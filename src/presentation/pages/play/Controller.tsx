// import { useParams } from "react-router-dom";

import { Button, Loading } from "@presentation/components";
import { Rock, Paper, Scissors, Reset } from "@presentation/components/Icons";
import { useState } from "react";

enum State {
  PLAYING = "PLAYING",
  CALCULATING = "CALCULATING",
  YOU_WIN = "YOU_WIN",
  YOU_LOOSE = "YOU_LOOSE",
}

type Choice = "ROCK" | "PAPER" | "SCISSORS" | "NONE";

const Controller = () => {
  const [gameState, setGameState] = useState<State>(State.PLAYING);
  const [choice, setChoice] = useState<Choice>("NONE");
  // const { id } = useParams();
  const handleChoice = (choice: Choice) => {
    setChoice(choice);
  };

  const executePlay = () => {
    setGameState(State.CALCULATING);
    console.log("Criando sala...");
    setTimeout(() => {
      setGameState(State.YOU_WIN);
      setChoice("NONE");
    }, 2000);

    console.log(gameState);
  };

  return (
    <div className="play">
      {gameState === State.PLAYING && (
        <>
          <h2>Selecione sua jogada</h2>
          <div className="play__buttons">
            <Button
              className="play__buttons__button"
              color="primary"
              variant={choice === "ROCK" ? "outlined" : "text"}
              endIcon={<Rock />}
              onClick={() => handleChoice("ROCK")}
            />
            <Button
              className="play__buttons__button"
              color="primary"
              variant={choice === "PAPER" ? "outlined" : "text"}
              endIcon={<Paper />}
              onClick={() => handleChoice("PAPER")}
            />
            <Button
              className="play__buttons__button"
              color="primary"
              variant={choice === "SCISSORS" ? "outlined" : "text"}
              endIcon={<Scissors />}
              onClick={() => handleChoice("SCISSORS")}
            />
          </div>
          <div className="play__confirm">
            <Button
              disabled={choice === "NONE"}
              text="Confirmar"
              color="primary"
              onClick={executePlay}
            />
          </div>
        </>
      )}
      {gameState === State.CALCULATING && (
        <Loading text="Aguardando adversário" />
      )}
      {gameState === State.YOU_WIN && (
        <div className="play__result">
          <h3>Você ganhou</h3>
          <Button
            text="Jogar novamente"
            color="primary"
            variant="outlined"
            endIcon={<Reset />}
            onClick={() => setGameState(State.PLAYING)}
          />
        </div>
      )}
      {gameState === State.YOU_LOOSE && (
        <>
          <h3>Você perdeu</h3>
          <Button
            text="Jogar novamente"
            color="primary"
            variant="outlined"
            endIcon={<Reset />}
            onClick={() => setGameState(State.PLAYING)}
          />
        </>
      )}
    </div>
  );
};

export default Controller;
