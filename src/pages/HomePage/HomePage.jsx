import { collection, query } from "firebase/firestore";
import PageChapter from "../../components/PageChapter/PageChapter";
import TestsGrid from "../../components/TestsGrid/TestsGrid";
import { firebaseDB } from "../../components/firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function HomePage() {
  const testsRef = collection(firebaseDB, "tests");
  const testsQuery = query(testsRef);

  const [tests, loading, error] = useCollectionData(testsQuery);

  return (
    <div className="home-page">
      <PageChapter pageName={"Главная"} />
      <TestsGrid tests={tests} loading={loading} />
      {error && <div>{error.message}</div>}
    </div>
  );
}
