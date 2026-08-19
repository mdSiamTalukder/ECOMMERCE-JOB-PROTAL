import {
  FiArrowLeft,
  FiBriefcase,
  FiCalendar,
  FiClock,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MyApplications = () => {
  const applications = useSelector(
    (state) => state.applications.applications
  );

  return (
    <main className="min-h-screen bg-base-200">

      {/* Header */}

      <section className="bg-base-100">
        <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">

          <Link
            to="/jobs"
            className="btn btn-ghost btn-sm mb-6 gap-2"
          >
            <FiArrowLeft />
            Browse Jobs
          </Link>

          <p className="text-sm font-semibold text-primary">
            Career Dashboard
          </p>

          <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">
            My Applications
          </h1>

          <p className="mt-2 text-base-content/60">
            Track the jobs you have applied for.
          </p>

        </div>
      </section>

      {/* Applications */}

      <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8">

        {applications.length === 0 ? (
          <div className="rounded-3xl bg-base-100 p-10 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FiBriefcase className="text-2xl" />
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              No Applications Yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-base-content/60">
              You haven't applied to any jobs yet.
              Explore available opportunities and start
              your career journey.
            </p>

            <Link
              to="/jobs"
              className="btn btn-primary mt-6"
            >
              Browse Jobs
            </Link>

          </div>
        ) : (
          <div className="space-y-5">

            {applications.map((application) => (
              <article
                key={application.id}
                className="rounded-2xl bg-base-100 p-6 shadow-sm transition hover:shadow-md"
              >

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  {/* Job Info */}

                  <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FiBriefcase className="text-2xl" />
                    </div>

                    <div>

                      <h2 className="text-xl font-bold">
                        {application.jobTitle}
                      </h2>

                      <p className="mt-1 font-medium text-base-content/60">
                        {application.company}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-base-content/50">

                        <span className="flex items-center gap-1">
                          <FiCalendar />
                          Applied {application.appliedAt}
                        </span>

                        <span className="flex items-center gap-1">
                          <FiClock />
                          {application.experience}
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* Status */}

                  <span className="badge badge-warning gap-1 self-start sm:self-center">
                    <FiClock />
                    {application.status}
                  </span>

                </div>

              </article>
            ))}

          </div>
        )}

      </section>

    </main>
  );
};

export default MyApplications;