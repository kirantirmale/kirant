import React from 'react'

const reviews = [
    { name: "Jack", username: "@jack", body: "I've never seen anything like this before. It's amazing. I love it.", img: "https://avatar.vercel.sh/jack" },
    { name: "Jill", username: "@jill", body: "I don't know what to say. I'm speechless. This is amazing.", img: "https://avatar.vercel.sh/jill" },
    { name: "John", username: "@john", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/john" },
    { name: "Jane", username: "@jane", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/jane" },
    { name: "Jenny", username: "@jenny", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/jenny" },
    { name: "James", username: "@james", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/james" },
  ];
  
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
const Skils = () => {
  return (
    <div>
      <div className="marquee-container">
        <h1 className='Innovators'>Trusted By Top Innovators:</h1>
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
  )
}

export default Skils
