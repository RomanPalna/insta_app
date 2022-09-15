import { useForm } from "react-hook-form";
import star from "../../pictures/star.png";
import noStar from "../../pictures/noStar.png";

const status = ["Bad", "Not Good", "Good", "Very Good", "Excellent"];

export default function InputComment() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      stars: "0",
      firstName: "",
      comment: "",
    },
  });

  const onSubmit = (data) => {
    // const fd = new FormData();

    // fd.append("aaa", data.stars);

    reset();
  };

  const stars = watch("stars");

  return (
    <div className="input">
      <h1 className="input__title">Leave comment</h1>
      <form className="input__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input__form--container">
          <div htmlFor="stars" className="input__radio">
            {[0, 1, 2, 3, 4].map((item) => {
              return (
                <label
                  className="input__label"
                  style={{
                    backgroundImage:
                      item > +stars ? `url(${noStar})` : `url(${star})`,
                    height: 27,
                    width: 39,
                    display: "block",
                  }}
                  key={item}
                  htmlFor={item}
                >
                  <input
                    {...register("stars")}
                    className="input__radio"
                    id={item}
                    value={item}
                    type="radio"
                    style={{ display: "none" }}
                    key={`star-${item}`}
                  />
                </label>
              );
            })}
            <p className="input__radio--text">{status[stars]}</p>
          </div>

          <label className="input__firstname" htmlFor="firstName">
            <p className="input__firstname--text">Your Name</p>
            <input
              {...register("firstName", {
                required: "Your name is required!",
                maxLength: {
                  value: 10,
                  message: "Max length is 2",
                },
              })}
              className="input__firstname--input"
              placeholder="Name"
            />
          </label>

          {errors.firstName && (
            <div style={{ color: "red" }}>{errors.firstName.message}</div>
          )}
          <button className="input__button" type="submit">
            Leave comment
          </button>
        </div>

        {/* Comments */}

        <div className="input__comment">
          <label className="input__comment--label" htmlFor="comment">
            Comment
          </label>
          <textarea
            {...register("comment", {
              required: "Comment is required!",
            })}
            className="input__comment--textarea"
            placeholder="Leave some words"
          />
          {errors.comment && (
            <div style={{ color: "red" }}>{errors.comment.message}</div>
          )}
        </div>
      </form>
    </div>
  );
}
