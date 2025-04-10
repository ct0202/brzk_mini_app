import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function GenderToggle() {
  const [selected, setSelected] = useState("man");
  const { t } = useTranslation();

  return (
    <div className="w-[343px] h-[38px] bg-[#141522] rounded-[16px] flex justify-between p-1 transition-all duration-300 mt-4">
      <button
        onClick={() => setSelected("man")}
        className={`w-1/2 h-full rounded-[16px] text-sm font-semibold transition-all duration-300 ${
          selected === "man" ? "bg-[#5E6CFA] text-white" : "text-white"
        }`}
      >
        {t("signup.man")}
      </button>
      <button
        onClick={() => setSelected("girl")}
        className={`w-1/2 h-full rounded-[16px] text-sm font-semibold transition-all duration-300 ${
          selected === "girl" ? "bg-[#F26DB0] text-white" : "text-white"
        }`}
      >
        {t("signup.girl")}
      </button>
    </div>
  );
}
