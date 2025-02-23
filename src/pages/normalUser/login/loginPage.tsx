import LoginForm from "../../../components/auth/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          height: "100%",
          backgroundColor: "#262830",
          overflowY: "auto"
        }}
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
