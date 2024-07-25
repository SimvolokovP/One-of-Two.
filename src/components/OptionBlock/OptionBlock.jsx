import "./OptionBlock.css";

export default function OptionBlock({
  handleClick,
  item,
  items,
  winner,
  setIsClick,
  isClick,
}) {
  return (
    <div
      className={`option-block ${
        winner && winner.value === item.value ? "winner-class" : ""
      }`}
      onClick={items.length > 1 && isClick ? handleClick : undefined}
    >
      <div>{item.value}</div>
      <div className="option-block__cover">
        {item?.file ? (
          <img loading="lazy" src={item.file} alt={item.value} />
        ) : (
          <div>{item.value}</div>
        )}
      </div>
    </div>
  );
}
