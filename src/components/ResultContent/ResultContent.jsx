import { Link } from 'react-router-dom';
import './ResultContent.css';

export default function ResultContent({ items, list }) {
  return (
    <div className="result-content">
      {items.length === 1 ? (
        <div style={{marginBottom: "10px"}} className="result-content__list">
          {list.map((element, index) => (
            <div key={index}>
              {element.number}. {element.value}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
      <Link to={"/"}>Выход</Link>
    </div>
  );
}
