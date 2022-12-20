import { useEffect, useState } from "react";
import getAllMessages from "../api/getAllMessages";
import { MessageType } from "../../../types/MessageType";

export function useGetMessages(): [MessageType] | null {
  const [messages, setMessages] = useState<[MessageType]>();

  useEffect(() => {
    getMessages();
    async function getMessages() {
      const m = await getAllMessages();
      setMessages(m);
    }
  }, []);

  return messages ? messages : null;
}
