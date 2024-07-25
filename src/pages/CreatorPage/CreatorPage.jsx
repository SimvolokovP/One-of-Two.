import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import TestForm from "../../components/TestForm/TestForm";
import PageChapter from "../../components/PageChapter/PageChapter";

export default function CreatorPage() {
  const { isUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUser) {
      navigate("/login");
    }
  }, [isUser]);

  return (
    <div className="creator-page">
      <div style={{textAlign: "center"}} className="container">
        <PageChapter pageName={"Конструктор тестов"} />
        <h3 className="creator-page__title">Создать тест</h3>
        <TestForm />
      </div>
    </div>
  );
}
