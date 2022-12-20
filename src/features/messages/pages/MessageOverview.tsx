import { Link } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import MessageList from "../components/MessageList";
import { useGetMessages } from "../hooks/useGetAllMessages";

export default function MessageOverview() {
  const messages = useGetMessages();

  return (
    <MainLayout>
      <main>
        <Link to="/messages/new">New message</Link>
        {messages && <MessageList messages={messages} />}
      </main>
    </MainLayout>
  );
}
