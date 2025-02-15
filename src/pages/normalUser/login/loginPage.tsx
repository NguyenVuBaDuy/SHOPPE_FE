import LoginForm from "../../../components/auth/LoginForm/LoginForm";

const RegisterPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <LoginForm />
    </div>
  );
};

export default RegisterPage;
