import getAllMessages from "../api/getAllMessages";
import { MessageType } from "../../../types/MessageType";
import { useQuery } from "@tanstack/react-query";

export function useGetMessages(): [MessageType] | null {
  const { data } = useQuery({
    queryKey: ["messages"],
    queryFn: () => getAllMessages(),
  });

  return data ? data : null;
}
