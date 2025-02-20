import React from "react";

const reviews = [
  { name: "Dipak", username: "@dipak", body: "Exceptional MERN Stack expertise! Built a scalable full-stack application efficiently.", img: "https://avatar.vercel.sh/jack" },
  { name: "Nilesh", username: "@nilesh", body: "Highly skilled in React.js and Node.js! Delivered a seamless UI with robust backend integration.", img: "https://avatar.vercel.sh/jill" },
  { name: "Janki", username: "@janki", body: "The best MongoDB and Express.js implementation I've seen. Optimized queries for better performance.", img: "https://avatar.vercel.sh/john" },
  { name: "Gopal", username: "@gopal", body: "Built a high-performing web app with React and Redux. Code quality was outstanding!", img: "https://avatar.vercel.sh/jane" },
  { name: "Rohan", username: "@Rohan", body: "A MERN stack pro! Developed an efficient and scalable solution with top-notch security.", img: "https://avatar.vercel.sh/jenny" },
  { name: "Hitesh", username: "@hitesh", body: "Mastered full-stack development! Delivered a feature-rich, high-speed web app.", img: "https://avatar.vercel.sh/james" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Skils = () => {
  return (
    <div>
      <div className="marquee-container">
        <h1 className="Innovators">Trusted by Industry Leaders for MERN Stack Development:</h1>
        <div className="marquee">
          {firstRow.map((review) => (
            <figure key={review.username} className="review-card">
              <div className="user-info">
                <img className="user-image" src={review.img} alt={review.name} />
                <div>
                  <figcaption className="user-name">{review.name}</figcaption>
                  <p className="user-username">{review.username}</p>
                </div>
              </div>
              <blockquote className="review-text">{review.body}</blockquote>
            </figure>
          ))}
        </div>
        <div className="marquee reverse">
          {secondRow.map((review) => (
            <figure key={review.username} className="review-card">
              <div className="user-info">
                <img className="user-image" src={review.img} alt={review.name} />
                <div>
                  <figcaption className="user-name">{review.name}</figcaption>
                  <p className="user-username">{review.username}</p>
                </div>
              </div>
              <blockquote className="review-text">{review.body}</blockquote>
            </figure>
          ))}
        </div>
        <div className="gradient-left"></div>
        <div className="gradient-right"></div>
      </div>
    </div>
  );
};

export default Skils;
