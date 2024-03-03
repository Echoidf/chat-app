import GenderCheckBox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs)
    await signup({ ...inputs });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rbg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-400">
        <h1 className="text-3xl font-semibold text-center text-blue-400">
          SignUp
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-300">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-300">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-300">Gender</span>
            </label>
            <GenderCheckBox
              onCheckBoxChange={handleCheckBoxChange}
              selectedGender={inputs.gender}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-300">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-300">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <div className="py-2">
            <Link to={"/login"} className="link link-info">
              Already have a account?
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
              className="text-xl relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <span>Sign Up</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
