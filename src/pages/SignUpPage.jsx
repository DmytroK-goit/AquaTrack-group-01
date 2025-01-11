import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import css from "./SignUpPage.module.css";
import Logo from "../components/HomePage/HomePageComponents/Logo.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../redux/UserAuth/operations.js";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Repeat password is required"),
});

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/tracker");
    }
  }, [isLoggedIn, navigate]);

  const notify = (message) => toast.error(message);

  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log({ email, password });
    const result = await dispatch(registerUser({ email, password }));
    console.log("ssss");
    if (registerUser.fulfilled.match(result)) {
      navigate("/tracker");
    } else {
      console.error(result.error.message);
      notify("Sign-up failed. Please try again."),
        {
          className: css["toast-error"],
        };
    }
  };

  return (
    <section className={css["sign-up-page"]}>
      <ToastContainer />
      <div className={css["logo"]}>
        <Logo />
      </div>
      <form className={css["sign-up-form"]} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={css["form-title"]}>Sign Up</h1>
        <div className={css["input_main_wrapper"]}>
          <div className={css["input__wrapper"]}>
            <label>Email</label>
            <input
              id="email"
              type="email"
              className={`${css["input__field"]} ${
                errors.email ? css["input__field--error"] : ""
              }`}
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className={css["error-text"]}>{errors.email.message}</p>
            )}
          </div>

          <div className={css["input__wrapper"]}>
            <label>Password</label>
            <div className={css["input-password"]}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className={`${css["input__field"]} ${
                  errors.password ? css["input__field--error"] : ""
                }`}
                placeholder="Enter your password"
                {...register("password")}
              />
              <svg
                className={css["input__icon"]}
                onClick={() => setShowPassword(!showPassword)}
              >
                👁️
              </svg>
            </div>
            {errors.password && (
              <p className={css["error-text"]}>{errors.password.message}</p>
            )}
          </div>

          <div className={css["input__wrapper"]}>
            <label>Repeat Password</label>
            <div className={css["input-password"]}>
              <input
                id="repeatPassword"
                type={showRepeatPassword ? "text" : "password"}
                className={`${css["input__field"]} ${
                  errors.repeatPassword ? css["input__field--error"] : ""
                }`}
                placeholder="Repeat your password"
                {...register("repeatPassword")}
              />
              <svg
                className={css["input__icon"]}
                onClick={() => setShowRepeatPassword(!showRepeatPassword)}
              >
                👁️
              </svg>
            </div>
            {errors.repeatPassword && (
              <p className={css["error-text"]}>
                {errors.repeatPassword.message}
              </p>
            )}
          </div>
        </div>

        <button type="submit" className={css["submit-button"]}>
          Sign Up
        </button>

        <p className={css["text-link"]}>
          Already have an account?{" "}
          <a href="/signin" className={css["sign-in-link"]}>
            Sign In
          </a>
        </p>
      </form>
    </section>
  );
};

export default SignUpForm;
