import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormErrorMessage from "../../../components/FormErrorMessage";
import MainLayout from "../../../components/layout/MainLayout";
import useUser from "../../../hooks/useUser";
import saveMessage from "../api/newMessage";

export default function NewMessage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useUser();

  const navigate = useNavigate();

  async function onSubmit(data: FieldValues) {
    await saveMessage({
      message: data.message,
      userId: user!.id,
    });

    navigate("/messages");
  }

  return (
    <MainLayout>
      <main>
        <h1>New message</h1>

        <form
          className="form"
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          {errors.message && (
            <FormErrorMessage message={errors.message.message as string} />
          )}
          <textarea
            {...register("message", { required: "Please enter a message" })}
            placeholder="Message"
          />
          <button type="submit">Save</button>
        </form>
      </main>
    </MainLayout>
  );
}
