import { BsQuestionLg } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";

import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

import './TestDescr.css';

export default function TestDescr({ test }) {
  return (
    <div className="test-descr">
      <p>{test.descr}</p>
      <div className="test-descr__options">
        <div>
          <BsQuestionLg size={18} />
          <span>{test.items.length}</span>
        </div>
        <div>
          <IoIosStarOutline size={18} />
          <span>{test.items.length}</span>
        </div>
      </div>
      <Link to={`/test/${test.id}`} className="sign-form__next">
        <MdNavigateNext size={36} />
      </Link>
    </div>
  );
}
