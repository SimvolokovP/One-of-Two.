import { useState } from "react";
import "./TestForm.css";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { firebaseDB } from "../firebase/firebase";
import { toast } from "react-toastify";
import useStorage from "../../hooks/useStorage";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useUser } from "../../hooks/useUser";
import AppButton from "../../UI/AppButton/AppButton";

export default function TestForm() {
  const [values, setValues] = useState({
    title: "",
    descr: "",
    cover: null,
    testSize: 4,
    items: Array.from({ length: 4 }, () => ({ value: "", file: null })),
  });

  const { startUpload, progress, isUploading } = useStorage("itemImages");

  const { login } = useUser();

  const handleItemChange = (index, field, value) => {
    const newItems = [...values.items];
    newItems[index][field] = value;
    setValues({ ...values, items: newItems });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        title: values.title,
        descr: values.descr,
        items: [],
        cover: null,
        author: login,
      };

      for (const item of values.items) {
        const itemData = {
          value: item.value,
          file: item.file ? await startUpload(item.file) : null,
        };
        formData.items.push(itemData);
      }

      if (values.cover) {
        const coverUrl = await startUpload(values.cover);
        formData.cover = coverUrl;
      }

      if (!formData.title || !formData.descr || formData.items.length === 0) {
        throw new Error(
          "Missing required fields: title, description, or items"
        );
      }

      const testCollection = collection(firebaseDB, "tests");
      const docRef = await addDoc(testCollection, {
        ...formData,
        createdAt: serverTimestamp(),
      });

      await setDoc(docRef, { ...formData, id: docRef.id });  

      // await docRef.set(
      //   {
      //     id: docRef.id,
      //   },
      //   { merge: true }
      // );

      console.log("Document written with ID: ", docRef.id);
      toast.success("Тест успешно создан!");
      setValues({
        title: "",
        descr: "",
        cover: null,
        testSize: 4,
        items: Array.from({ length: 4 }, () => ({ value: "", file: null })),
      });
    } catch (error) {
      console.error("Error creating test: ", error);
      toast.error(error.message || "Произошла ошибка при создании теста.");
    }
  };

  return (
    <>
      {isUploading && <ProgressBar progress={progress} />}
      <form className="test-form" onSubmit={handleSubmit}>
        <label>
          <span>Название теста</span>
          <input
            className="test-form__input"
            required
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            type="text"
            placeholder="Название"
          />
        </label>
        <label>
          <span>(Опционально) Обложка теста</span>
          <input
            type="file"
            onChange={(e) => setValues({ ...values, cover: e.target.files[0] })}
          />
        </label>
        <label>
          <span>Описание теста</span>
          <textarea
            placeholder="Описание"
            value={values.descr}
            onChange={(e) => setValues({ ...values, descr: e.target.value })}
          ></textarea>
        </label>
        <label>
          <span>Кол-во элементов в тесте</span>
          <select
            className="test-form__input"
            value={values.testSize}
            onChange={(e) => {
              const newSize = parseInt(e.target.value);
              const newItems = Array.from({ length: newSize }, (_, index) => ({
                value: values.items[index]?.value || "",
                file: values.items[index]?.file || null,
              }));
              setValues({ ...values, testSize: newSize, items: newItems });
            }}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
            <option value="128">128</option>
            <option value="256">256</option>
          </select>
        </label>
        <div>Введите значение элемента и (опционально) его изображение</div>
        <div className="test-form__items">
          {Array.from({ length: values.testSize }, (_, index) => (
            <label key={index}>
              <input
                className="test-form__input"
                required
                placeholder={`Элемент ${index + 1}`}
                type="text"
                value={values.items[index]?.value || ""}
                onChange={(e) =>
                  handleItemChange(index, "value", e.target.value)
                }
              />
              <input
                type="file"
                onChange={(e) =>
                  handleItemChange(index, "file", e.target.files[0])
                }
              />
            </label>
          ))}
        </div>
        <AppButton type="submit">Создать!</AppButton>
      </form>
    </>
  );
}
