import { Button, Loading } from "@presentation/components";
import { ArrowRight, Clipboard } from "@presentation/components/Icons";
import { paths } from "@presentation/routes/router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

enum State {
  NONE = "NONE",
  CREATING_ROOM = "CREATING_ROOM",
  CREATED_ROOM = "CREATED_ROOM",
  ERROR_ON_CREATE = "ERROR_ON_CREATE",
}

const Controller = () => {
  const [pageState, setPageState] = useState<State>(State.NONE);
  const navigate = useNavigate();
  const createRoom = () => {
    try {
      setPageState(State.CREATING_ROOM);
      console.log("Criando sala...");
      setTimeout(() => {
        setPageState(State.CREATED_ROOM);
      }, 2000);
    } catch (e) {
      setPageState(State.ERROR_ON_CREATE);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText("link");
  };

  const navigateToRoom = () => {
    navigate(`${paths.room.play}/uuid`);
  };

  return (
    <div className="generate-room">
      <div className="generate-room__form">
        {pageState !== State.CREATED_ROOM ? (
          <Button
            disabled={pageState === State.CREATING_ROOM}
            className="generate-room__form__button"
            text="Criar sala"
            onClick={createRoom}
          />
        ) : null}

        {pageState === State.CREATED_ROOM ? (
          <div className="generate-room__checkout">
            <h3>Sua sala foi criada com sucesso</h3>
            <Button
              color="secondary"
              variant="outlined"
              className="generate-room__form__button"
              text="Copiar link"
              onClick={copyLink}
              endIcon={<Clipboard />}
            />
            <Button
              color="secondary"
              className="generate-room__form__button"
              text="Entrar"
              onClick={navigateToRoom}
              endIcon={<ArrowRight />}
            />
          </div>
        ) : null}
        {pageState === State.CREATING_ROOM && (
          <Loading text="Criando sala..." />
        )}
      </div>
    </div>
  );
};

export default Controller;
