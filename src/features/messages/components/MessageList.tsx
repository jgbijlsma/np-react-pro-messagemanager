import { MessageType } from "../../../types/MessageType";
import "./MessageList.css";

export default function MessageList({ messages }: { messages: [MessageType] }) {
  return (
    <ul className="messageList">
      {messages.map((message, i) => {
        return <MessageListItem message={message} key={i} />;
      })}
    </ul>
  );
}

function MessageListItem({ message }: { message: MessageType }) {
  return (
    <li className="messageListItem">
      <h2>{message.username}</h2>
      <p>{message.message}</p>
    </li>
  );
}
