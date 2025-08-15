import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';

const HomePage = () => {
  const featuredSlides = articles.slice(0, 5).map(a => ({
    image: a.image,
    title: a.title
  }));

  return (
    <main className="container mx-auto px-4 py-6">
      <HeroCarousel slides={featuredSlides} />

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
