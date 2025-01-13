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

  useEffect(() => {
    const form = document.querySelector("form");
    const focusableElements = form.querySelectorAll(
      'input, button, a, [tabindex]:not([tabindex="-1"])'
    );

    const handleTab = (event) => {
      const elements = Array.from(focusableElements);
      const firstElement = elements[0];
      const lastElement = elements[elements.length - 1];

      if (event.key === "Tab") {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleTab);

    return () => {
      document.removeEventListener("keydown", handleTab);
    };
  }, []);

  const onSubmit = async (data) => {
    try {
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
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <section className={css["sign-in-page"]}>
      <ToastContainer />
      <div className={css["logo"]} onClick={handleLogoClick} tabIndex="0">
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
              tabIndex="1"
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
                autoComplete="current-password"
                tabIndex="2"
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
        </div>

        <button type="submit" className={css["submit-button"]} tabIndex="3">
          Sign In
        </button>

        <p className={css["text-link"]}>
          Don’t have an account?{" "}
          <a href="/signup" className={css["sign-up-link"]} tabIndex="4">
            Sign Up
          </a>
        </p>
      </form>
    </section>
  );
};

export default SignInForm;
