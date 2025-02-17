import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  FormProps,
  Input,
  notification,
  Row,
} from "antd";
import "./LoginForm.css";
import { FcGoogle } from "react-icons/fc";

import { loginAPI, registerAPI } from "../../../services/authAPI";
import { HTTP_STATUS } from "../../../constants/httpStatus";
import { RegisterPayload } from "../../../types/req/auth/ResgisterPayload";
import { DataRes } from "../../../types/res/DataRes";
import { ErrorRes } from "../../../types/res/ErrorRes";
import { useForm } from "antd/es/form/Form";
import { Link, useNavigate } from "react-router-dom";
import { getGoogleAuthURL } from "../../../utils/googleUtils";

export default function LoginForm() {
  const [form] = useForm();
  const navigate = useNavigate();
  const googleUrl = getGoogleAuthURL();

  const onFinish: FormProps<RegisterPayload>["onFinish"] = async (values) => {
    const response = (await loginAPI(values)).data;
    if (response?.status == HTTP_STATUS.OK) {
      notification.success({
        message: (response as DataRes)?.message,
      });
      form.resetFields();
      navigate("/");
    } else if (response?.status) {
      notification.error({
        message: (response as ErrorRes)?.message,
      });
    }
  };
  return (
    <div className="register-container">
      <div className="title">
        <span>Login</span>
        <span className="disable-title">
          <Link to={"/register"}>Register</Link>
        </span>
      </div>
      <Form
        form={form}
        name="register-form"
        labelCol={{ span: 15 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="username"
          label="Username or email address"
          rules={[
            {
              required: true,
              message: "Please input your username or email!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>


        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            {
              pattern: /^(?=.*[A-Z]).{8,}$/,
              message:
                "Password must be at least 8 characters and contain at least 1 uppercase letter!",
            },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="mail" style={{ color: "#69b8fd" }}>
            Forgot password
          </a>
        </div>
        <Button
          className="register-btn"
          htmlType="submit"
          type="primary"
          style={{ backgroundColor: "#233a95" }}
        >
          Login
        </Button>
      </Form>
      <Divider
        style={{ marginBlock: "0px", color: "#808080", paddingTop: "20px" }}
      >
        OR
      </Divider>
      <div style={{ width: "80%", paddingBottom: "30px" }}>
        <Link to={googleUrl}>
          <Button className="google-btn">
            <FcGoogle fontSize={30} />
            <span style={{ marginLeft: '8px' }}>Continue with google</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
