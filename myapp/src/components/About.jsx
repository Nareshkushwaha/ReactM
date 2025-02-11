import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="profile">
          <div className="profile-image">
            <img src="https://avatars.githubusercontent.com/u/136300870?v=4" alt="Naresh's Profile" />
          </div>
        </div>
        <div className="bio">
          <h2>About Me</h2>
          <p className="bio-text">
            Hello! I'm Naresh, a passionate Full Stack Developer with a keen eye for
            creating beautiful and functional web experiences.
          </p>
          <p className="bio-text">
            My journey in web development began with a fascination for user interfaces
            and has evolved into a professional pursuit of creating seamless digital
            experiences.
          </p>
          <div className="skills">
            {["HTML5", "CSS3", "JAVASCRIPT", "LINUX", "JAVA", "OOPS", "GIT", "C", "PROBLEM SOLVING", "SQL"].map(
              (skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
