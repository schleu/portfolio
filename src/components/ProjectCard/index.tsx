import { Link } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../..//assets/arrowRight.svg";
import { AppRoutes } from "../../constant/AppRoutes";
import { BsStar } from "react-icons/bs";

interface iCard {
  id: string;
  title: string;
  image: string;
  link: string;
  description: string;
  highlight?: boolean;
}
export const ProjectCard = ({
  id,
  title,
  description,
  image,
  link,
  highlight,
}: iCard) => (
  <div className="flex flex-col bg-light-900 shadow-xl dark:bg-dark-500 rounded overflow-hidden">
    <div className="h-[200px] sm:h-[435px] bg-red-500 object-fill">
      <img src={image} className="w-full h-full" />
    </div>
    <div className="py-9 px-4 text-light-100 dark:text-dark-100 flex flex-col gap-9">
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-2xl leading-9 flex justify-between items-center">
          {title}
          {highlight && <BsStar className="text-primary h-5 w-5 " />}
        </h3>
        <p>{description}</p>
      </div>
      <Link
        to={AppRoutes.PROJECT.replace(":projectId", id)}
        className="text-primary text-base font-bold flex gap-3 items-center"
      >
        Saiba Mais <ArrowRightIcon />
      </Link>
    </div>
  </div>
);
