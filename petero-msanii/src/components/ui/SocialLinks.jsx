import { FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa";

function SocialLinks() {
  const socials = [
    { icon: <FaYoutube />, url: "https://youtube.com/@peteromsanii?si=dUX9NhoCcLmiiT0Q" },
    { icon: <FaFacebook />, url: "https://facebook.com" },
    { icon: <FaTiktok />, url: "https://www.tiktok.com/@peteromsanii1?_r=1&_t=ZS-94NmgG2KMRo" },
  ];

  return (
    <div className="flex justify-center md:justify-start gap-6 my-8">
      {socials.map((social, idx) => (
        <a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-800 rounded-full p-4 hover:shadow-lg hover:scale-110 transition-all duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;