import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  text?: string;
}

const Loading = (props: Props) => {
  return (
    <div className="loading" {...props}>
      {props.text ?? "Carregando..."}
    </div>
  );
};

export default Loading;
