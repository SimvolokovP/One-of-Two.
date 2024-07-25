import "./Modal.css";

export default function Modal({ isOpen, setOpen, children }) {
  return (
    <div
      onClick={() => setOpen(false)}
      className={isOpen ? "modal-container active" : "modal-container"}
    >
      <div onClick={(e) => e.stopPropagation()} className="modal">
        {children}
      </div>
    </div>
  );
}
