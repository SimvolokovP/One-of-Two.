import { MdNavigateNext } from "react-icons/md";
import "./TestItem.css";
import { Link } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";
import { useState } from "react";
import TestDescr from "../TestDescr/TestDescr";

export default function TestItem({ test }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <li>
        <article className="test-item">
          {test?.cover ? (
            <img loading="lazy" src={test.cover} alt={test.title} />
          ) : (
            <div className="test-item__cover"></div>
          )}
          <div className="test-item__actions">
            <div>
              <h3 className="test-item__title">{test.title}</h3>
              <div className="test-item__author">{test.author}</div>
            </div>
            <button
              style={{ flexShrink: "0" }}
              onClick={() => setModal(true)}
              className="sign-form__next"
            >
              <MdNavigateNext size={36} />
            </button>
            {/* <Link
              to={`/test/${test.id}`}
              style={{ flexShrink: "0" }}
              className="sign-form__next"
            >
              <MdNavigateNext size={36} />
            </Link> */}
          </div>
        </article>
      </li>
      <Modal isOpen={modal} setOpen={setModal}>
        <TestDescr test={test} />
      </Modal>
    </>
  );
}
