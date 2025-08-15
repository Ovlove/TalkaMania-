import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About TalkaMania</h1>
      <p className="mb-4">
        TalkaMania is your hub for articles across Fashion, Food, Entertainment, Kids, Sports, Wrestling, Movies, K-Drama, and Fiction. Our mission is to provide engaging, authentic, and trend-setting content for all readers.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
      <ul className="list-disc ml-6">
        <li>Authenticity: Content you can trust.</li>
        <li>Creativity: Innovative and fresh ideas.</li>
        <li>Inclusivity: Content for everyone.</li>
        <li>Engagement: Building a community of readers.</li>
      </ul>
    </div>
  );
};

export default AboutPage;
