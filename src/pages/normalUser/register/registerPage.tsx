import RegisterForm from "../../../components/auth/RegisterForm/RegisterForm";

const RegisterPage = () => {
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
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
