import { useNavigate } from "react-router-dom";

import "./TestControl.css";
import AppButton from "../../UI/AppButton/AppButton";

export default function TestControl({ targetTest, count, length }) {
  const navigate = useNavigate();
  return (
    <div className="test-control">
      <div className="container test-control__container">
        <AppButton
          onClick={() => {
            if (confirm("Вы действительно хотите завершить тест?")) {
              navigate("/");
            }
          }}
        >
          Завершить тест
        </AppButton>
        <div>
          {targetTest && targetTest.length > 0
            ? targetTest[0].title
            : "Test not found"}
        </div>
        <div>
          {length / 2 === 1 ? (
            <>Финал</>
          ) : (
            <>
              Раунд {count} / {length / 2}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
