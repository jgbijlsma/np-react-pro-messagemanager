import { useEffect, useState } from "react";
import { MessageType } from "../../../types/MessageType";
import getMessagesForUser from "../api/getMessagesForUser";

export function useGetMessagesForUser(userId: number): [MessageType] | null {
  const [messages, setMessages] = useState<[MessageType]>();

  useEffect(() => {
    getMessages(userId);
    async function getMessages(userId: number) {
      const m = await getMessagesForUser(userId);
      setMessages(m);
    }
  }, []);

  return messages ? messages : null;
}
