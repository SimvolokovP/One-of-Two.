import { collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Link, useParams } from "react-router-dom";
import { firebaseDB } from "../../components/firebase/firebase";
import OptionBlock from "../../components/OptionBlock/OptionBlock";

import "./TestPage.css";
import TestControl from "../../components/TestControl/TestControl";
import PageChapter from "../../components/PageChapter/PageChapter";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Modal from "../../UI/Modal/Modal";
import ResultContent from "../../components/ResultContent/ResultContent";
import AppButton from "../../UI/AppButton/AppButton";

export default function TestPage() {
  const { id } = useParams();
  const testRef = collection(firebaseDB, "tests");
  const testsQuery = query(testRef, where("id", "==", id));

  const [targetTest, loading, error] = useCollectionData(testsQuery);
  const [items, setItems] = useState([]);
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [count, setCount] = useState(1);
  const [length, setLength] = useState(0);
  const [list, setList] = useState([]);
  const [resultModal, setResultModal] = useState(false);
  const [winner, setWinner] = useState(null);
  const [isClick, setIsClick] = useState(true);

  useEffect(() => {
    if (targetTest && targetTest.length > 0) {
      setItems(targetTest[0].items);
      setLength(targetTest[0].items.length);
    }
  }, [targetTest]);

  useEffect(() => {
    if (items.length > 0) {
      const timer = setTimeout(() => {
        refreshTest();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [items]);

  function setDefaultSelected(array) {
    console.log("DEFAULT!");
    setItems(array.map((element) => ({ ...element, selected: false })));
  }

  const refreshTest = () => {
    console.log(items);
    if (items.length !== 1) {
      setWinner(null);
      setIsClick(true);
      const selectedItems = items.filter((item) => !item.selected);
      if (selectedItems.length > 1) {
        let firstIndex = Math.floor(Math.random() * selectedItems.length);
        let secondIndex;

        do {
          secondIndex = Math.floor(Math.random() * selectedItems.length);
        } while (secondIndex === firstIndex);

        setFirst(selectedItems[firstIndex]);
        setSecond(selectedItems[secondIndex]);
      } else {
        setCount(1);
        setLength((e) => e / 2);
        setDefaultSelected(items);
      }
    } else {
      console.log("Winner");
      setList((prevList) => [
        ...prevList,
        { value: items[0].value, number: 1 },
      ]);
      console.log("Updated list:", [
        ...list,
        { value: items[0].value, number: 1 },
      ]);
    }
  };

  const handleFirst = () => {
    setIsClick(false);
    const newItems = items.map((item) =>
      item.value === first.value ? { ...item, selected: true } : item
    );
    const updatedItems = newItems.filter((item) => item.value !== second.value);
    setItems(updatedItems);
    setList((prevList) => [
      ...prevList,
      { value: second.value, number: length },
    ]);
    setWinner(first);
    if (items.length > 1) {
      setCount((c) => c + 1);
    }
  };

  const handleSecond = () => {
    setIsClick(false);
    const newItems = items.map((item) =>
      item.value === second.value ? { ...item, selected: true } : item
    );
    const updatedItems = newItems.filter((item) => item.value !== first.value);
    setItems(updatedItems);
    setList((prevList) => [
      ...prevList,
      { value: first.value, number: length },
    ]);
    setWinner(second);
    if (items.length > 1) {
      setCount((c) => c + 1);
    }
  };

  return (
    <>
      <PageChapter pageName={"Тест"} />
      <div style={{ paddingBottom: "0" }} className="test-page">
        <TestControl targetTest={targetTest} count={count} length={length} />
        {loading ? (
          <ProgressBar />
        ) : (
          <div className="test-page__list">
            {first.value && (
              <OptionBlock
                isClick={isClick}
                setIsClick={setIsClick}
                item={first}
                items={items}
                handleClick={handleFirst}
                winner={winner}
              />
            )}
            {second.value && (
              <OptionBlock
                isClick={isClick}
                setIsClick={setIsClick}
                item={second}
                items={items}
                handleClick={handleSecond}
                winner={winner}
              />
            )}
          </div>
        )}
        <Modal setOpen={setResultModal} isOpen={resultModal}>
          <ResultContent list={list} items={items} />
        </Modal>
        <div className="test-page__results">
          {items.length === 1 ? (
            <AppButton onClick={() => setResultModal(true)}>
              Результаты
            </AppButton>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
