import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import SignupCard from "../components/SignupCard";
export const Signup = (params) => {
  return (
    <div className="flex justify-center items-center">
      <SignupCard />
    </div>
  );
};
