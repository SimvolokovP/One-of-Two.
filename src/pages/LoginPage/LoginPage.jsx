import { Link, useNavigate } from "react-router-dom";
import SignForm from "../../components/SignForm/SignForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firebaseDB } from "../../components/firebase/firebase";

import { useDispatch } from "react-redux";
import { addUserToStore } from "../../store/userSlice";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleLogin(login, password) {
    try {
      const { user } = await signInWithEmailAndPassword(
        firebaseAuth,
        login + "@mail.ru",
        password
      );

      console.log(user);

      const data = {
        login: login,
        id: user.uid,
        token: user.accessToken,
      };

      dispatch(addUserToStore(data));
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="sign-page">
        <SignForm
          text="Вход в систему"
          btnText={"Войти"}
          handleClick={handleLogin}
        />
        <p className="sign-page__text">
          Еще нет аккаунта? <Link to={"/register"}>Зарегистрируйтесь.</Link>
        </p>
      </div>
    </>
  );
}
