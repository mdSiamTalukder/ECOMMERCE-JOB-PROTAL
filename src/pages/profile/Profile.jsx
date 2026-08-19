import {
  FiArrowLeft,
  FiBriefcase,
  FiEdit3,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSave,
  FiUser,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Siam Talukder",
    role: "Frontend Developer",
    email: "siam@example.com",
    phone: "+880 1XXX-XXXXXX",
    location: "Dhaka, Bangladesh",
    experience: "2+ Years",
    bio: "Passionate frontend developer focused on building modern, responsive, and user-friendly web applications.",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Redux",
      "Git",
    ],
  });

  const [formData, setFormData] = useState({
    name: profile.name,
    role: profile.role,
    email: profile.email,
    phone: profile.phone,
    location: profile.location,
    experience: profile.experience,
    bio: profile.bio,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();

    setProfile((previous) => ({
      ...previous,
      ...formData,
    }));

    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: profile.name,
      role: profile.role,
      email: profile.email,
      phone: profile.phone,
      location: profile.location,
      experience: profile.experience,
      bio: profile.bio,
    });

    setIsEditing(false);
  };

  return (
    <main className="min-h-screen bg-base-200">

      {/* Header */}

      <section className="bg-base-100">
        <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">

          <Link
            to="/dashboard"
            className="btn btn-ghost btn-sm mb-6 gap-2"
          >
            <FiArrowLeft />
            Dashboard
          </Link>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-5">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-extrabold text-primary-content">
                {profile.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <div>
                <h1 className="text-3xl font-extrabold">
                  {profile.name}
                </h1>

                <p className="mt-1 text-base-content/60">
                  {profile.role}
                </p>
              </div>

            </div>

            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-primary"
              >
                <FiEdit3 />
                Edit Profile
              </button>
            )}

          </div>

        </div>
      </section>

      {/* Content */}

      <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8">

        {isEditing ? (
          /* ================= EDIT FORM ================= */

          <form
            onSubmit={handleSave}
            className="rounded-2xl bg-base-100 p-6 shadow-sm sm:p-8"
          >

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold">
                  Edit Profile
                </h2>

                <p className="mt-1 text-sm text-base-content/50">
                  Update your personal information.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCancel}
                className="btn btn-ghost btn-sm btn-circle"
              >
                <FiX />
              </button>

            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">

              {/* Name */}

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Full Name
                </span>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Your name"
                />
              </label>

              {/* Role */}

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Job Title
                </span>

                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Frontend Developer"
                />
              </label>

              {/* Email */}

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Email
                </span>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="you@example.com"
                />
              </label>

              {/* Phone */}

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Phone
                </span>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="+880..."
                />
              </label>

              {/* Location */}

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Location
                </span>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Dhaka, Bangladesh"
                />
              </label>

              {/* Experience */}

              <label className="form-control">
                <span className="mb-2 text-sm font-semibold">
                  Experience
                </span>

                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="2+ Years"
                />
              </label>

            </div>

            {/* Bio */}

            <label className="form-control mt-5">
              <span className="mb-2 text-sm font-semibold">
                About Me
              </span>

              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="textarea textarea-bordered min-h-32 w-full"
                placeholder="Tell something about yourself..."
              />
            </label>

            {/* Buttons */}

            <div className="mt-8 flex justify-end gap-3">

              <button
                type="button"
                onClick={handleCancel}
                className="btn btn-ghost"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary"
              >
                <FiSave />
                Save Changes
              </button>

            </div>

          </form>
        ) : (
          /* ================= PROFILE VIEW ================= */

          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">

            {/* Main */}

            <div className="space-y-8">

              {/* About */}

              <article className="rounded-2xl bg-base-100 p-6 shadow-sm sm:p-8">

                <div className="flex items-center gap-3">
                  <FiUser className="text-xl text-primary" />

                  <h2 className="text-2xl font-bold">
                    About Me
                  </h2>
                </div>

                <p className="mt-5 leading-7 text-base-content/65">
                  {profile.bio}
                </p>

              </article>

              {/* Skills */}

              <article className="rounded-2xl bg-base-100 p-6 shadow-sm sm:p-8">

                <h2 className="text-2xl font-bold">
                  Skills
                </h2>

                <div className="mt-5 flex flex-wrap gap-3">
                  {profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="badge badge-primary badge-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </article>

              {/* Experience */}

              <article className="rounded-2xl bg-base-100 p-6 shadow-sm sm:p-8">

                <h2 className="text-2xl font-bold">
                  Experience
                </h2>

                <div className="mt-6 border-l-2 border-primary/20 pl-6">

                  <div className="relative">

                    <div className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-base-100" />

                    <h3 className="text-lg font-bold">
                      {profile.role}
                    </h3>

                    <p className="mt-1 font-medium text-primary">
                      Tech Company
                    </p>

                    <p className="mt-1 text-sm text-base-content/50">
                      2024 — Present
                    </p>

                    <p className="mt-4 leading-7 text-base-content/60">
                      Developing responsive web applications using
                      React and modern frontend technologies.
                    </p>

                  </div>

                </div>

              </article>

            </div>

            {/* Sidebar */}

            <aside className="h-fit rounded-2xl bg-base-100 p-6 shadow-sm">

              <h2 className="text-xl font-bold">
                Contact Information
              </h2>

              <div className="mt-6 space-y-5">

                <div className="flex items-start gap-3">
                  <FiMail className="mt-1 text-primary" />

                  <div>
                    <p className="text-xs text-base-content/40">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm font-medium">
                      {profile.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiPhone className="mt-1 text-primary" />

                  <div>
                    <p className="text-xs text-base-content/40">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      {profile.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiMapPin className="mt-1 text-primary" />

                  <div>
                    <p className="text-xs text-base-content/40">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      {profile.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiBriefcase className="mt-1 text-primary" />

                  <div>
                    <p className="text-xs text-base-content/40">
                      Experience
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      {profile.experience}
                    </p>
                  </div>
                </div>

              </div>

            </aside>

          </div>
        )}

      </section>
    </main>
  );
};

export default Profile;