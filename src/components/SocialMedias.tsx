import { FiLinkedin, FiGithub } from "react-icons/fi";

export const SocialMedias = () => {
  return (
    <div className="flex gap-4 mr-4">
      <a
        href="https://github.com/schleu"
        target="_blank"
        className="text-dark-50 hover:text-primary"
        title="GitHub"
      >
        <FiGithub size={20} />
      </a>
      <a
        href="https://linkedin.com/in/danilo-schleu"
        target="_blank"
        className="text-dark-50 hover:text-primary"
        title="LinkedIn"
      >
        <FiLinkedin size={20} />
      </a>
    </div>
  );
};
