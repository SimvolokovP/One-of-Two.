import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { RxAvatar } from "react-icons/rx";
import "./AuthActions.css";
import { toast, ToastContainer } from "react-toastify";
import { AuthSkeleton } from "../Skeletons/AuthSkeleton";
import { useDispatch } from "react-redux";
import { clearUserFromStore } from "../../store/userSlice";

export default function AuthActions() {
  const { isUser, user, loading, error } = useUser();

  const dispatch = useDispatch();

  return (
    <>
      {error && toast.error(error.message)}
      <ToastContainer />
      {isUser ? (
        <div className="auth-actions">
          {loading ? (
            <AuthSkeleton />
          ) : (
            <div>
              {user[0]?.photoUrl ? (
                <img src={user[0].photoUrl} alt={user[0].login} />
              ) : (
                <RxAvatar size={24} />
              )}
              <div>{user[0]?.login ? user[0].login : ""}</div>
              <button
                onClick={() => {
                  dispatch(clearUserFromStore());
                }}
                className="auth-actions__logout"
              >
                Выйти
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link className="auth-actions__link" to={"/login"}>
          Вы не авторизованы
        </Link>
      )}
    </>
  );
}
