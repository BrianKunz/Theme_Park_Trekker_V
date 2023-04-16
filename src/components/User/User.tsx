import React from "react";
import CreateUser from "./CreateUser/CreateUser";
import LoginUser from "./LoginUser/LoginUser";

interface Props {
  user: User;
}

export const User: React.FC<Props> = ({}) => {
  return (
    <div>
      <CreateUser />
      <LoginUser />
    </div>
  );
};
