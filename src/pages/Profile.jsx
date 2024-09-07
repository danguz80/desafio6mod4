import React from "react";

const mail = "usuariodejemplo@mail.com"

const Profile = () => {
  return (
    <form>
      <fieldset disabled>
        <legend>Usuario Registrado</legend>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={mail}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Cerrar Sesión
        </button>
      </fieldset>
    </form>
  );
};

export default Profile;
