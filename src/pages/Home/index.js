import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { clearMessage } from "../../features/message/messageSlice";

export default function Home() {
  const dispatch = useDispatch();
  const handlePressLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  return (
    <>
      <Button onClick={handlePressLogout}>Logout</Button>
    </>
  );
}
