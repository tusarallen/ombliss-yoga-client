/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null); // Add the error state

  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User Login Successfully",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("Password not matched"); // Set the error message
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Helmet>
        <title>ŌmBliss Yoĝa | Login</title>
      </Helmet>
      <div className="text-center md:my-12">
        <h1 className="text-5xl font-bold">SignIn Here!</h1>
      </div>
      <div className="hero font-bold mb-20">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <div className="md:w-1/2 md:mr-12 mt-32">
            <img src="https://i.ibb.co/WDtxnhL/image.png" alt="" />
          </div>
          <div className="card flex-shrink-0 shadow-2xl bg-base-200 md:w-[400px] m-7 md:m-0">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              {error && <div className="text-red-500 mb-2">{error}</div>}
              <div className="form-control">
                <label className="label">
                  <span className=" text-xl">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered pr-10"
                    {...register("password", { required: true })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 -right-5 md:right-0 pr-3 flex items-center"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <IoEyeOff className="text-gray-500" size={25} />
                    ) : (
                      <IoEye className="text-gray-500" size={25} />
                    )}
                  </button>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-4">
                <input
                  className="btn btn-warning hover:bg-black hover:text-white text-xl"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="p-3 text-xl">
              <small>
                New Here?{" "}
                <Link
                  className="underline text-xl font-bold text-[green]"
                  to="/signup"
                >
                  Create an account
                </Link>
              </small>
            </p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
