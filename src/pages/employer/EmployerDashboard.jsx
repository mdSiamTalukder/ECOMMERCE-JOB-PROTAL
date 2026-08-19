
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiPlus,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    status: "Active",
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    status: "Active",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Dhaka, Bangladesh",
    type: "Part-time",
    status: "Closed",
  },
];

const EmployerDashboard = () => {
  const applications = useSelector(
    (state) => state.applications?.applications || []
  );

  const totalApplications = applications.length;

  const pendingApplications = applications.filter(
    (application) => application.status === "Pending"
  ).length;

  const activeJobs = jobs.filter(
    (job) => job.status === "Active"
  ).length;

  const getJobApplicationCount = (jobId) => {
    return applications.filter(
      (application) => application.jobId === jobId
    ).length;
  };

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div>
              <p className="text-sm font-semibold text-blue-600">
                Employer Dashboard
              </p>

              <h1 className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Welcome back, TechNova 👋
              </h1>

              <p className="mt-2 text-gray-600">
                Manage your jobs and find the right candidates.
              </p>
            </div>

            <Link
              to="/employer/post-job"
              className="btn btn-primary"
            >
              <FiPlus />
              Post a Job
            </Link>

          </div>

        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Posted Jobs */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Posted Jobs
                </p>

                <p className="mt-2 text-3xl font-extrabold text-blue-600">
                  {jobs.length}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiBriefcase className="text-xl" />
              </div>

            </div>
          </div>

          {/* Active Jobs */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Active Jobs
                </p>

                <p className="mt-2 text-3xl font-extrabold text-green-600">
                  {activeJobs}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <FiCheckCircle className="text-xl" />
              </div>

            </div>
          </div>

          {/* Applications */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Applications
                </p>

                <p className="mt-2 text-3xl font-extrabold text-blue-600">
                  {totalApplications}
                </p>

                <Link
                  to="/employer/candidates"
                  className="mt-3 inline-flex text-sm font-semibold text-blue-600 hover:underline"
                >
                  View Candidates →
                </Link>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiUsers className="text-xl" />
              </div>

            </div>
          </div>

          {/* Pending Review */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Pending Review
                </p>

                <p className="mt-2 text-3xl font-extrabold text-orange-500">
                  {pendingApplications}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <FiClock className="text-xl" />
              </div>

            </div>
          </div>

        </div>

        {/* My Posted Jobs */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">

          {/* Section Header */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                My Posted Jobs
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Manage your current job postings.
              </p>
            </div>

            <Link
              to="/employer/jobs"
              className="btn btn-ghost btn-sm gap-2 text-gray-700"
            >
              View All
              <FiArrowRight />
            </Link>

          </div>

          {/* Jobs */}
          <div className="mt-6 space-y-4">

            {jobs.map((job) => {
              const applicationCount =
                getJobApplicationCount(job.id);

              return (
                <article
                  key={job.id}
                  className="rounded-xl border border-gray-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md"
                >

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    {/* Job Info */}
                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <FiBriefcase className="text-xl" />
                      </div>

                      <div>

                        <h3 className="text-lg font-bold text-gray-900">
                          {job.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {job.location}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">

                          <span className="badge badge-ghost text-gray-700">
                            {job.type}
                          </span>

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

                      </div>

                    </div>

                    {/* Applications */}
                    <div className="rounded-2xl bg-gray-50 p-5">

                      <div className="flex items-center justify-between gap-8">

                        <div>

                          <p className="text-sm font-medium text-gray-500">
                            Applications
                          </p>

                          <p className="mt-2 text-3xl font-extrabold text-blue-600">
                            {applicationCount}
                          </p>

                          <Link
                            to="/employer/candidates"
                            className="mt-3 inline-flex text-sm font-semibold text-blue-600 hover:underline"
                          >
                            View Candidates →
                          </Link>

                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <FiUsers className="text-xl" />
                        </div>

                      </div>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>
    </main>
  );
};

export default EmployerDashboard;

