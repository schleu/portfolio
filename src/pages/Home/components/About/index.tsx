import { useTranslation } from "react-i18next";

export const About = ({ ...props }) => {
  const [tranlate] = useTranslation();

  return (
    <>
      <div
        {...props}
        className="w-full flex flex-col sm:flex-row  items-center justify-center gap-10 sm:p-10"
        id="aboutMe"
      >
        <div className="flex justify-center items-center rounded-xl overflow-hidden">
          <img
            src="https://media.licdn.com/dms/image/C4D03AQHFrY3_LuLJBg/profile-displayphoto-shrink_800_800/0/1624404116518?e=1679529600&v=beta&t=EKW5IuEyGaOHiW8DxJxAj5qPkwlcO2J8KX_nAKfTnKI"
            className="w-40"
          />
        </div>
        <div className="w-full text-primary max-w-[500px] text-center sm:text-start text-xl font-bold drop-shadow-lg">
          {tranlate("about>title")}
        </div>
      </div>
      <div className="w-full max-w-[800px] mx-auto h-[3px] bg-gradient-to-r from-gray-50 via-secondary to-gray-50 rounded-full" />
    </>
  );
};
