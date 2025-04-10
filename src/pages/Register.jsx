import { useTranslation, Trans } from "react-i18next";
import { useFakeOnline } from "../hooks/useFakeOnline";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { t, i18n } = useTranslation();
  const tr = t("register", { returnObjects: true });
  const online = useFakeOnline();

  const navigate = useNavigate()
  return (
    <div
      className="w-full h-screen bg-cover bg-center text-white relative overflow-hidden flex flex-col justify-start"
      style={{
        backgroundImage: 'url("/backgrounds/register.png")',
      }}
    >
      {/* Языковой переключатель */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={() => i18n.changeLanguage("pl")}
          className="text-sm bg-black/40 px-2 py-1 rounded"
        >
          PL
        </button>
        <button
          onClick={() => i18n.changeLanguage("ru")}
          className="text-sm bg-black/40 px-2 py-1 rounded"
        >
          RU
        </button>
      </div>

      {/* Верхний логотип и онлайн статус */}
      <div className="text-center mt-12 z-10 flex flex-col justify-center items-center">
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="mx-auto w-60 drop-shadow-md"
        />
        <img src="/assets/mockup.png" className="w-[280px]" alt="" />
        <p className="text-[#90FFAD] text-sm mt-4 text-[11px]">
          • {t("register.online")} {online}
        </p>
      </div>

      {/* Описание */}
      <div className="px-6 text-sm text-white/90 leading-relaxed text-center z-10 text-[12px]">
        <Trans
          i18nKey="register.description"
          components={{ strong: <strong className="font-semibold" /> }}
        />
      </div>

      {/* Кнопки */}
      <div className="mt-6 px-6 mb-10 flex flex-col gap-4 z-10">
        <button className="bg-[#F7B93F] text-white font-medium py-3 rounded-md shadow" onClick={() => navigate('/signup')}>
          {tr.button_start}
        </button>
        <button className="bg-[#BC8D32] text-white font-medium py-3 rounded-md shadow" onClick={() => navigate('/signin')}>
          {tr.button_login}
        </button>
      </div>
    </div>
  );
};

export default Register;
