
import {
  FiBriefcase,
  FiUsers,
  FiFileText,
  FiUserCheck,
  FiPlus,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "0",
      icon: FiUsers,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Total Jobs",
      value: "0",
      icon: FiBriefcase,
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      title: "Applications",
      value: "0",
      icon: FiFileText,
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      title: "Employers",
      value: "0",
      icon: FiUserCheck,
      color: "text-success",
      bg: "bg-success/10",
    },
  ];

  return (
    <main className="min-h-screen bg-base-200">

      {/* Header */}

      <section className="bg-base-100">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Admin Panel
          </p>

          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Admin Dashboard
          </h1>

          <p className="mt-2 max-w-2xl text-base-content/60">
            Manage users, jobs and applications from one place.
          </p>

        </div>
      </section>

      {/* Dashboard */}

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {/* Stats */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl bg-base-100 p-6 shadow-sm ring-1 ring-base-300"
              >
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm font-medium text-base-content/60">
                      {stat.title}
                    </p>

                    <p className="mt-2 text-3xl font-extrabold">
                      {stat.value}
                    </p>
                  </div>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}
                  >
                    <Icon className="text-2xl" />
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* Quick Actions */}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Manage Users */}

          <div className="rounded-2xl bg-base-100 p-6 shadow-sm ring-1 ring-base-300">

            <div className="flex items-start justify-between gap-4">

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FiUsers className="text-2xl" />
                </div>

                <h2 className="mt-5 text-xl font-bold">
                  Manage Users
                </h2>

                <p className="mt-2 text-sm leading-6 text-base-content/60">
                  View registered users, manage account roles and
                  control user access.
                </p>
              </div>

            </div>

            <Link
              to="/admin/users"
              className="btn btn-primary btn-sm mt-6 gap-2"
            >
              Manage Users
              <FiArrowRight />
            </Link>

          </div>

          {/* Manage Jobs */}

          <div className="rounded-2xl bg-base-100 p-6 shadow-sm ring-1 ring-base-300">

            <div className="flex items-start justify-between gap-4">

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <FiBriefcase className="text-2xl" />
                </div>

                <h2 className="mt-5 text-xl font-bold">
                  Manage Jobs
                </h2>

                <p className="mt-2 text-sm leading-6 text-base-content/60">
                  Review posted jobs, manage listings and remove
                  inappropriate job posts.
                </p>
              </div>

            </div>

            <Link
              to="/admin/jobs"
              className="btn btn-secondary btn-sm mt-6 gap-2"
            >
              Manage Jobs
              <FiArrowRight />
            </Link>

          </div>

        </div>

        {/* Recent Applications */}

        <div className="mt-8 rounded-2xl bg-base-100 p-6 shadow-sm ring-1 ring-base-300">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <h2 className="text-xl font-bold">
                Applications Overview
              </h2>

              <p className="mt-1 text-sm text-base-content/60">
                Monitor applications submitted by job seekers.
              </p>
            </div>

            <Link
              to="/admin/applications"
              className="btn btn-outline btn-sm gap-2"
            >
              View Applications
              <FiArrowRight />
            </Link>

          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            <div className="rounded-xl bg-base-200 p-5">
              <p className="text-sm text-base-content/60">
                Pending
              </p>

              <p className="mt-2 text-2xl font-bold">
                0
              </p>
            </div>

            <div className="rounded-xl bg-base-200 p-5">
              <p className="text-sm text-base-content/60">
                Accepted
              </p>

              <p className="mt-2 text-2xl font-bold text-success">
                0
              </p>
            </div>

            <div className="rounded-xl bg-base-200 p-5">
              <p className="text-sm text-base-content/60">
                Rejected
              </p>

              <p className="mt-2 text-2xl font-bold text-error">
                0
              </p>
            </div>

          </div>

        </div>

        {/* Quick Add */}

        <div className="mt-8 flex flex-col justify-between gap-5 rounded-2xl bg-primary p-6 text-primary-content sm:flex-row sm:items-center">

          <div>
            <h2 className="text-xl font-bold">
              Want to add a new job?
            </h2>

            <p className="mt-1 text-sm opacity-80">
              Create and publish a new job opportunity.
            </p>
          </div>

          <Link
            to="/employer/post-job"
            className="btn bg-white text-primary hover:bg-white/90"
          >
            <FiPlus />
            Post New Job
          </Link>

        </div>

      </section>

    </main>
  );
};

export default AdminDashboard;

