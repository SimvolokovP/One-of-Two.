import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { isUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUser) {
      navigate("/login");
    }
  }, [isUser]);

  return (
    <div>
      <div className="container">
        Страница в разработке..
      </div>
    </div>
  );
}
