export const About = () => {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row  items-center justify-center gap-10 sm:p-10 font-techMono">
        <div className=" flex justify-center items-center rounded-full overflow-hidden">
          <img
            src="https://media.licdn.com/dms/image/C4D03AQHFrY3_LuLJBg/profile-displayphoto-shrink_800_800/0/1624404116518?e=1679529600&v=beta&t=EKW5IuEyGaOHiW8DxJxAj5qPkwlcO2J8KX_nAKfTnKI"
            className="w-40"
          />
        </div>
        <div className="w-full max-w-[300px] text-xl font-bold">
          Quando o novo lhe deixar desconfortável, talvez você esteja no caminho
          certo.
        </div>
      </div>
      <div className="w-full max-w-[800px] mx-auto h-[3px] bg-gradient-to-r from-gray-300 via-green-350 to-gray-300 rounded-full" />
    </>
  );
};
