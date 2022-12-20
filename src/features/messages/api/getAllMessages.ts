import axios from "axios";
import { MessageType } from "../../../types/MessageType";

export default async function getAllMessages(): Promise<[MessageType]> {
  const res = await axios.get(
    "http://localhost:3000/messages?_sort=id&_order=desc"
  );
  for (let i = 0; i < res.data.length; i++) {
    const message = res.data[i];
    const userRes = await axios.get(
      `http://localhost:3000/users?id=${message.userId}`
    );
    message.username = userRes.data[0].username;
    res.data[i] = message;
  }

  return res.data;
}
