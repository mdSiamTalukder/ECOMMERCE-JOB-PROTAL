import {
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiHeart,
  FiUser,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const applications = [
  {
    id: 1,
    job: "Frontend Developer",
    company: "TechNova Inc.",
    status: "Interview",
    date: "Aug 18, 2026",
  },
  {
    id: 2,
    job: "React Developer",
    company: "CodeCraft Ltd.",
    status: "Pending",
    date: "Aug 15, 2026",
  },
  {
    id: 3,
    job: "UI/UX Designer",
    company: "Creative Studio",
    status: "Rejected",
    date: "Aug 10, 2026",
  },
];

const UserDashboard = () => {
  return (
    <main className="min-h-screen bg-base-200">

      {/* Header */}

      <section className="bg-base-100">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div>
              <p className="text-sm font-semibold text-primary">
                Welcome back 👋
              </p>

              <h1 className="mt-1 text-3xl font-extrabold">
                Siam Talukder
              </h1>

              <p className="mt-2 text-base-content/60">
                Manage your job search and applications.
              </p>
            </div>

            <Link
              to="/jobs"
              className="btn btn-primary"
            >
              Find Jobs
              <FiArrowRight />
            </Link>

             <Link
    to="/applications"
    className="btn btn-ghost btn-sm"
  >
    View All
  </Link>

          </div>

        </div>
      </section>

      {/* Content */}

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {/* Stats */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-base-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-base-content/50">
                  Applications
                </p>

                <p className="mt-2 text-3xl font-extrabold">
                  12
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FiBriefcase className="text-xl" />
              </div>

            </div>
          </div>

          <div className="rounded-2xl bg-base-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-base-content/50">
                  Interviews
                </p>

                <p className="mt-2 text-3xl font-extrabold">
                  3
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-info/10 text-info">
                <FiClock className="text-xl" />
              </div>

            </div>
          </div>

          <div className="rounded-2xl bg-base-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-base-content/50">
                  Offers
                </p>

                <p className="mt-2 text-3xl font-extrabold">
                  1
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success">
                <FiCheckCircle className="text-xl" />
              </div>

            </div>
          </div>

          <div className="rounded-2xl bg-base-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-base-content/50">
                  Saved Jobs
                </p>

                <p className="mt-2 text-3xl font-extrabold">
                  8
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-error/10 text-error">
                <FiHeart className="text-xl" />
              </div>

            </div>
          </div>

        </div>

        {/* Main Grid */}

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* Applications */}

          <section className="rounded-2xl bg-base-100 p-6 shadow-sm sm:p-8">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold">
                  Recent Applications
                </h2>

                <p className="mt-1 text-sm text-base-content/50">
                  Track your latest job applications.
                </p>
              </div>

              <Link
                to="/applications"
                className="btn btn-ghost btn-sm"
              >
                View All
              </Link>

            </div>

            <div className="mt-6 space-y-4">

              {applications.map((application) => (
                <div
                  key={application.id}
                  className="rounded-xl border border-base-300 p-4 transition hover:border-primary/40 hover:bg-base-200"
                >

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FiBriefcase />
                      </div>

                      <div>
                        <h3 className="font-bold">
                          {application.job}
                        </h3>

                        <p className="text-sm text-base-content/50">
                          {application.company}
                        </p>

                        <p className="mt-1 text-xs text-base-content/40">
                          Applied {application.date}
                        </p>
                      </div>

                    </div>

                    <span
                      className={`badge ${
                        application.status === "Interview"
                          ? "badge-info"
                          : application.status === "Pending"
                            ? "badge-warning"
                            : "badge-error"
                      }`}
                    >
                      {application.status}
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </section>

          {/* Profile */}

          <aside className="h-fit rounded-2xl bg-base-100 p-6 shadow-sm">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-content">
                ST
              </div>

              <div>
                <h2 className="font-bold">
                  Siam Talukder
                </h2>

                <p className="text-sm text-base-content/50">
                  Frontend Developer
                </p>
              </div>

            </div>

            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-3 text-sm">
                <FiUser className="text-primary" />
                <span>Frontend Developer</span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <FiBriefcase className="text-primary" />
                <span>2+ Years Experience</span>
              </div>

            </div>

            <Link
              to="/profile"
              className="btn btn-outline btn-primary mt-6 w-full"
            >
              Edit Profile
            </Link>

          </aside>

        </div>

      </section>
    </main>
  );
};

export default UserDashboard;