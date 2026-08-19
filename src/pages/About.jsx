import {
  FiBriefcase,
  FiUsers,
  FiTarget,
  FiCheckCircle,
} from "react-icons/fi";

const About = () => {
  return (
    <main className="min-h-screen bg-base-200">

      {/* Hero */}

      <section className="bg-base-100">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
            About JobHub
          </p>

          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Connecting talented people with
            <span className="text-primary"> great opportunities.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-base-content/60">
            JobHub is a modern job platform designed to make finding
            the right opportunity and hiring the right talent simple,
            fast, and accessible.
          </p>

        </div>
      </section>

      {/* Mission */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-primary p-8 text-primary-content sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <FiTarget className="text-2xl" />
            </div>

            <h2 className="mt-8 text-3xl font-extrabold">
              Our Mission
            </h2>

            <p className="mt-4 leading-7 opacity-80">
              Our mission is to help job seekers discover meaningful
              career opportunities while helping companies connect
              with talented professionals who can make a difference.
            </p>
          </div>

          <div className="rounded-3xl bg-base-100 p-8 shadow-sm sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FiBriefcase className="text-2xl" />
            </div>

            <h2 className="mt-8 text-3xl font-extrabold">
              What We Do
            </h2>

            <p className="mt-4 leading-7 text-base-content/60">
              JobHub brings employers and candidates together through
              an easy-to-use platform where users can explore jobs,
              apply for positions, and manage their career journey.
            </p>
          </div>

        </div>
      </section>

      {/* Values */}

      <section className="bg-base-100 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
              Why JobHub
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Built around people and opportunities
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-base-200 p-7">
              <FiUsers className="text-3xl text-primary" />

              <h3 className="mt-5 text-xl font-bold">
                For Everyone
              </h3>

              <p className="mt-3 leading-7 text-base-content/60">
                A platform designed for both talented job seekers
                and growing companies.
              </p>
            </div>

            <div className="rounded-2xl bg-base-200 p-7">
              <FiCheckCircle className="text-3xl text-primary" />

              <h3 className="mt-5 text-xl font-bold">
                Simple Experience
              </h3>

              <p className="mt-3 leading-7 text-base-content/60">
                Search jobs, explore details, and manage applications
                without unnecessary complexity.
              </p>
            </div>

            <div className="rounded-2xl bg-base-200 p-7">
              <FiTarget className="text-3xl text-primary" />

              <h3 className="mt-5 text-xl font-bold">
                Career Focused
              </h3>

              <p className="mt-3 leading-7 text-base-content/60">
                Helping people find opportunities that match their
                skills, goals, and ambitions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-base-100 p-7 text-center shadow-sm">
            <h3 className="text-3xl font-extrabold text-primary">
              10K+
            </h3>
            <p className="mt-2 text-sm text-base-content/60">
              Jobs Available
            </p>
          </div>

          <div className="rounded-2xl bg-base-100 p-7 text-center shadow-sm">
            <h3 className="text-3xl font-extrabold text-primary">
              850+
            </h3>
            <p className="mt-2 text-sm text-base-content/60">
              Companies
            </p>
          </div>

          <div className="rounded-2xl bg-base-100 p-7 text-center shadow-sm">
            <h3 className="text-3xl font-extrabold text-primary">
              12K+
            </h3>
            <p className="mt-2 text-sm text-base-content/60">
              Job Seekers
            </p>
          </div>

          <div className="rounded-2xl bg-base-100 p-7 text-center shadow-sm">
            <h3 className="text-3xl font-extrabold text-primary">
              5K+
            </h3>
            <p className="mt-2 text-sm text-base-content/60">
              Successful Hires
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;