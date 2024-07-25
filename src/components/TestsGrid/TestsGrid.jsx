import { TestsGridSkeleton } from "../Skeletons/TestsGridSkeleton";
import TestItem from "../TestItem/TestItem";

import "./TestsGrid.css";

export default function TestsGrid({ tests, loading }) {
  console.log(tests);
  return (
    <div className="tests-grid">
      <div className="container tests-grid__container">
        <h2>Тесты</h2>
        <ul className="list-reset list-grid">
          {loading ? (
            <>
              <TestsGridSkeleton />
              <TestsGridSkeleton />
              <TestsGridSkeleton />
            </>
          ) : tests ? (
            tests.map((test) => <TestItem key={test.id} test={test} />)
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
}
