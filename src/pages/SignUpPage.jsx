import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/UserAuth/operations";
import css from "./SignUpPage.module.css";
import Logo from "../components/HomePage/HomePageComponents/Logo.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(registerUser(data));
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/signin");
      } else {
        toast.error("Sign-up failed. Please try again.");
        console.error("Registration failed with response:", result);
      }
    } catch (error) {
      console.error("Registration failed with error:", error);
      toast.error(error?.message || "An error occurred during registration.");
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <section className={css["sign-up-page"]}>
      <ToastContainer />
      <div className={css["logo"]} onClick={handleLogoClick}>
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
                autoComplete="new-password"
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

          <div className={css["input__wrapper"]}>
            <label>Confirm Password</label>
            <div className={css["input-password"]}>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className={`${css["input__field"]} ${
                  errors.confirmPassword ? css["input__field--error"] : ""
                }`}
                placeholder="Confirm your password"
                {...register("confirmPassword")}
                autoComplete="new-password"
              />

              <svg
                className={`${css["input__icon"]} ${
                  showConfirmPassword ? css["active"] : ""
                }`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
                role="button"
                tabIndex="0"
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    setShowConfirmPassword(!showConfirmPassword);
                }}
              >
                <use
                  href={`/icons.svg#${
                    showConfirmPassword ? "icon-eye-off" : "icon-eye"
                  }`}
                />
              </svg>
            </div>
            {errors.confirmPassword && (
              <p className={css["error-text"]}>
                {errors.confirmPassword.message}
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
