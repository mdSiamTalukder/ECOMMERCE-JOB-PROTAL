import {
  FiArrowLeft,
  FiBriefcase,
  FiEdit3,
  FiEye,
  FiMapPin,
  FiTrash2,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const initialJobs = [
  {
    id: 1,
    title: "Senior React Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    category: "Frontend Development",
    applications: 42,
    salary: "$70k - $95k",
    status: "Active",
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    category: "Frontend Development",
    applications: 28,
    salary: "$50k - $70k",
    status: "Active",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Dhaka, Bangladesh",
    type: "Part-time",
    category: "UI/UX Design",
    applications: 16,
    salary: "$35k - $50k",
    status: "Closed",
  },
];

const ManageJobs = () => {
  const [jobs, setJobs] = useState(initialJobs);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    setJobs((previousJobs) =>
      previousJobs.filter((job) => job.id !== id)
    );
  };

  return (
    <main className="min-h-screen bg-base-200">

      {/* Header */}

      <section className="bg-base-100">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <Link
            to="/employer/dashboard"
            className="btn btn-ghost btn-sm mb-6 gap-2"
          >
            <FiArrowLeft />
            Dashboard
          </Link>

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <p className="text-sm font-semibold text-primary">
                Employer
              </p>

              <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">
                Manage Jobs
              </h1>

              <p className="mt-2 text-base-content/60">
                View and manage all your job postings.
              </p>
            </div>

            <Link
              to="/employer/post-job"
              className="btn btn-primary"
            >
              + Post a Job
            </Link>

          </div>

        </div>
      </section>

      {/* Jobs */}

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {jobs.length === 0 ? (
          <div className="rounded-2xl bg-base-100 p-12 text-center shadow-sm">

            <FiBriefcase className="mx-auto text-5xl text-base-content/20" />

            <h2 className="mt-5 text-2xl font-bold">
              No Jobs Found
            </h2>

            <p className="mt-2 text-base-content/50">
              You haven't posted any jobs yet.
            </p>

            <Link
              to="/employer/post-job"
              className="btn btn-primary mt-6"
            >
              Post Your First Job
            </Link>

          </div>
        ) : (
          <div className="space-y-5">

            {jobs.map((job) => (
              <article
                key={job.id}
                className="rounded-2xl bg-base-100 p-6 shadow-sm transition hover:shadow-md sm:p-7"
              >

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                  {/* Job Info */}

                  <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FiBriefcase className="text-2xl" />
                    </div>

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <h2 className="text-xl font-bold">
                          {job.title}
                        </h2>

                        <span
                          className={`badge ${
                            job.status === "Active"
                              ? "badge-success"
                              : "badge-error"
                          }`}
                        >
                          {job.status}
                        </span>

                      </div>

                      <p className="mt-2 text-sm font-medium text-base-content/60">
                        {job.category}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-base-content/50">

                        <span className="flex items-center gap-1.5">
                          <FiMapPin />
                          {job.location}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <FiBriefcase />
                          {job.type}
                        </span>

                        <span>
                          {job.salary}
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* Actions */}

                  <div className="flex flex-wrap items-center gap-2 border-t border-base-200 pt-5 lg:border-0 lg:pt-0">

                    <div className="mr-2 flex items-center gap-2 text-sm text-base-content/60">
                      <FiUsers />
                      <span>
                        {job.applications} Applications
                      </span>
                    </div>

                    <Link
                      to={`/jobs/${job.id}`}
                      className="btn btn-ghost btn-sm"
                      title="View Job"
                    >
                      <FiEye />
                    </Link>

                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      title="Edit Job"
                    >
                      <FiEdit3 />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(job.id)}
                      className="btn btn-ghost btn-sm text-error hover:bg-error/10"
                      title="Delete Job"
                    >
                      <FiTrash2 />
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </div>
        )}

      </section>
    </main>
  );
};

export default ManageJobs;