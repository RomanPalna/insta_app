import { useForm } from "react-hook-form";
import star from "../../pictures/star.png";
import noStar from "../../pictures/noStar.png";
import { useId } from "react";

export default function Radio() {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm();

  const stars = watch("stars");

  const discription = () => {
    let text = "";

    if (stars === "0") {
      text = "Bad";
    }
    if (stars === "1") {
      text = "Not Good";
    }
    if (stars === "2") {
      text = "Good";
    }
    if (stars === "3") {
      text = "Very Good";
    }
    if (stars === "4") {
      text = "Excellent";
    }
    return text;
  };

  return (
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
              className="input__radio"
              id={item}
              {...register("stars")}
              value={item}
              type="radio"
              style={{ display: "none" }}
              // hidden
              key={`star-${item}`}
            />
          </label>
        );
      })}
      <p className="input__radio--text">{discription()}</p>
    </div>
  );
}
