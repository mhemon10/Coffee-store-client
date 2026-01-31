import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F4F1] to-[#E6D3B1] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10 border border-[#e8d9c5]">
        <h2
          className="text-5xl text-center mb-2 text-[#331A15]"
          style={{ fontFamily: "Rancho, cursive" }}>
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Sip & Savor your favorite coffee ☕
        </p>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
          />

          <button
            type="submit"
            className="w-full bg-[#D2B48C] py-3 rounded-xl font-bold text-[#331A15] 
            hover:bg-[#c2a173] transition-all duration-300 tracking-wide">
            Sign In ☕
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#D2B48C] font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
