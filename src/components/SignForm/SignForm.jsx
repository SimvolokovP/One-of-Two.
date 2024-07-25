import { useState } from "react";
import Tabs from "../../UI/Tabs/Tabs";
import { formTabs } from "../../utils/data";

import "./SignForm.css";
import { MdNavigateNext } from "react-icons/md";
import AppButton from "../../UI/AppButton/AppButton";

export default function SignForm({ btnText, handleClick, text = "" }) {
  const [activeTab, setActiveTab] = useState("login");

  const [values, setValues] = useState({ login: "", password: "" });

  return (
    <form
      className="sign-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleClick(values.login, values.password);
      }}
    >
      {text ? <div className="sign-page__title">{text}</div> : <></>}
      <Tabs activeTab={activeTab} btns={formTabs} handleClick={setActiveTab} />
      <div className="sign-form__content">
        {activeTab === "login" && (
          <label>
            <input
              value={values.login}
              onChange={(e) => setValues({ ...values, login: e.target.value })}
              className="sign-form__input"
              placeholder="Логин"
              type="text"
            />
            <button
              className="sign-form__next"
              onClick={() => setActiveTab("password")}
            >
              <MdNavigateNext size={36} />
            </button>
          </label>
        )}
        {activeTab === "password" && (
          <label>
            <div className="sign-form__password">
              <input
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                minLength={6}
                maxLength={6}
                className="sign-form__input"
                placeholder="Пароль"
                type="password"
              />
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <button
              className="sign-form__next"
              onClick={() => setActiveTab("auth")}
              placeholder="Логин"
            >
              <MdNavigateNext size={36} />
            </button>
          </label>
        )}
        {activeTab === "auth" && (
          <label>
            <input
              required
              value={values.login}
              onChange={(e) => setValues({ ...values, login: e.target.value })}
              placeholder="Логин"
              className="sign-form__input"
              type="text"
            />
            <div className="sign-form__password">
              <input
                required
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                minLength={6}
                maxLength={6}
                className="sign-form__input"
                placeholder="Пароль"
                type="password"
              />
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <AppButton>{btnText}</AppButton>
          </label>
        )}
      </div>
    </form>
  );
}
