import {
  Button,
  Col,
  Divider,
  Form,
  FormProps,
  Input,
  notification,
  Row,
} from "antd";
import "./RegisterForm.css";
import { FcGoogle } from "react-icons/fc";
import { FieldType } from "./FieldTypeForm";
import { registerAPI } from "../../../services/authAPI";
import { HTTP_STATUS } from "../../../constants/httpStatus";
import { RegisterPayload } from "../../../types/req/auth/ResgisterPayload";
import { DataRes } from "../../../types/res/DataRes";
import { ErrorRes } from "../../../types/res/ErrorRes";
import { useForm } from "antd/es/form/Form";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [form] = useForm();
  const navigate = useNavigate();

  const onFinish: FormProps<RegisterPayload>["onFinish"] = async (values) => {
    const response = (await registerAPI(values)).data;
    if (response?.status == HTTP_STATUS.OK) {
      notification.success({
        message: (response as DataRes)?.message,
      });
      form.resetFields();
      navigate("/login");
    } else if (response?.status) {
      notification.error({
        message: (response as ErrorRes)?.message,
      });
    }
  };
  return (
    <div className="container">
      <div className="title">
        <span className="disable-title">
          <Link to={"/login"}>Login</Link>
        </span>
        <span>Register</span>
      </div>
      <Form
        form={form}
        name="register-form"
        labelCol={{ span: 12 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item label="Email">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item<FieldType>
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FieldType>
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                  {
                    pattern: /[a-zA-z]/,
                    message: "Username must contain at least 1 letter",
                  },
                  {
                    min: 4,
                    message: "Username must contain at least 4 characters",
                  },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item<FieldType>
          label="Full Name"
          name="fullName"
          rules={[
            { required: true, message: "Please input your full name!" },
            {
              pattern: /[a-zA-z]/,
              message: "Full name must contain at least 1 letter",
            },
            {
              min: 4,
              message: "Full name must contain at least 4 characters",
            },
          ]}
        >
          <Input placeholder="Fullname" />
        </Form.Item>

        <Form.Item<FieldType>
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
          <Input.Password />
        </Form.Item>
        <Form.Item<FieldType>
          label="Confirm password"
          name="confirmPassword"
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Button
          className="register-btn"
          htmlType="submit"
          type="primary"
          style={{ backgroundColor: "#233a95" }}
        >
          Register
        </Button>
      </Form>
      <Divider style={{ marginBlock: "0px", color: "#808080" }}>OR</Divider>
      <div style={{ width: "80%", paddingBottom: "30px" }}>
        <Button className="google-btn">
          <span className="google-icon">
            <FcGoogle fontSize={30} />
          </span>
          <span>Continue with google</span>
        </Button>
      </div>
    </div>
  );
}
