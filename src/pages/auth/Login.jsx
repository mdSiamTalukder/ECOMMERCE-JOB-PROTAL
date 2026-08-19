
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiBriefcase, FiEye, FiEyeOff } from "react-icons/fi";

import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../features/auth/authSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const from = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch(loginStart());

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("LOGIN RESPONSE:", data);
      console.log("LOGIN USER:", data.user);
      console.log("USER ROLE:", data.user?.role);

      dispatch(
        loginSuccess({
          user: data.user,
          token: data.token,
        })
      );

      navigate(from, { replace: true });
    } catch (err) {
      console.error("Login error:", err);

      dispatch(
        loginFailure(err.message || "Login failed")
      );
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-base-200 px-6 py-12">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-base-100 shadow-xl lg:grid-cols-2">

        {/* Left Side */}

        <div className="hidden bg-primary p-10 text-primary-content lg:flex lg:flex-col lg:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <FiBriefcase className="text-xl" />
              </div>

              <h2 className="text-2xl font-extrabold">
                JobHub
              </h2>

            </div>

            <h1 className="mt-16 text-4xl font-extrabold leading-tight">
              Welcome back.
              <br />
              Your next opportunity is waiting.
            </h1>

            <p className="mt-5 max-w-md leading-7 opacity-80">
              Sign in to manage your applications, discover new
              opportunities, and continue your career journey.
            </p>

          </div>

          <p className="text-sm opacity-60">
            Find your opportunity with JobHub.
          </p>

        </div>

        {/* Form */}

        <div className="p-8 sm:p-12">

          <div className="mx-auto max-w-md">

            <div className="mb-8 lg:hidden">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-content">
                  <FiBriefcase className="text-xl" />
                </div>

                <h2 className="text-2xl font-extrabold">
                  Job<span className="text-primary">Hub</span>
                </h2>

              </div>

            </div>

            <div>

              <h1 className="text-3xl font-extrabold">
                Sign in
              </h1>

              <p className="mt-2 text-base-content/60">
                Welcome back! Please enter your details.
              </p>

            </div>

            <form
              onSubmit={handleLogin}
              className="mt-8 space-y-5"
            >

              {/* Email */}

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                  required
                />

              </div>

              {/* Password */}

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="input input-bordered w-full pr-12"
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (prev) => !prev
                      )
                    }
                    className="btn btn-ghost btn-sm btn-circle absolute right-2 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <FiEyeOff />
                    ) : (
                      <FiEye />
                    )}
                  </button>

                </div>

              </div>

              {/* Remember / Forgot */}

              <div className="flex items-center justify-between text-sm">

                <label className="flex cursor-pointer items-center gap-2">

                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                  />

                  <span>
                    Remember me
                  </span>

                </label>

                <button
                  type="button"
                  className="font-semibold text-primary hover:underline"
                >
                  Forgot password?
                </button>

              </div>

              {/* Error */}

              {error && (
                <div className="alert alert-error">

                  <span>
                    {error}
                  </span>

                </div>
              )}

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>

            </form>

            {/* Register */}

            <p className="mt-8 text-center text-sm text-base-content/60">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="font-bold text-primary hover:underline"
              >
                Create an account
              </Link>

            </p>

          </div>

        </div>

      </div>
    </main>
  );
};

export default Login;

