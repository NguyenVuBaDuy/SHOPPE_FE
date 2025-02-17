import RegisterForm from "../../../components/auth/RegisterForm/RegisterForm";

const RegisterPage = () => {
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
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
