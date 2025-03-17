import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/button/Button";

export const BackButton: React.FC = () => {
  const back = useNavigate();

  const backHandler = () => {
    back(-1);
  };
  return <Button onClick={backHandler}>назад</Button>;
};
