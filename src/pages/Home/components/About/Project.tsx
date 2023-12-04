export const Project = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex gap-4">
    <h3 className="w-32">{title}</h3>
    <p className="flex-1">{description}</p>
  </div>
);
