import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

export default function Home() {
  const dispatch = useDispatch();
  const handlePressLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Button onClick={handlePressLogout}>Logout</Button>
    </>
  );
}
