import axios from "axios";

type SaveMessageParams = {
  message: string;
  userId: number;
};

export default async function saveMessage({
  message,
  userId,
}: SaveMessageParams) {
  await axios.post("http://localhost:3000/messages", {
    message,
    userId,
  });
}
