import React from "react";
import "./register.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form class="register_container" onSubmit={handleSubmit(onSubmit)}>
      <div class="register_container_2">
        <div class="register_container_3">
          <div class="register_container_3-img">
            <img src="./4428861.jpg" alt="img" />
          </div>
          <div class="register_container_content ">
            <div class="register_container_content-width">
              <div class="register_container_content-logo ">
                <img src="./H.png" />
              </div>
              <h1>Sign up to Hollar</h1>
              <div>
                <label class="name">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true, maxLength: 20 })}
                />
                <p>{errors.name?.message}</p>
              </div>
              <div class="space">
                <label class="email">Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", { required: true, maxLength: 20 })}
                />
                <p>{errors.email?.message}</p>
              </div>
              <div>
                <label class="password">Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  {...register("password", { required: true, maxLength: 20 })}
                />
                <p>{errors.email?.message}</p>
              </div>
              <button className="button1" type="submit">
                Sign up
              </button>

              <div class="register_container_content-width-bottom">
                <p>
                  Don't have an account yet? <a href="#"> Sign up.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Register;
