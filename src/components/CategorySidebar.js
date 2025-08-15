import React from "react";
import { Link } from "react-router-dom";

const CategorySidebar = ({ categories }) => {
  return (
    <aside className="hidden md:block w-64 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h3 className="font-semibold mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link to={`/${cat.slug}`} className="hover:text-blue-500">
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;
