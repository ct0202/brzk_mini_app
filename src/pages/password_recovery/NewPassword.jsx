import React from "react";
import { useTranslation } from "react-i18next";
import PasswordInput from "../../components/PasswordInput";
import { useNavigate } from "react-router-dom";

function NewPassword() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  return (
    <div className="bg-[#1B1B1B] min-h-screen flex flex-col items-center px-4 py-8 text-white">
      <h1 className="text-2xl font-bold mb-[18px] w-[343px] text-left">
        {t("recover.title")}
      </h1>

      <div className="w-full flex flex-col max-w-[343px]">

        <div className="flex flex-col gap-2 mt-[20px]">
        <label className="text-[#121826] text-[14px] font-[500]">{t("signup.labels.email")}</label>
          <input
            type="text"
            placeholder={t("signup.email")}
            className="bg-gray-100 rounded-[8px] px-4 py-3 text-[16px] text-gray-700"
          />
        </div>

        <PasswordInput />

        <div className="flex items-center gap-2 text-xs mt-4">
          <input
            type="checkbox"
            className="w-6 h-6 shrink-0 mt-0.5 text-[16px]"
          />
          <div
            // onClick={() => navigate("/policy")}
            className="text-white leading-snug"
            dangerouslySetInnerHTML={{ __html: t("signin.remember_me") }}
          ></div>
        </div>

        <button
          className="mt-4 bg-[#F7B940] text-white py-3 rounded-lg text-[14px] font-semibold"
          style={{ textShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.25)" }}
        >
          {t("register.button_login")}
        </button>

        <div className="mt-6 flex justify-center">
          <img src="/icons/google.svg" alt="Google" />
        </div>

        <div className="mt-4 flex gap-2 justify-center">
          <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
          <button onClick={() => i18n.changeLanguage("pl")}>PL</button>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
