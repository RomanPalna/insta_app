import { useForm } from "react-hook-form";
import Radio from "./Radio";

export default function InputComment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="input">
      <h1 className="input__title">Leave comment</h1>
      <form className="input__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input__form--container">
          <Radio />

          <label className="input__firstname" htmlFor="firstName">
            <p className="input__firstname--text">Your Name</p>
            <input
              className="input__firstname--input"
              placeholder="Name"
              {...register("firstName", {
                required: "Your name is required!",
                maxLength: {
                  value: 10,
                  message: "Max length is 2",
                },
              })}
            />
          </label>
          {errors.firstName && (
            <div style={{ color: "red" }}>{errors.firstName.message}</div>
          )}

          <button className="input__button">Leave comment</button>
        </div>

        <label htmlFor="comment">Comment</label>
        <input
          placeholder="Leave some comment"
          {...register("comment", {
            required: "Comment is required!",
          })}
        />
        {errors.comment && (
          <div style={{ color: "red" }}>{errors.comment.message}</div>
        )}
      </form>
    </div>
  );
}
