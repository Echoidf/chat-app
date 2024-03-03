import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rbg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-400">
        <h1 className="text-3xl font-semibold text-center text-blue-400">
          Login
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-300">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-300">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className="py-2">
            <Link to={"/signup"} className="link link-info">
              {"Don't"} have a account?
            </Link>
          </div>
          <div
            className="group text-center [transform:translateZ(0)] px-3 py-2 
            rounded-lg bg-gray-200 overflow-hidden relative before:absolute
             before:bg-sky-600 before:bottom-0 before:left-0 before:h-full 
             before:w-full before:-translate-x-full hover:before:translate-x-0 
             before:transition before:ease-in-out before:duration-500"
          >
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="text-xl relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <span>Login</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

