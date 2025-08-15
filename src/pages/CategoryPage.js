import React from 'react';
import ArticleCard from '../components/ArticleCard';
import CategorySidebar from '../components/CategorySidebar';
import articles from '../data/articles';
import categories from '../data/categories';

const CategoryPage = ({ categorySlug }) => {
  const filteredArticles = articles.filter(a => a.category === categorySlug);

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>

      <div className="md:ml-6 mt-6 md:mt-0">
        <CategorySidebar categories={categories} />
      </div>
    </div>
  );
};

export default CategoryPage;
