import "./PageChapter.css";
import AuthActions from "../AuthActions/AuthActions";

export default function PageChapter({ pageName }) {
  return (
    <div className="page-chapter">
      <div className="container page-chapter__container">
        <div className="page-chapter__name">{pageName}</div>
        <AuthActions />
      </div>
    </div>
  );
}
