function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rbg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-400">
        <h1 className="text-3xl font-semibold text-center text-blue-400">
          Login
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-300">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            ></input>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-blue-300">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            ></input>
          </div>

          <div className="py-2">
            <a href="#" className="link link-info">
              {"Don't"} have a account?
            </a>
          </div>
          <div>
            <button className="btn btn-outline btn-info w-full h-6 text-xl">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
