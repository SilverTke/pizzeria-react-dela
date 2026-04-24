import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  return (
    <div>
      <p>Usuario</p>
      <input
        type="text"
        className="bg-gray-200"
        onChange={(ev) => setUser(ev.target.value)}
      />
      <p>Contraseña</p>
      <input
        type="password"
        className="bg-gray-200"
        onChange={(ev) => setPass(ev.target.value)}
      />
      <p>Confirmar contraseña</p>
      <input
        type="password"
        className="bg-gray-200"
        onChange={(ev) => setConfirmPass(ev.target.value)}
      />
      <br />
      <button
        className="p-2 rounded-md bg-teal-400"
        onClick={() => {
          if (pass.length < 6) {
            alert("La contraseña debe tener por lo menos 6 caracteres");
            return;
          }
          if (pass !== confirmPass) {
            alert("Las contraseñas no coinciden");
            return;
          }
          if (user.length === 0) {
            alert("Se requiere un nombre de usuario");
          }
          alert("Autenticacion exitosa");
        }}
      >
        Registrarse
      </button>
    </div>
  );
};

export default Register;
