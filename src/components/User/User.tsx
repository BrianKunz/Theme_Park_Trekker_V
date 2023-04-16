import React from "react";
import CreateUser from "./CreateUser/CreateUser";

interface Props {
  user: User;
}

export const User: React.FC<Props> = ({}) => {
  return (
    <div>
      <CreateUser />
    </div>
  );
};
