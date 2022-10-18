import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/", {
      replace: true, //evita que el usuario regrese a la apgina anterior porque lo esta remplazando
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
