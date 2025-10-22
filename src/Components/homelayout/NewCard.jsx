import React from "react";
import { FaEye, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
    others,
  } = news;

  // Format date (optional)
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-GB",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 my-4">
      {/* Header */}
      <div className="flex bg-base-200 items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className="btn btn-ghost btn-circle text-gray-500 hover:text-gray-700 flex gap-4">
          <CiBookmark />
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="font-bold text-lg leading-snug mb-3 text-gray-800">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="p-5">
        <img
          src={thumbnail_url}
          alt="news"
          className="w-full h-60 object-cover rounded-lg "
        />
      </figure>

      {/* Details */}
      <div className="p-4 text-sm text-gray-600">
        {details.length > 250 ? (
          <p>
            {details.slice(0, 250)}...
            <Link to ={`/news-details/${id}`} className="text-blue-600 font-semibold hover:underline cursor-pointer">
              Read More
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t px-4 py-3 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          {Array.from({ length: Math.round(rating.number) }).map((_, i) => (
            <AiFillStar key={i} />
          ))}
          <span className="text-gray-800 ml-1">{rating.number.toFixed(1)}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaEye className="text-gray-500" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
