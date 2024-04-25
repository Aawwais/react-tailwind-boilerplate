import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Auth = (props) => {
  let history=useHistory()
  useEffect(() => {
    if (!user) {
      dispatch(logoutUser());
      dispatch(removeExistingUser());
    } else  {
     history.push("/about")
    }
  }, []);
  return <>{props.children}</>;
};

export default Auth;
