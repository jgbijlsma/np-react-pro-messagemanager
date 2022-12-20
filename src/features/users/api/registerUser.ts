import axios from "axios";
import { UserType } from "../../../types/UserType";

type RegisterUserParams = {
  username: string;
};

export default async function registerUser({
  username,
}: RegisterUserParams): Promise<UserType> {
  let res = await axios.get(`http://localhost:3000/users?username=${username}`);
  let user = res.data[0];

  if (!user) {
    res = await axios.post("http://localhost:3000/users", {
      username,
    });
    user = res.data;
  }

  return user;
}
