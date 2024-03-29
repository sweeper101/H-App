import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./login.css";

const schema = yup
  .object({
    email: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form class="login_container" onSubmit={handleSubmit(onSubmit)}>
      <div class="login_container_2 ">
        <div class="login_container_3 ">
          <div class="login_container_3-img">
            <img src="./4428861.jpg" alt="img" />
          </div>
          <div class="login_container_content">
            <div class="login_container_content-width">
              <div class="login_container_content-logo">
                <img src="./H.png" />
              </div>
              <h1>Login to Your Account</h1>
              <div>
                <label class="email">Email</label>
                <input
                  type="email"
                  placeholder=""
                  {...register("email", { required: true, maxLength: 20 })}
                />
                <p>{errors.email?.message}</p>
              </div>
              <div>
                <label class="password">Password</label>
                <input
                  placeholder=""
                  type="password"
                  {...register("password", { required: true, maxLength: 20 })}
                />
                <p>{errors.password?.message}</p>
              </div>
              <p>
                <a
                  class="text-sm text-blue-600 hover:underline"
                  href="./forgot-password.html"
                >
                  Forgot your password?
                </a>
              </p>

              <button className="button1" href="#">
                Log in
              </button>

              <hr />

              <div class="login_container_content-logo-bottom">
                <button>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  Github
                </button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <defs>
                      <path
                        id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      />
                    </defs>
                    <clipPath id="b">
                      <use href="#a" overflow="visible" />
                    </clipPath>
                    <path
                      clip-path="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    />
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Login;
