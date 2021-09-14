import LoginIndex from "../../src/components/login";
import useAppContext from "../../src/hooks/useAppContext";

const Login = (props) => {
  const { isLoggedIn } = useAppContext();

  return <LoginIndex />;
};

export default Login;
