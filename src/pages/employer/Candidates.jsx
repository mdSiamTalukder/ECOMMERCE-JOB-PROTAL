import {
  FiArrowLeft,
  FiBriefcase,
  FiCheck,
  FiDownload,
  FiMail,
  FiUser,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateApplicationStatus } from "../../features/applications/applicationSlice";

const initialCandidates = [
  {
    id: 1,
    name: "Rahim Ahmed",
    email: "rahim@example.com",
    job: "Senior React Developer",
    experience: "4 Years",
    applied: "2 days ago",
    status: "Pending",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    job: "Senior React Developer",
    experience: "3 Years",
    applied: "3 days ago",
    status: "Shortlisted",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    email: "tanvir@example.com",
    job: "Frontend Developer",
    experience: "2 Years",
    applied: "5 days ago",
    status: "Pending",
  },
  {
    id: 4,
    name: "Sadia Islam",
    email: "sadia@example.com",
    job: "UI/UX Designer",
    experience: "3 Years",
    applied: "1 week ago",
    status: "Rejected",
  },
];

const Candidates = () => {
  const dispatch = useDispatch();

  const applications = useSelector(
    (state) => state.applications.applications
  );

  const reduxCandidates = applications.map((application) => ({
    id: application.id,
    name: application.name,
    email: application.email,
    job: application.jobTitle,
    experience: application.experience,
    applied: application.appliedAt,
    status: application.status,
  }));

  const candidates = [
    ...initialCandidates,
    ...reduxCandidates,
  ];

  const updateStatus = (id, status) => {
    dispatch(
      updateApplicationStatus({
        id,
        status,
      })
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

          <div>
            <p className="text-sm font-semibold text-primary">
              Employer
            </p>

            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">
              Candidates
            </h1>

            <p className="mt-2 text-base-content/60">
              Review and manage candidates who applied to your jobs.
            </p>
          </div>

        </div>
      </section>

      {/* Candidates */}

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div className="rounded-2xl bg-base-100 shadow-sm">

          {/* Top */}

          <div className="border-b border-base-200 p-6">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FiUser />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Job Applications
                </h2>

                <p className="text-sm text-base-content/50">
                  {candidates.length} total applications
                </p>
              </div>

            </div>

          </div>

          {/* List */}

          <div className="divide-y divide-base-200">

            {candidates.map((candidate) => (
              <article
                key={candidate.id}
                className="p-6 transition hover:bg-base-200/40"
              >

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                  {/* Candidate */}

                  <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-content">
                      {candidate.name.charAt(0)}
                    </div>

                    <div>

                      <h3 className="text-lg font-bold">
                        {candidate.name}
                      </h3>

                      <p className="mt-1 flex items-center gap-2 text-sm text-base-content/50">
                        <FiMail />
                        {candidate.email}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">

                        <span className="badge badge-ghost gap-1">
                          <FiBriefcase />
                          {candidate.job}
                        </span>

                        <span className="badge badge-ghost">
                          {candidate.experience}
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* Details */}

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                    <div className="text-sm">
                      <p className="text-xs text-base-content/40">
                        Applied
                      </p>

                      <p className="mt-1 font-medium">
                        {candidate.applied}
                      </p>
                    </div>

                    <span
                      className={`badge ${
                        candidate.status === "Shortlisted"
                          ? "badge-success"
                          : candidate.status === "Rejected"
                          ? "badge-error"
                          : "badge-warning"
                      }`}
                    >
                      {candidate.status}
                    </span>

                    {/* Actions */}

                    <div className="flex gap-2">

                      <button
                        type="button"
                        onClick={() =>
                          updateStatus(
                            candidate.id,
                            "Shortlisted"
                          )
                        }
                        className="btn btn-success btn-sm btn-outline"
                        title="Shortlist"
                      >
                        <FiCheck />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          updateStatus(
                            candidate.id,
                            "Rejected"
                          )
                        }
                        className="btn btn-error btn-sm btn-outline"
                        title="Reject"
                      >
                        <FiX />
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary btn-sm btn-outline"
                        title="Download Resume"
                      >
                        <FiDownload />
                      </button>

                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>
    </main>
  );
};

export default Candidates;