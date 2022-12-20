import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormErrorMessage from "../../../components/FormErrorMessage";
import MainLayout from "../../../components/layout/MainLayout";
import useUser from "../../../hooks/useUser";
import registerUser from "../api/registerUser";

export default function SelectUsername() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { signIn } = useUser();

  async function onSubmit(data: FieldValues) {
    const user = await registerUser({
      username: data.username,
    });

    signIn(user);

    navigate("/");
  }

  return (
    <MainLayout>
      <main>
        <h1>Use a username</h1>

        <form
          className="form"
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          {errors.username && (
            <FormErrorMessage message={errors.username.message as string} />
          )}
          <input
            {...register("username", { required: "Please enter a username" })}
            placeholder="Username"
          />

          <button type="submit">Register</button>
        </form>
      </main>
    </MainLayout>
  );
}
