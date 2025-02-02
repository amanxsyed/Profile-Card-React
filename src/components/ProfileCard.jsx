import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="max-w-sm w-11/12 sm:w-full bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Cover Photo */}
      <div className="relative">
        <img
          src="/cover.jpg"
          alt="Cover"
          className="w-full h-32 object-cover"
        />
        {/* Profile Image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
          <img
            src="/profile1.jpg"
            alt="Profile"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-16 text-center">
        <h2 className="text-xl font-semibold text-gray-900">Syed Aman</h2>
        <p className="text-sm text-gray-600">@amanxsyed</p>
        <p className="text-sm text-gray-700 px-6 text-center mt-2">
          Frontend Developer | React ⚛ & Next.js Developer | Building React Projects 🚀
        </p>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 pb-6">
        <a
          href="https://github.com/amanxsyed"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-14 h-14 flex items-center justify-center bg-gray-100 rounded-lg shadow-md hover:bg-yellow-300 transition"
        >
          <FaGithub className="text-2xl text-gray-800 group-hover:text-black" />
        </a>

        <a
          href="https://www.linkedin.com/in/amanxsyed"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-14 h-14 flex items-center justify-center bg-gray-100 rounded-lg shadow-md hover:bg-yellow-300 transition"
        >
          <FaLinkedin className="text-2xl text-blue-700 group-hover:text-black" />
        </a>

        <a
          href="https://x.com/amanxsyed"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-14 h-14 flex items-center justify-center bg-gray-100 rounded-lg shadow-md hover:bg-yellow-300 transition"
        >
          <FaTwitter className="text-2xl text-blue-500 group-hover:text-black" />
        </a>

        <a
          href="https://instagram.com/amanxsyed"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-14 h-14 flex items-center justify-center bg-gray-100 rounded-lg shadow-md hover:bg-yellow-300 transition"
        >
          <FaInstagram className="text-2xl text-pink-500 group-hover:text-black" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
