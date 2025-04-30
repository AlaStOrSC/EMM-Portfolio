import React, { useState } from 'react';
import './Home.css';
import './Modal.css';
import Modal from './Modal'; 

function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Padel Match Manager & Social Network',
      description: 'A platform to organize padel matches and connect players.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/yourusername/padel-match-manager',
    },
    {
      title: 'La Bandida Employee Management System',
      description: 'A system for managing employee schedules and tasks.',
      technologies: ['React, JavaScript', 'Express', 'PostgreSQL'],
      github: 'https://github.com/yourusername/la-bandida',
    },
    {
      title: 'EMM Portfolio',
      description: 'A personal portfolio showcasing my skills and projects.',
      technologies: ['React', 'CSS', 'Vite'],
      github: 'https://github.com/yourusername/emm-portfolio',
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="home">
      <section id="home" className="home__section">
        <div className="home__container">
          <div className="home__image">
            <img
              src="/images/profile.jpg"
              alt="Enrique Macías Moreno"
              className="home__profile-pic"
            />
          </div>
          <div className="home__info">
            <h1 className="home__title">Enrique Macías Moreno</h1>
            <h2 className="home__subtitle">Full Stack Developer</h2>
            <p className="home__description">
              Web developer with strong analytical skills. Passionate about
              technology and problem-solving, eager to grow professionally in the
              web development industry.
            </p>
            <div className="home__skills">
              <h3 className="home__skills-title">Main Skills</h3>
              <ul className="home__skills-list">
                <li className="home__skill">
                  <div className="skill__bar">
                    <div className="skill__bar-fill bar--75"></div>
                  </div>
                  <div className="skill__icon-container">
                    <img src="/images/JSICON.webp" alt="JavaScript Icon" className="skill__icon" />
                    <span className="skill__name">JavaScript</span>
                  </div>
                </li>
                <li className="home__skill">
                  <div className="skill__bar">
                    <div className="skill__bar-fill bar--75"></div>
                  </div>
                  <div className="skill__icon-container">
                    <img src="/images/ReactIcon2.png" alt="React Icon" className="skill__icon" />
                    <span className="skill__name">React</span>
                  </div>
                </li>
                <li className="home__skill">
                  <div className="skill__bar">
                    <div className="skill__bar-fill bar--75"></div>
                  </div>
                  <div className="skill__icon-container">
                    <img src="/images/NodeIcon.png" alt="Node.js Icon" className="skill__icon" />
                    <span className="skill__name">Node.js</span>
                  </div>
                </li>
                <li className="home__skill">
                  <div className="skill__bar">
                    <div className="skill__bar-fill bar--75"></div>
                  </div>
                  <div className="skill__icon-container">
                    <img src="/images/ExpressIcon2.png" alt="Express Icon" className="skill__icon" />
                    <span className="skill__name">Express</span>
                  </div>
                </li>
                <li className="home__skill">
                  <div className="skill__bar">
                    <div className="skill__bar-fill bar--75"></div>
                  </div>
                  <div className="skill__icon-container">
                    <img src="/images/MongoDBIcon.svg" alt="MongoDB Icon" className="skill__icon" />
                    <span className="skill__name skill__name--offset">MongoDB</span>
                  </div>
                </li>
                <li className="home__skill">
                  <div className="skill__bar">
                    <div className="skill__bar-fill bar--75"></div>
                  </div>
                  <div className="skill__icon-container">
                    <img src="/images/HTML.webp" alt="HTML Icon" className="skill__icon" />
                    <span className="skill__name skill__name--offset">HTML</span>
                  </div>
                </li>
                <li className="home__skill">
                  <div className="skill__bar">
                    <div className="skill__bar-fill bar--75"></div>
                  </div>
                  <div className="skill__icon-container">
                    <img src="/images/CSSIcon.png" alt="CSS Icon" className="skill__icon" />
                    <span className="skill__name skill__name--offset">CSS</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="profile" className="profile__section">
        <h2 className="section__title">About me</h2>
        <div className="profile__grid">
          <div className="profile__item">
            <h3 className="profile__item-title">Frontend</h3>
            <p className="profile__item-text">
              Development of modern and responsive interfaces using technologies such as JavaScript, React, jQuery, Bootstrap, HTML, and CSS.
            </p>
          </div>
          <div className="profile__item">
            <h3 className="profile__item-title">Backend</h3>
            <p className="profile__item-text">
              Experience in backend development with Node.js, Express, OAuth authentication, design and implementation of RESTful APIs, MongoDB, Mongoose, and SQL databases such as PostgreSQL.
            </p>
          </div>
          <div className="profile__item">
            <h3 className="profile__item-title">Tools</h3>
            <p className="profile__item-text">
              Experience in version control with Git and GitHub, handling REST APIs with Postman and Thunder, and advanced use of Unix Command Line.
            </p>
          </div>
          <div className="profile__item">
            <h3 className="profile__item-title">Additional Information</h3>
            <p className="profile__item-text">
              Fluent English level, teamwork, passion for programming.
            </p>
          </div>
        </div>
      </section>
      <section id="projects" className="projects__section">
        <h2 className="section__title">Featured Projects</h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project__item"
              onClick={() => openModal(project)}
            >
              {project.title}
            </div>
          ))}
        </div>
      </section>
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

export default Home;