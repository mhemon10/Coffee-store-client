import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F4F1] px-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2
          className="text-4xl text-center mb-6 text-[#331A15]"
          style={{ fontFamily: "Rancho, cursive" }}>
          Sign In
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border rounded focus:outline-none focus:border-[#D2B48C]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded focus:outline-none focus:border-[#D2B48C]"
          />

          <button
            type="submit"
            className="w-full bg-[#D2B48C] py-3 rounded font-bold text-[#331A15] hover:bg-[#c2a173] transition">
            Login ☕
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          New here?{" "}
          <Link to="/signup" className="text-[#D2B48C] font-semibold">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
