
import {
  FiSearch,
  FiMapPin,
  FiBriefcase,
  FiClock,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addApplication } from "../../features/applications/applicationSlice";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova Inc.",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳40K - ৳70K",
    posted: "2 days ago",
    category: "Development",
  },
  {
    id: 2,
    title: "React Developer",
    company: "CodeCraft Ltd.",
    location: "Remote",
    type: "Full-time",
    salary: "৳50K - ৳80K",
    posted: "1 day ago",
    category: "Development",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳35K - ৳60K",
    posted: "3 days ago",
    category: "Design",
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "NextGen Solutions",
    location: "Chittagong, Bangladesh",
    type: "Full-time",
    salary: "৳45K - ৳75K",
    posted: "4 days ago",
    category: "Development",
  },
  {
    id: 5,
    title: "Digital Marketing Executive",
    company: "MarketPro",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳30K - ৳50K",
    posted: "5 days ago",
    category: "Marketing",
  },
  {
    id: 6,
    title: "Junior Software Engineer",
    company: "SoftCore",
    location: "Remote",
    type: "Internship",
    salary: "৳20K - ৳35K",
    posted: "1 week ago",
    category: "Development",
  },
];

const Jobs = () => {
  const dispatch = useDispatch();

  const applications = useSelector(
    (state) => state.applications.applications
  );

  const handleApply = (job) => {
    const alreadyApplied = applications.some(
      (application) => application.jobId === job.id
    );

    if (alreadyApplied) {
      return;
    }

    dispatch(
      addApplication({
        jobId: job.id,
        jobTitle: job.title,
        company: job.company,
        experience: "2 Years",
        location: job.location,
      })
    );
  };

  return (
    <main className="min-h-screen bg-base-200">

      {/* Header */}
      <section className="bg-base-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Explore Opportunities
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-base-content sm:text-5xl">
            Find Your Next Job
          </h1>

          <p className="mt-4 max-w-2xl text-base-content/60">
            Explore thousands of opportunities and find a position
            that matches your skills, experience, and career goals.
          </p>

          {/* Search */}
          <div className="mt-8 rounded-2xl bg-base-100 p-3 shadow-lg ring-1 ring-base-300">
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">

              <label className="input input-bordered flex items-center gap-3">
                <FiSearch className="text-primary" />

                <input
                  type="text"
                  placeholder="Search job title or keyword"
                />
              </label>

              <label className="input input-bordered flex items-center gap-3">
                <FiMapPin className="text-primary" />

                <input
                  type="text"
                  placeholder="Location"
                />
              </label>

              <button
                type="button"
                className="btn btn-primary px-8"
              >
                Search Jobs
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* Jobs */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Section Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>
            <h2 className="text-2xl font-bold text-base-content">
              Available Jobs
            </h2>

            <p className="mt-1 text-sm text-base-content/60">
              Showing {jobs.length} available opportunities
            </p>
          </div>

          <select className="select select-bordered w-full sm:w-48">
            <option>Latest Jobs</option>
            <option>Highest Salary</option>
            <option>Oldest Jobs</option>
          </select>

        </div>

        {/* Job Grid */}
        <div className="grid gap-6 lg:grid-cols-2">

          {jobs.map((job) => {
            const alreadyApplied = applications.some(
              (application) => application.jobId === job.id
            );

            return (
              <article
                key={job.id}
                className="group rounded-2xl bg-base-100 p-6 shadow-sm ring-1 ring-base-300 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Top */}
                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FiBriefcase className="text-2xl" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-base-content transition group-hover:text-primary">
                        {job.title}
                      </h3>

                      <p className="mt-1 font-medium text-base-content/60">
                        {job.company}
                      </p>
                    </div>

                  </div>

                  <span className="badge badge-primary badge-outline">
                    {job.category}
                  </span>

                </div>

                {/* Job Info */}
                <div className="mt-6 flex flex-wrap gap-2">

                  <span className="badge badge-ghost gap-1">
                    <FiMapPin />
                    {job.location}
                  </span>

                  <span className="badge badge-ghost gap-1">
                    <FiBriefcase />
                    {job.type}
                  </span>

                  <span className="badge badge-ghost gap-1">
                    💰 {job.salary}
                  </span>

                </div>

                {/* Bottom */}
                <div className="mt-6 flex flex-col gap-4 border-t border-base-200 pt-5 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-2 text-sm text-base-content/50">
                    <FiClock />
                    {job.posted}
                  </div>

                  <div className="flex gap-2">

                    <Link
                      to={`/jobs/${job.id}`}
                      className="btn btn-outline btn-sm"
                    >
                      View Details
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleApply(job)}
                      className={`btn btn-sm ${
                        alreadyApplied
                          ? "btn-success"
                          : "btn-primary"
                      }`}
                    >
                      {alreadyApplied ? "Applied ✓" : "Apply Now"}
                    </button>

                  </div>

                </div>

              </article>
            );
          })}

        </div>
      </section>
    </main>
  );
};

export default Jobs;

