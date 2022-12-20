import { Link } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import LinkBox from "../../../components/LinkBox";
import MessageList from "../components/MessageList";
import { useGetMessages } from "../hooks/useGetAllMessages";

export default function MessageOverview() {
  const messages = useGetMessages();

  return (
    <MainLayout>
      <main>
        <LinkBox to="/messages/new">New message</LinkBox>
        {messages && <MessageList messages={messages} />}
      </main>
    </MainLayout>
  );
}
