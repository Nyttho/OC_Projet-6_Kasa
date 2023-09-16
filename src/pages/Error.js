import React from "react";

const Error = () => {
  return (
    <div className="error-page">
      <h2>404</h2>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <a href="/">Retourner sur la page d'accueil</a>
    </div>
  );
};

export default Error;
