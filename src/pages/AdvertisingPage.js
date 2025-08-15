import React from 'react';

const AdvertisingPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Advertising & Sponsorship</h1>
      <p>
        TalkaMania offers advertising opportunities across all sections of our website. Reach a targeted audience interested in Fashion, Food, Entertainment, Kids, Sports, Wrestling, Movies, K-Drama, and Fiction.
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>Banner Ads on Homepage and Category Pages</li>
        <li>Sponsored Articles & Promotions</li>
        <li>Newsletter Feature Placement</li>
      </ul>
      <p className="mt-4">
        Interested in advertising? <a href="/contact" className="text-blue-500 hover:underline">Contact us</a> today.
      </p>
    </div>
  );
};

export default AdvertisingPage;
