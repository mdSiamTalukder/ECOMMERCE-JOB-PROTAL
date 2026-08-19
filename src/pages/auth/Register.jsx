import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FiBriefcase,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import {
  registerStart,
  registerSuccess,
  registerFailure,
} from "../../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector(
    (state) => state.auth
  );

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "jobseeker",
  });

  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      dispatch(registerFailure("Please enter your full name."));
      return;
    }

    if (!formData.email.trim()) {
      dispatch(registerFailure("Please enter your email address."));
      return;
    }

    if (formData.password.length < 6) {
      dispatch(
        registerFailure(
          "Password must be at least 6 characters."
        )
      );
      return;
    }

    if (!agreed) {
      dispatch(
        registerFailure(
          "Please agree to the Terms of Service and Privacy Policy."
        )
      );
      return;
    }

    dispatch(registerStart());

    // Demo registration
    const user = {
  id: Date.now(),
  name: formData.name.trim(),
  email: formData.email.trim(),
  password: formData.password,
  role: formData.role,
};

    const token = `demo-token-${Date.now()}`;

    dispatch(
      registerSuccess({
        user,
        token,
      })
    );

    // Role অনুযায়ী redirect
    if (formData.role === "employer") {
      navigate("/employer/dashboard");
    } else {
      navigate("/jobs");
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-base-200 px-6 py-12">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-base-100 shadow-xl lg:grid-cols-2">

        {/* Form */}

        <div className="p-8 sm:p-12">
          <div className="mx-auto max-w-md">

            {/* Logo */}

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-content">
                <FiBriefcase className="text-xl" />
              </div>

              <h2 className="text-2xl font-extrabold text-base-content">
                Job<span className="text-primary">Hub</span>
              </h2>
            </div>

            {/* Heading */}

            <div className="mt-8">
              <h1 className="text-3xl font-extrabold text-base-content">
                Create an account
              </h1>

              <p className="mt-2 text-base-content/60">
                Start your journey and discover new opportunities.
              </p>
            </div>

            {/* Error */}

            {error && (
              <div className="alert alert-error mt-6">
                <span>{error}</span>
              </div>
            )}

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-base-content">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-base-content">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Password */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-base-content">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="input input-bordered w-full pr-12"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
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

              {/* Role */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-base-content">
                  Account Type
                </label>

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                >
                  <option value="jobseeker">
                    Job Seeker
                  </option>

                  <option value="employer">
                    Employer
                  </option>
                </select>
              </div>

              {/* Terms */}

              <label className="flex cursor-pointer items-start gap-3 text-sm">

                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) =>
                    setAgreed(e.target.checked)
                  }
                  className="checkbox checkbox-primary checkbox-sm mt-0.5"
                />

                <span className="text-base-content/60">
                  I agree to the Terms of Service and Privacy Policy.
                </span>

              </label>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>

            </form>

            {/* Login */}

            <p className="mt-8 text-center text-sm text-base-content/60">
              Already have an account?{" "}

              <Link
                to="/login"
                className="font-bold text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>

          </div>
        </div>

        {/* Right Side */}

        <div className="hidden bg-primary p-10 text-primary-content lg:flex lg:flex-col lg:justify-between">

          <div>
            <h2 className="mt-20 text-4xl font-extrabold leading-tight">
              Build your future
              <br />
              with JobHub.
            </h2>

            <p className="mt-5 max-w-md leading-7 opacity-80">
              Whether you're looking for your dream job or searching
              for talented professionals, JobHub helps you make the
              right connection.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-2xl font-extrabold">
                10K+
              </p>

              <p className="mt-1 text-sm opacity-70">
                Jobs
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-2xl font-extrabold">
                850+
              </p>

              <p className="mt-1 text-sm opacity-70">
                Companies
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default Register;