import RegisterForm from "../../../components/auth/RegisterForm/RegisterForm";

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
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
