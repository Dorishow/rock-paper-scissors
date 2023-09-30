// import { useParams } from "react-router-dom";

import { Button, Loading } from "@presentation/components";
import { Rock, Paper, Scissors, Reset } from "@presentation/components/Icons";
import { GameState, PlayerChoice, useGame } from "@presentation/context/game";
import { useState } from "react";

const Controller = () => {
  const [choice, setChoice] = useState<PlayerChoice>("NONE");
  // const { id } = useParams();

  const getIcon = () => {
    if (choice === "ROCK") return <Rock />;
    if (choice === "PAPER") return <Paper />;
    if (choice === "SCISSORS") return <Scissors />;
    return null;
  };

  const handleChoice = (choice: PlayerChoice) => {
    setChoice(choice);
  };

  const { gameState, executePlay, matchResult, restartGame } = useGame();

  return (
    <div className="play">
      {gameState === GameState.PLAYING && (
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
      {gameState === GameState.CALCULATING && (
        <Loading text="Aguardando adversário" />
      )}
      {gameState === GameState.FINISHED && (
        <>
          <div className="play__result">
            {matchResult === "YOU_WIN" && (
              <h3 className="play__result__win">Você ganhou</h3>
            )}
            {matchResult === "YOU_LOOSE" && (
              <h3 className="play__result__loose">Você perdeu</h3>
            )}
            {matchResult === "DRAW" && (
              <h3 className="play__result__draw">Empate</h3>
            )}
          </div>
          <div>
            <div className="play__result__checkout">
              <span>Você</span>
              <Button
                className="play__result__checkout__button"
                color="primary"
                variant="outlined"
                endIcon={getIcon()}
              />
            </div>
            <div className="play__result__checkout">
              <h4>Jogador 2</h4>
              <Button
                className="play__result__checkout__button"
                color="primary"
                variant="outlined"
                endIcon={getIcon()}
              />
            </div>
          </div>
          <Button
            className="play__result__checkout__reset"
            text="Jogar novamente"
            color="primary"
            variant="outlined"
            endIcon={<Reset />}
            onClick={() => restartGame(() => setChoice("NONE"))}
          />
        </>
      )}
    </div>
  );
};

export default Controller;
