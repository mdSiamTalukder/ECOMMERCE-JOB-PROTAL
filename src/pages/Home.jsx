import {
  FiArrowRight,
  FiSearch,
  FiMapPin,
  FiBriefcase,
  FiUsers,
  FiHome,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-base-100">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

          {/* Hero Content */}

          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              🚀 Find your next opportunity
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Find a job where
              <span className="text-primary"> you belong.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-base-content/60">
              Discover thousands of job opportunities from companies
              looking for talented people like you. Start your next
              career journey with JobHub.
            </p>

            {/* Search */}

            <div className="mt-8 rounded-2xl bg-base-100 p-3 shadow-xl ring-1 ring-base-300">
              <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">

                <div className="flex items-center gap-3 rounded-xl border border-base-300 px-4">
                  <FiSearch className="text-primary" />

                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    className="input w-full border-0 px-0 outline-none focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-base-300 px-4">
                  <FiMapPin className="text-primary" />

                  <input
                    type="text"
                    placeholder="Location"
                    className="input w-full border-0 px-0 outline-none focus:outline-none"
                  />
                </div>

                <Link
                  to="/jobs"
                  className="btn btn-primary px-7"
                >
                  Search Jobs
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-5 text-sm text-base-content/60">
              <span>✓ No registration required to browse</span>
              <span>✓ Thousands of opportunities</span>
            </div>
          </div>

          {/* Hero Visual */}

          <div className="relative hidden lg:block">

            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative rounded-3xl bg-base-200 p-6 shadow-2xl">

              {/* Main Card */}

              <div className="rounded-2xl bg-base-100 p-6 shadow-lg">

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FiBriefcase className="text-2xl" />
                    </div>

                    <div>
                      <h3 className="font-bold">
                        Senior React Developer
                      </h3>

                      <p className="text-sm text-base-content/50">
                        TechNova Inc.
                      </p>
                    </div>
                  </div>

                  <span className="badge badge-success badge-outline">
                    Full-time
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="badge badge-ghost">
                    React
                  </span>

                  <span className="badge badge-ghost">
                    JavaScript
                  </span>

                  <span className="badge badge-ghost">
                    Remote
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-base-200 pt-5">
                  <div>
                    <p className="text-sm text-base-content/50">
                      Salary
                    </p>

                    <p className="font-bold">
                      $70k - $95k
                    </p>
                  </div>

                  <button className="btn btn-primary btn-sm">
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Floating Card */}

              <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-base-100 p-4 shadow-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-success/10 text-success">
                  <FiUsers />
                </div>

                <div>
                  <p className="text-xs text-base-content/50">
                    Active Job Seekers
                  </p>

                  <p className="font-bold">
                    12,500+
                  </p>
                </div>
              </div>

              <div className="absolute -right-6 top-12 flex items-center gap-3 rounded-2xl bg-base-100 p-4 shadow-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-info/10 text-info">
                  <FiHome /> 
                </div>

                <div>
                  <p className="text-xs text-base-content/50">
                    Companies
                  </p>

                  <p className="font-bold">
                    850+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="bg-base-100 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

          <div className="rounded-2xl bg-base-200 p-6 text-center">
            <h2 className="text-3xl font-extrabold text-primary">
              10K+
            </h2>

            <p className="mt-2 text-sm text-base-content/60">
              Jobs Available
            </p>
          </div>

          <div className="rounded-2xl bg-base-200 p-6 text-center">
            <h2 className="text-3xl font-extrabold text-primary">
              850+
            </h2>

            <p className="mt-2 text-sm text-base-content/60">
              Companies
            </p>
          </div>

          <div className="rounded-2xl bg-base-200 p-6 text-center">
            <h2 className="text-3xl font-extrabold text-primary">
              12K+
            </h2>

            <p className="mt-2 text-sm text-base-content/60">
              Job Seekers
            </p>
          </div>

          <div className="rounded-2xl bg-base-200 p-6 text-center">
            <h2 className="text-3xl font-extrabold text-primary">
              5K+
            </h2>

            <p className="mt-2 text-sm text-base-content/60">
              Successful Hires
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-8 py-14 text-primary-content sm:px-12">

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] opacity-80">
                For Employers
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Find the right talent for your team.
              </h2>

              <p className="mt-3 max-w-xl opacity-80">
                Post your job and connect with talented professionals
                who are ready for their next opportunity.
              </p>
            </div>

            <Link
              to="/register"
              className="btn btn-neutral btn-lg"
            >
              Post a Job
              <FiArrowRight />
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;