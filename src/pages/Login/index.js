import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authThunk";
import { useNavigate } from "react-router-dom";
import { clearMessage } from "../../features/message/messageSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [navigate, isLoggedIn]);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleOnPressLogin = () => {
    dispatch(login({ username, password }));
  };
  return (
    <>
      <div className="flex items-center justify-center content-center h-screen w-full max-w-screen-md mx-auto	">
        <div className="w-full">
          <Input
            className="border-blue-500"
            id="username"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            error={message && message}
          />
          <Input
            className="border-blue-500"
            id="password"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" onClick={handleOnPressLogin}>
            Sign in
          </Button>
        </div>
      </div>
    </>
  );
}
