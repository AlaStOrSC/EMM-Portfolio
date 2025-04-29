import React from 'react';
import './Modal.css';

function Modal({ project, onClose }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>
          ×
        </span>
        <h2 className="modal__title">{project.title}</h2>
        <p className="modal__description">{project.description}</p>
        <h3 className="modal__tech-title">Technologies Used:</h3>
        <ul className="modal__tech-list">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <a
          href={project.github}
          className="modal__github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default Modal;