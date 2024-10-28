import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const userInfor = useContext(UserContext);
  return (
    <div>
      <h1>{userInfor.name}</h1>
    </div>
  );
};

export default UserProfile;
