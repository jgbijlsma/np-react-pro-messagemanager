import "./FormErrorMessage.css";

export default function FormErrorMessage({ message }: { message: string }) {
  return <div className="formErrorMessage">{message}</div>;
}
