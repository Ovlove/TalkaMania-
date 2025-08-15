import React from 'react';

const ArticlePage = ({ article }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-gray-500 mb-4">{article.author} | {article.pubDate} | {article.readingTime}</p>
      <img src={article.image} alt={article.title} className="w-full h-64 object-cover mb-4 rounded" />
      <div className="prose dark:prose-dark max-w-none">
        {article.content}
      </div>
      {/* Social Sharing Buttons */}
      <div className="flex space-x-4 mt-6">
        <button className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">Share on Facebook</button>
        <button className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">Share on Twitter</button>
      </div>
    </div>
  );
};

export default ArticlePage;
