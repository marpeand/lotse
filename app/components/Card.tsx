import Link from "next/link";

interface CardProps {
  title: string;
  slug: string;
  date: string;
}

const Card = (props: CardProps) => {
  const { title, slug, date } = props;

  return (
    <Link
      className="justify-between py-2 flex hover:text-white group transition-colors duration-200"
      href={slug}
      aria-label={`Read article: ${title}`}
    >
      <h2 className="overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </h2>
      <span className="text-gray-500 group-hover:text-white transition-colors duration-150 ml-3 flex-shrink-0">
        {date}
      </span>
    </Link>
  );
};

export default Card;
