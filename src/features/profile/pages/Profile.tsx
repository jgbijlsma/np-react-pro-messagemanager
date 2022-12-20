import MainLayout from "../../../components/layout/MainLayout";
import MessageList from "../../../features/messages/components/MessageList";
import useUser from "../../../hooks/useUser";
import { useGetMessagesForUser } from "../../messages/hooks/useGetMessagesForUser";

export default function Profile() {
  const { user } = useUser();

  const messages = useGetMessagesForUser(user!.id);

  return (
    <MainLayout>
      <main>
        <h1 className="mb-8 text-4xl text-center">Hello {user?.username}</h1>
        {messages && (
          <>
            <h2 className="mb-2 text-2xl">Your messages:</h2>
            <MessageList messages={messages} />
          </>
        )}
      </main>
    </MainLayout>
  );
}
