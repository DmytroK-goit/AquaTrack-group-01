import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/UserAuth/operations";
import css from "./SignInPage.module.css";
import Logo from "../components/HomePage/HomePageComponents/Logo.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

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

  const onSubmit = async (data) => {
    const result = await dispatch(login(data));
    if (login.fulfilled.match(result)) {
      navigate("/tracker");
    } else {
      if (result.error.message === "Request failed with status code 401") {
        toast.error("Email or password is incorrect.");
      } else {
        toast.error("Sign-in failed. Please try again.");
      }
    }
  };

  return (
    <section className={css["sign-in-page"]}>
      <ToastContainer />
      <div className={css["logo"]}>
        <Logo />
      </div>
      <form className={css["sign-in-form"]} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={css["form-title"]}>Sign In</h1>
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

          <div className={css["input-password"]}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className={`${css["input__field"]} ${
                errors.password ? css["input__field--error"] : ""
              }`}
              placeholder="Enter your password"
              {...register("password")}
              autoComplete="current-password"
            />

            <svg
              className={`${css["input__icon"]} ${
                showPassword ? css["active"] : ""
              }`}
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              role="button"
              tabIndex="0"
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  setShowPassword(!showPassword);
              }}
            >
              <use
                href={`/icons.svg#${
                  showPassword ? "icon-eye-off" : "icon-eye"
                }`}
              />
            </svg>
          </div>

          {errors.password && (
            <p className={css["error-text"]}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className={css["submit-button"]}>
          Sign In
        </button>

        <p className={css["text-link"]}>
          Don’t have an account?{" "}
          <a href="/signup" className={css["sign-up-link"]}>
            Sign Up
          </a>
        </p>
      </form>
    </section>
  );
};

export default SignInForm;
