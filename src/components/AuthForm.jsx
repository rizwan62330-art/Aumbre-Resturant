import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import usePageTitle from "../hooks/usePageTitle";
import PageBanner from "./PageBanner";
export default function AuthForm({ mode }) {
  const isSignup = mode === "signup";
  const title = isSignup ? "Create an account" : "Welcome back";
  usePageTitle(isSignup ? "Sign up" : "Log in");
  const { signup, login } = useAuth();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [visible, setVisible] = useState(false);
  const fields = isSignup
    ? ["name", "email", "password", "confirm"]
    : ["email", "password"];
  const labels = {
    name: "Full name",
    email: "Email address",
    password: "Password",
    confirm: "Confirm password",
  };
  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    const next = {};
    if (isSignup && !values.name.trim()) next.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Enter a valid email address.";
    if (values.password.length < 8)
      next.password = "Use at least 8 characters.";
    if (isSignup && values.confirm !== values.password)
      next.confirm = "Passwords must match.";
    setErrors(next);
    setMessage("");
    if (Object.keys(next).length) {
      formRef.current.elements[Object.keys(next)[0]].focus();
      return;
    }
    setBusy(true);
    try {
      await (isSignup ? signup(values) : login(values));
      navigate("/account", {
        replace: true,
      });
    } catch (error) {
      setMessage(error.message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <PageBanner
        title={isSignup ? "Sign Up" : "Log In"}
        subtitle={`Home / ${isSignup ? "Sign up" : "Log in"}`}
      />
      <main className="grid min-h-[65vh] place-items-center px-5 py-[72px] max-[600px]:px-4 max-[600px]:py-10">
        <section
          className="w-full max-w-[480px] border border-divider bg-forest-deep p-10 max-[600px]:px-5 max-[600px]:py-[26px] [&_h1]:font-heading [&_h1]:text-[30px] [&_h1]:mt-3 [&_h1]:mb-[18px] [&_h2]:font-heading [&_h2]:text-[30px] [&_h2]:mt-3 [&_h2]:mb-[18px] max-[600px]:[&_h2]:text-[26px] [&_p]:text-[19px] [&_p]:leading-[1.6]"
          aria-labelledby="auth-title"
        >
          <p className="text-accent tracking-[2px] uppercase">
            Àumbre Restaurant
          </p>
          <h2 id="auth-title">{title}</h2>
          <p>
            {isSignup
              ? "Your next memorable meal starts here."
              : "Take a seat. We’re glad you’re here."}
          </p>
          {/* <p className="my-5 border-l-2 border-accent px-3 py-2">
            Demo accounts work in this tab until you refresh.
          </p> */}
          <form ref={formRef} noValidate onSubmit={submit}>
            {fields.map((name) => (
              <div
                className="mt-5 [&_label]:block [&_label]:mb-2 [&_label]:text-[19px] [&_small]:block [&_small]:text-base [&_small]:leading-[1.4] [&_small]:mt-1.5"
                key={name}
              >
                <label htmlFor={name}>{labels[name]}</label>
                <div className="relative">
                  <input
                    className="w-full min-h-12 border border-divider bg-forest p-3 text-lg text-parchment [font-family:inherit] aria-invalid:border-error [&[name=password]]:pr-[70px]"
                    id={name}
                    name={name}
                    type={
                      name === "email"
                        ? "email"
                        : ["password", "confirm"].includes(name)
                          ? visible
                            ? "text"
                            : "password"
                          : "text"
                    }
                    autoComplete={
                      name === "name"
                        ? "name"
                        : name === "email"
                          ? "email"
                          : isSignup
                            ? "new-password"
                            : "current-password"
                    }
                    value={values[name]}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        [name]: e.target.value,
                      })
                    }
                    aria-invalid={!!errors[name]}
                    aria-describedby={
                      errors[name]
                        ? `${name}-error`
                        : name === "password"
                          ? "password-help"
                          : undefined
                    }
                  />
                  {name === "password" && (
                    <button
                      className="absolute right-2.5 top-2.5 min-h-[30px] border-0 bg-transparent text-accent-light"
                      type="button"
                      aria-label={visible ? "Hide password" : "Show password"}
                      aria-pressed={visible}
                      onClick={() => setVisible(!visible)}
                    >
                      {visible ? "Hide" : "Show"}
                    </button>
                  )}
                </div>
                {name === "password" && (
                  <small id="password-help">Use at least 8 characters.</small>
                )}
                {errors[name] && (
                  <small className="text-error" id={`${name}-error`}>
                    {errors[name]}
                  </small>
                )}
              </div>
            ))}
            <p className="text-error my-3 min-h-[30px]" role="alert">
              {message}
            </p>
            <button
              className="block w-full min-h-[50px] border border-accent bg-accent p-3.5 text-center font-heading text-[15px] text-forest no-underline hover:bg-accent-light disabled:cursor-wait disabled:opacity-65"
              disabled={busy}
              type="submit"
            >
              {busy
                ? isSignup
                  ? "Creating account…"
                  : "Logging in…"
                : isSignup
                  ? "Create account"
                  : "Log in"}
            </button>
          </form>
          <p className="mt-6 text-center [&_a]:text-accent-light">
            {isSignup ? "Already have an account?" : "New to Àumbre?"}{" "}
            <Link to={isSignup ? "/login" : "/signup"}>
              {isSignup ? "Log in" : "Sign up"}
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
