import { Button, Loading } from "@presentation/components";
import { ArrowRight, Clipboard } from "@presentation/components/Icons";
import { RoomState, useGame } from "@presentation/context/game";
import { useNavigate } from "react-router-dom";

const Controller = () => {
  const navigate = useNavigate();
  const { roomState, copyLink, createRoom, getRoom } = useGame();

  return (
    <div className="generate-room">
      <div className="generate-room__form">
        {roomState !== RoomState.CREATED_ROOM ? (
          <Button
            disabled={roomState === RoomState.CREATING_ROOM}
            className="generate-room__form__button"
            text="Criar sala"
            onClick={createRoom}
          />
        ) : null}

        {roomState === RoomState.CREATED_ROOM ? (
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
              onClick={() => navigate(getRoom())}
              endIcon={<ArrowRight />}
            />
          </div>
        ) : null}
        {roomState === RoomState.CREATING_ROOM && (
          <Loading text="Criando sala..." />
        )}
      </div>
    </div>
  );
};

export default Controller;
