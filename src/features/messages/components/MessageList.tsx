import { MessageType } from "../../../types/MessageType";

export default function MessageList({ messages }: { messages: [MessageType] }) {
  return (
    <ul>
      {messages.map((message, i) => {
        return <MessageListItem message={message} key={i} />;
      })}
    </ul>
  );
}

function MessageListItem({ message }: { message: MessageType }) {
  return (
    <li>
      <h2>{message.username}</h2>
      <p>{message.message}</p>
    </li>
  );
}
