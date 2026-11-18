import { useAuthStore } from "./AuthStore";

export default function Test() {

  const { isLogin, token, login, logout } =
    useAuthStore();

  return (
    <div>

      <h2>Authentication Test</h2>

      <p>Login: {String(isLogin)}</p>
      <p>Token: {token}</p>

      <button onClick={() => login("123456")}>
        Login
      </button>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}