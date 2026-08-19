import {
  FiArrowLeft,
  FiBriefcase,
  FiDollarSign,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const PostJob = () => {
  const [isPublished, setIsPublished] = useState(false);

const handleSubmit = (event) => {
  event.preventDefault();

  setIsPublished(true);
};

  return (
    <main className="min-h-screen bg-base-200">

      {/* Header */}

      <section className="bg-base-100">
        <div className="mx-auto max-w-4xl px-6 py-10 lg:px-8">

          <Link
            to="/employer/dashboard"
            className="btn btn-ghost btn-sm mb-6 gap-2"
          >
            <FiArrowLeft />
            Dashboard
          </Link>

          <div>
            <p className="text-sm font-semibold text-primary">
              Employer
            </p>

            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">
              Post a New Job
            </h1>

            <p className="mt-2 text-base-content/60">
              Create a job posting and find the right candidate for your team.
            </p>
          </div>

        </div>
      </section>

      {/* Form */}

      <section className="mx-auto max-w-4xl px-6 py-10 lg:px-8">
        {isPublished && (
  <div className="alert alert-success mb-8">
    <span>🎉 Job published successfully!</span>
  </div>
)}

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-base-100 p-6 shadow-sm sm:p-8"
        >

          {/* Job Information */}

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FiBriefcase />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Job Information
                </h2>

                <p className="text-sm text-base-content/50">
                  Basic information about the position.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">

              {/* Job Title */}

              <label className="form-control sm:col-span-2">
                <span className="mb-2 text-sm font-semibold">
                  Job Title
                </span>

                <input
                  type="text"
                  placeholder="e.g. Senior React Developer"
                  className="input input-bordered w-full"
                  required
                />
              </label>

              {/* Company */}

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Company Name
                </span>

                <input
                  type="text"
                  placeholder="e.g. TechNova Inc."
                  className="input input-bordered w-full"
                  required
                />
              </label>

              {/* Category */}

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Category
                </span>

                <select
                  className="select select-bordered w-full"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select category
                  </option>

                  <option>Frontend Development</option>
                  <option>Backend Development</option>
                  <option>Full Stack Development</option>
                  <option>UI/UX Design</option>
                  <option>Mobile Development</option>
                  <option>DevOps</option>
                  <option>Data Science</option>
                  <option>Marketing</option>
                </select>
              </label>

              {/* Location */}

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Location
                </span>

                <div className="relative">
                  <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />

                  <input
                    type="text"
                    placeholder="Dhaka, Bangladesh"
                    className="input input-bordered w-full pl-10"
                    required
                  />
                </div>
              </label>

              {/* Job Type */}

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Job Type
                </span>

                <select
                  className="select select-bordered w-full"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select job type
                  </option>

                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                  <option>Freelance</option>
                </select>
              </label>

            </div>
          </div>

          <div className="my-10 border-t border-base-200" />

          {/* Salary */}

          <div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-success">
                <FiDollarSign />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Salary Information
                </h2>

                <p className="text-sm text-base-content/50">
                  Help candidates understand the compensation.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-3">

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Minimum Salary
                </span>

                <input
                  type="number"
                  placeholder="70000"
                  className="input input-bordered w-full"
                  required
                />
              </label>

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Maximum Salary
                </span>

                <input
                  type="number"
                  placeholder="95000"
                  className="input input-bordered w-full"
                  required
                />
              </label>

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Currency
                </span>

                <select
                  className="select select-bordered w-full"
                  defaultValue="USD"
                >
                  <option>USD</option>
                  <option>BDT</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </select>
              </label>

            </div>

          </div>

          <div className="my-10 border-t border-base-200" />

          {/* Description */}

          <div>

            <h2 className="text-xl font-bold">
              Job Description
            </h2>

            <p className="mt-1 text-sm text-base-content/50">
              Tell candidates about the role and what you are looking for.
            </p>

            <div className="mt-7 space-y-5">

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Description
                </span>

                <textarea
                  className="textarea textarea-bordered min-h-40 w-full"
                  placeholder="Describe the role, responsibilities, and company..."
                  required
                />
              </label>

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Required Skills
                </span>

                <input
                  type="text"
                  placeholder="React, JavaScript, Tailwind CSS, Git"
                  className="input input-bordered w-full"
                  required
                />

                <span className="mt-2 text-xs text-base-content/40">
                  Separate skills with commas.
                </span>
              </label>

            </div>

          </div>

          {/* Actions */}

          <div className="mt-10 flex flex-col-reverse justify-end gap-3 border-t border-base-200 pt-7 sm:flex-row">

            <Link
              to="/employer/dashboard"
              className="btn btn-ghost"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="btn btn-primary px-7"
            >
              <FiSend />
              Publish Job
            </button>

          </div>

        </form>

      </section>
    </main>
  );
};

export default PostJob;