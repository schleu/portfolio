export const About = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row  items-center justify-center gap-4 sm:p-20">
      <div className=" flex justify-center items-center rounded-full overflow-hidden">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQHFrY3_LuLJBg/profile-displayphoto-shrink_800_800/0/1624404116518?e=1679529600&v=beta&t=EKW5IuEyGaOHiW8DxJxAj5qPkwlcO2J8KX_nAKfTnKI"
          className="w-40"
        />
      </div>
      <div className="w-full text-center max-w-[500px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
        consequatur unde! Maxime molestiae esse perferendis vel impedit amet, ad
        eius fuga voluptates doloribus quasi! Ducimus ut corporis exercitationem
        porro quidem?
      </div>
    </div>
  );
};
