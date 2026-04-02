import { useState } from "react";

const Login = () => {
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	return (
		<div>
			<p>Usuario</p>
			<input type="text" onChange={(ev) => setUser(ev.target.value)} />
			<p>Contraseña</p>
			<input type="password" onChange={(ev) => setPass(ev.target.value)} />
			<p>Confirmar contraseña</p>
			<button
				className="p-2 rounded-md bg-teal-400"
				onClick={() => {
					if (pass.length < 6) {
						alert("La contraseña debe tener por lo menos 6 caracteres");
						return;
					}
					if (user.length === 0) {
						alert("Se requiere un nombre de usuario");
					}
					alert("Autenticacion exitosa");
				}}
			>
				Iniciar sesión
			</button>
		</div>
	);
};

export default Login;
