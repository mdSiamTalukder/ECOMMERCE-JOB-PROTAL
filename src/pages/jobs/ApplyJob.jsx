import {
  FiArrowLeft,
  FiBriefcase,
  FiCheckCircle,
  FiFileText,
  FiMail,
  FiPhone,
  FiSend,
  FiUser,
} from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addApplication } from "../../features/applications/applicationSlice";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova Inc.",
  },
  {
    id: 2,
    title: "React Developer",
    company: "CodeCraft Ltd.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "NextGen Solutions",
  },
  {
    id: 5,
    title: "Digital Marketing Executive",
    company: "MarketPro",
  },
  {
    id: 6,
    title: "Junior Software Engineer",
    company: "SoftCore",
  },
];

const ApplyJob = () => {
   const { id } = useParams();
  const dispatch = useDispatch();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const job = jobs.find(
    (item) => item.id === Number(id)
  );

  const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  dispatch(
    addApplication({
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      experience: formData.get("experience"),
    })
  );

  setIsSubmitted(true);
};
  if (!job) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-base-200 px-6">
        <div className="text-center">

          <h1 className="text-4xl font-extrabold">
            Job Not Found
          </h1>

          <p className="mt-3 text-base-content/60">
            This job does not exist.
          </p>

          <Link
            to="/jobs"
            className="btn btn-primary mt-6"
          >
            <FiArrowLeft />
            Back to Jobs
          </Link>

        </div>
      </main>
    );
  }

  if (isSubmitted) {
    return (
      <main className="flex min-h-[75vh] items-center justify-center bg-base-200 px-6">

        <div className="max-w-lg rounded-3xl bg-base-100 p-8 text-center shadow-xl sm:p-12">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success">
            <FiCheckCircle className="text-5xl" />
          </div>

          <h1 className="mt-6 text-3xl font-extrabold">
            Application Submitted!
          </h1>

          <p className="mt-4 leading-7 text-base-content/60">
            Your application for{" "}
            <span className="font-semibold text-base-content">
              {job.title}
            </span>{" "}
            at{" "}
            <span className="font-semibold text-base-content">
              {job.company}
            </span>{" "}
            has been submitted successfully.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <Link
              to="/applications"
              className="btn btn-primary"
            >
              My Applications
            </Link>

            <Link
              to="/jobs"
              className="btn btn-outline"
            >
              Browse More Jobs
            </Link>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-200">

      {/* Header */}

      <section className="bg-base-100">
        <div className="mx-auto max-w-3xl px-6 py-10 lg:px-8">

          <Link
            to={`/jobs/${job.id}`}
            className="btn btn-ghost btn-sm mb-6 gap-2"
          >
            <FiArrowLeft />
            Back to Job
          </Link>

          <div className="flex items-start gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FiBriefcase className="text-2xl" />
            </div>

            <div>

              <p className="text-sm font-semibold text-primary">
                Apply for Position
              </p>

              <h1 className="mt-1 text-3xl font-extrabold">
                {job.title}
              </h1>

              <p className="mt-1 text-base-content/60">
                {job.company}
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Form */}

      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8">

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-base-100 p-6 shadow-sm sm:p-8"
        >

          <div>
            <h2 className="text-2xl font-bold">
              Your Information
            </h2>

            <p className="mt-1 text-sm text-base-content/50">
              Fill in your information to apply for this position.
            </p>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">

            {/* Name */}

            <label className="form-control">
              <span className="mb-2 text-sm font-semibold">
                Full Name
              </span>

              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />

                <input
                  type="text"
                  placeholder="Your full name"
                  className="input input-bordered w-full pl-10"
                  required
                />
              </div>
            </label>

            {/* Email */}

            <label className="form-control">
              <span className="mb-2 text-sm font-semibold">
                Email Address
              </span>

              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full pl-10"
                  required
                />
              </div>
            </label>

            {/* Phone */}

            <label className="form-control">
              <span className="mb-2 text-sm font-semibold">
                Phone Number
              </span>

              <div className="relative">
                <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />

                <input
                  type="tel"
                  placeholder="+880 1XXXXXXXXX"
                  className="input input-bordered w-full pl-10"
                  required
                />
              </div>
            </label>

            {/* Experience */}

            <label className="form-control">
              <span className="mb-2 text-sm font-semibold">
                Experience
              </span>

              <select
                className="select select-bordered w-full"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select experience
                </option>

                <option>Fresher</option>
                <option>1 Year</option>
                <option>2 Years</option>
                <option>3 Years</option>
                <option>4+ Years</option>
              </select>
            </label>

          </div>

          {/* Resume */}

          <label className="form-control mt-6">

            <span className="mb-2 text-sm font-semibold">
              Resume
            </span>

            <div className="relative">

              <FiFileText className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="file-input file-input-bordered w-full pl-10"
                required
              />

            </div>

            <span className="mt-2 text-xs text-base-content/40">
              PDF, DOC or DOCX format.
            </span>

          </label>

          {/* Cover Letter */}

          <label className="form-control mt-6">

            <span className="mb-2 text-sm font-semibold">
              Cover Letter
            </span>

            <textarea
              className="textarea textarea-bordered min-h-48 w-full"
              placeholder="Tell the employer why you are a good fit for this position..."
              required
            />

          </label>

          {/* Submit */}

          <div className="mt-8 border-t border-base-200 pt-6">

            <button
              type="submit"
              className="btn btn-primary btn-block"
            >
              <FiSend />
              Submit Application
            </button>

          </div>

        </form>

      </section>
    </main>
  );
};

export default ApplyJob;