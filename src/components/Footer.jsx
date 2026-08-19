const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3 lg:px-8">

        <div>
          <h2 className="text-2xl font-extrabold">
            Job<span className="text-primary">Hub</span>
          </h2>

          <p className="mt-3 max-w-sm text-sm opacity-70">
            Connecting talented people with opportunities
            that help them build a better future.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>

          <ul className="mt-3 space-y-2 text-sm opacity-70">
            <li>Home</li>
            <li>Jobs</li>
            <li>About</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">For Employers</h3>

          <p className="mt-3 text-sm opacity-70">
            Find talented candidates and build your
            perfect team with JobHub.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm opacity-60">
        © 2026 JobHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;