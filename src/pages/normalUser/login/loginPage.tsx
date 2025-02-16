import LoginForm from "../../../components/auth/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#262830",
      }}
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;
