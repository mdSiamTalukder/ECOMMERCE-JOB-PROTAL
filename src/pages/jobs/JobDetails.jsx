import {
  FiArrowLeft,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiMapPin,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

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
    description:
      "We are looking for a talented Frontend Developer to join our team and build modern, responsive web applications.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Git"],
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
    description:
      "Join our development team as a React Developer and help us build scalable and user-friendly web applications.",
    skills: ["React", "JavaScript", "Redux", "REST API"],
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
    description:
      "We are looking for a creative UI/UX Designer who can create beautiful and user-friendly digital experiences.",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
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
    description:
      "Build secure, scalable, and high-performance backend systems for our growing platform.",
    skills: ["Node.js", "Express", "MongoDB", "REST API"],
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
    description:
      "Help us grow our digital presence through creative marketing campaigns and data-driven strategies.",
    skills: ["SEO", "Social Media", "Google Ads", "Analytics"],
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
    description:
      "Start your software engineering career by working with an experienced development team on real-world projects.",
    skills: ["JavaScript", "React", "Git", "Programming"],
  },
];

const JobDetails = () => {
  const { id } = useParams();

  const job = jobs.find(
    (item) => item.id === Number(id)
  );

  if (!job) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-base-200 px-6">
        <div className="text-center">

          <h1 className="text-5xl font-extrabold">
            Job Not Found
          </h1>

          <p className="mt-4 text-base-content/60">
            Sorry, we couldn't find the job you're looking for.
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

  return (
    <main className="min-h-screen bg-base-200">

      {/* Header */}

      <section className="bg-base-100">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">

          <Link
            to="/jobs"
            className="btn btn-ghost btn-sm mb-8 gap-2"
          >
            <FiArrowLeft />
            Back to Jobs
          </Link>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">

            <div className="flex items-start gap-5">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FiBriefcase className="text-3xl" />
              </div>

              <div>

                <span className="badge badge-primary badge-outline">
                  {job.category}
                </span>

                <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                  {job.title}
                </h1>

                <p className="mt-2 text-lg font-medium text-base-content/60">
                  {job.company}
                </p>

              </div>

            </div>

            <Link
              to={`/jobs/${job.id}/apply`}
              className="btn btn-primary btn-lg"
            >
              Apply Now
            </Link>

          </div>

        </div>
      </section>

      {/* Content */}

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-10 lg:grid-cols-3 lg:px-8">

        {/* Main Content */}

        <div className="space-y-8 lg:col-span-2">

          <div className="rounded-2xl bg-base-100 p-6 shadow-sm sm:p-8">

            <h2 className="text-2xl font-bold">
              Job Description
            </h2>

            <p className="mt-5 leading-8 text-base-content/70">
              {job.description}
            </p>

          </div>

          <div className="rounded-2xl bg-base-100 p-6 shadow-sm sm:p-8">

            <h2 className="text-2xl font-bold">
              Required Skills
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">

              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="badge badge-lg badge-ghost"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

        {/* Sidebar */}

        <aside className="space-y-5">

          <div className="rounded-2xl bg-base-100 p-6 shadow-sm">

            <h2 className="text-xl font-bold">
              Job Overview
            </h2>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FiMapPin />
                </div>

                <div>
                  <p className="text-xs text-base-content/40">
                    Location
                  </p>

                  <p className="font-semibold">
                    {job.location}
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FiBriefcase />
                </div>

                <div>
                  <p className="text-xs text-base-content/40">
                    Job Type
                  </p>

                  <p className="font-semibold">
                    {job.type}
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-success">
                  <FiCheckCircle />
                </div>

                <div>
                  <p className="text-xs text-base-content/40">
                    Salary
                  </p>

                  <p className="font-semibold">
                    {job.salary}
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-info/10 text-info">
                  <FiClock />
                </div>

                <div>
                  <p className="text-xs text-base-content/40">
                    Posted
                  </p>

                  <p className="font-semibold">
                    {job.posted}
                  </p>
                </div>

              </div>

            </div>

          </div>

          <Link
            to={`/jobs/${job.id}/apply`}
            className="btn btn-primary btn-block"
          >
            Apply for this Job
          </Link>

        </aside>

      </section>

    </main>
  );
};

export default JobDetails;