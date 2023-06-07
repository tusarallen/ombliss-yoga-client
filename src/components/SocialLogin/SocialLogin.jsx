import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-6">
        <button onClick={handleGoogleSignIn} className="btn btn-circle">
          <FaGoogle style={{ fontSize: "30px" }} className="hover:text-[red]" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
