import "./Tabs.css";

export default function Tabs({ btns, handleClick, activeTab }) {
  return (
    <div className="tabs">
      <ul className="list-reset">
        {btns.map((btn) => (
          <li key={btn.value}>
            <button
              className={activeTab === btn.value ? "tab-btn active" : "tab-btn"}
              type="button"
              onClick={() => handleClick(btn.value)}
            >
              {btn.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
