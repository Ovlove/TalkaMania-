import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={article.image} alt={article.title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{article.teaser}</p>
        <p className="text-xs text-gray-500">{article.pubDate}</p>
        <Link to={`/article/${article.id}`} className="text-blue-500 hover:underline mt-2 block">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
