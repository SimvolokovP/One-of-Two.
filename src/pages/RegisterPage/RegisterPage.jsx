import { Link, useNavigate } from "react-router-dom";
import SignForm from "../../components/SignForm/SignForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { firebaseAuth, firebaseDB } from "../../components/firebase/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { addUserToStore } from "../../store/userSlice";

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleRegister(login, password) {
    try {
      const { user } = await createUserWithEmailAndPassword(
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

      await setDoc(doc(firebaseDB, "users", user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });

      dispatch(addUserToStore(data));
      navigate("/");
    } catch (error) {
      console.log(login, password);
      toast.error(error.message);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="sign-page">
       
        <SignForm
          text="Создать аккаунт"
          btnText={"Создать аккаунт"}
          handleClick={handleRegister}
        />
        <p className="sign-page__text">
          Уже есть аккаунт? <Link to={"/login"}>Войдите в систему.</Link>
        </p>
      </div>
    </>
  );
}
