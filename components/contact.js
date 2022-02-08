import socialLinks from "../constants/social-links.json";
import resume from "../constants/resume.json";

const links = [
  // socialLinks.linkedin,
  socialLinks.telegram,
  socialLinks.github,
  socialLinks.email,
  socialLinks.phone,
];

const footerLinks = [
  // socialLinks.linkedin,
  socialLinks.telegram,
  socialLinks.github,
];

const Contact = () => {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl mt-10">Contact</h2>
      <div className="mt-5">
        <SocialLinks />
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl">Resume</h2>
        <a href={socialLinks.resume.url} target="_blank">
          <img
            alt="resume"
            className="w-10 h-10 m-3 hover:scale-110 rounded-md"
            src={socialLinks.resume.icon}
          />
        </a>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl">Interests</h2>
        <Interests />
      </div>
    </div>
  );
};

const Interests = () => (
  <div className="flex flex-wrap">
    {resume.interests.map((interest) => (
      <div key={interest.name} className="mt-5 mr-10">
        <p className="font-semibold">{interest.name}</p>
        <div className="flex flex-row">
          {interest.keywords.map((keyword) => (
            <small
              key={keyword}
              className="text-xs p-1 rounded-md bg-green-200 dark:bg-green-600 m-2 hover:opacity-70"
            >
              {keyword}
            </small>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const SocialLinks = () => (
  <div className="flex flex-row">
    {links.map((link, idx) => (
      <div key={idx}>
        <a href={link.url}>
          <img
            className="w-10 h-10 m-3 hover:scale-110 rounded-md"
            src={link.icon}
          />
        </a>
      </div>
    ))}
  </div>
);

export const SmallSocialLinks = () => (
  <div className="flex flex-row justify-center">
    {footerLinks.map((link, idx) => (
      <div key={idx}>
        <a href={link.url}>
          <img
            className="w-8 h-8 m-2 hover:scale-110 rounded-md"
            src={link.icon}
          />
        </a>
      </div>
    ))}
  </div>
);
export default Contact;
