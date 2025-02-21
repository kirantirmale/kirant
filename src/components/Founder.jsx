import React from 'react';
import kiran from '../images/hero/kiran.jpg';
import Arrow from '../images/icon/Arrow.png';
import { useNavigate } from 'react-router-dom';

const Founder = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="founder-section">
                <div className="image-container">
                    <img src={kiran} alt="About Intelisync" className="founder-image" />
                </div>
                <div className="text-container">
                    <div className="heading-container">
                        <span className="heading-line"></span>
                        <span className="heading-text">Meet Our Founder</span>
                    </div>
                    <h1 className="founder-name">Kiran Tirmale</h1>
                    <p className="founder-description">
                        Kiran Tirmale is a highly skilled <strong>MERN Stack Developer</strong> with expertise in building scalable and high-performance web applications. With a strong foundation in <strong>MongoDB, Express.js, React.js, and Node.js</strong>, he has successfully designed and developed modern full-stack solutions that streamline business operations.
                        <br /><br />
                        Passionate about <strong>frontend and backend development</strong>, Kiran specializes in creating dynamic user interfaces, optimizing APIs, and implementing database management strategies for robust applications. His knowledge extends to <strong>RESTful APIs, authentication, state management (Redux), cloud deployments, and microservices architecture</strong>.
                        <br /><br />
                        Throughout his career, Kiran has contributed to various domains, including <strong>e-commerce, CRM, and analytics dashboards</strong>. His expertise enables businesses to achieve seamless digital transformations with highly efficient and scalable software solutions. With a keen eye for <strong>performance optimization and UI/UX design</strong>, he ensures that web applications deliver the best user experience.
                        <br /><br />
                        Dedicated to continuous learning and innovation, Kiran strives to push the boundaries of web development by leveraging the latest technologies in the MERN ecosystem.
                    </p>
                    <button className="connect-button" onClick={() => navigate('/contact')}>
                        Connect
                        <img src={Arrow}  alt="Arrow" className="button-arrow" />
                    </button>
                </div>
            </section>
        </>
    );
};

export default Founder;
