import { useQuery } from "@tanstack/react-query";
import { MessageType } from "../../../types/MessageType";
import getMessagesForUser from "../api/getMessagesForUser";

export function useGetMessagesForUser(userId: number): [MessageType] | null {
  const { data } = useQuery({
    queryKey: ["messages"],
    queryFn: () => getMessagesForUser(userId),
  });

  return data ? data : null;
}
