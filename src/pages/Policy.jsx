import { useTranslation } from "react-i18next";

export default function Policy() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="bg-[#1B1B1B] min-h-screen px-4 pt-[35px] pb-[80px] text-white text-[13px] leading-[18px] w-[100%] mx-auto">
      <div className="max-w-[348px]">
        {lang === "pl" ? (
          <>
            <p className="mb-4 font-bold">1. Regulamin użytkowania</p>
            <p className="mt-2">1. Regulamin użytkowania</p>
            <p className="mb-2">
              Niniejszy regulamin określa zasady korzystania z aplikacji
              randkowej, skierowanej do użytkowników na terenie Polski.
              Korzystając z aplikacji, użytkownik akceptuje poniższe zasady.
            </p>
            <p className="mt-2 ">1.1. Opis aplikacji:</p>
            <p className="mb-2">
              - Aplikacja służy do nawiązywania kontaktów między użytkownikami w
              celach towarzyskich lub randkowych.
              <br />- Aplikacja oferuje funkcje takie jak: przesuwanie profili
              (suwanie), czat, publikowanie postów, system weryfikacji, system
              donacji, zakup waluty wewnętrznej.
            </p>
            <p className="mt-2">1.2. Konto użytkownika:</p>
            <p className="mb-2">
              - Rejestracja wymaga podania podstawowych danych oraz akceptacji
              regulaminu.
              <br />- Konto może zostać zweryfikowane poprzez przesłanie zdjęcia
              twarzy z podpisaną kartką. Po zatwierdzeniu, użytkownik otrzymuje
              status „Profil zweryfikowany”.
              <br />- Tylko osoby powyżej 18. roku życia mogą korzystać z
              aplikacji.
            </p>
            <p className="mt-2 ">1.3. Wersja darmowa i płatna:</p>
            <p className="mb-2">
              - Kobiety mają pełny dostęp do funkcji aplikacji bez opłat, po
              weryfikacji.
              <br />- Mężczyźni mają ograniczony dostęp w wersji darmowej.
              <br />- Subskrypcja płatna odblokowuje pełny dostęp.
            </p>
            <p className="mt-2 ">1.4. Waluta wewnętrzna:</p>
            <p className="mb-2">
              - Użytkownicy mogą kupować walutę wewnętrzną za pomocą systemu
              płatności Stripe.
              <br />- Walutę można wykorzystać do: wysyłania wiadomości bez
              dopasowania i odblokowywania dodatkowych funkcji.
            </p>
            <p className="mt-2">1.5. Treści i publikacje:</p>
            <p className="mb-2">
              - Publikowanie postów jest możliwe po uiszczeniu opłaty.
              <br />- Pierwszy post oraz jeden darmowy post tygodniowo są
              dostępne bezpłatnie.
              <br />- Inni użytkownicy mogą polubić lub skomentować post –
              maksymalnie 10 razy dziennie w wersji darmowej.
            </p>
            <p className="mt-2">1.6. Czat:</p>
            <p className="mb-2">
              - Rozmowa rozpoczyna się po dopasowaniu lub po skorzystaniu z
              płatnej wersji aplikacji.
              <br />- Możliwość wysyłania wiadomości tekstowych, głosowych,
              zdjęć i filmów (do 1 minuty).
              <br />- Wiadomości są oznaczane kolorystycznie (np. mężczyzna –
              niebieski, kobieta – różowy).
              <br />- Zdjęcia i filmy są jednorazowe i automatycznie znikać po
              obejrzeniu.
            </p>
            <p className="mt-2">1.7. Zgłoszenia i moderacja:</p>
            <p className="mb-2">
              - Użytkownik może zgłosić profil, post lub wiadomość naruszającą
              regulamin.
              <br />- Administrator ma prawo zablokować konto użytkownika lub
              usunąć treści.
              <br />- Użytkownik może zostać poinformowany o powodach odrzucenia
              weryfikacji lub zablokowania.
            </p>
            <p className="mb-4 mt-4 font-bold">Polityka prywatności</p>
            <p className="mt-2">2.1. Gromadzone dane:</p>
            <p className="mb-2">
              - Dane podawane dobrowolnie (imię, adres e-mail, zdjęcia, data
              urodzenia, opis profilu).
              <br />- Dane techniczne: adres IP, pliki cookies, dane o
              urządzeniu i lokalizacji.
            </p>
            <p className="mt-2">2.2. Cel przetwarzania:</p>
            <p className="mb-2">
              - Świadczenie usług aplikacji.
              <br />
              - Weryfikacja tożsamości.
              <br />
              - Obsługa płatności.
              <br />
              - Zapewnienie bezpieczeństwa użytkowników.
              <br />
            </p>
            <p className="mt-2">2.3. Prawa użytkownika:</p>
            <p className="mb-2">
              - Prawo dostępu do danych i ich poprawiania.
              <br />
              - Prawo do ograniczenia przetwarzania i przenoszenia danych.
              <br />- Prawo wniesienia sprzeciwu wobec przetwarzania.
            </p>
            <p className="mt-2">2.4. Udostępnianie danych:</p>
            <p className="mb-2">
              - Dane mogą być przekazywane partnerom technologicznym, np. do
              obsługi płatności. <br />- Nie przekazujemy danych osobowych
              osobom trzecim bez podstawy prawnej.
            </p>
            <p className="mt-2">2.5. Ochrona danych:</p>
            <p className="mb-2">
              - Dane są zabezpieczone technicznie i organizacyjnie.
              <br />- Stosujemy szyfrowanie, kontrolę dostępu i inne środki
              bezpieczeństwa.
            </p>
            <p className="mt-2">2.6. Pliki cookies:</p>
            <p className="mb-2">
              - Aplikacja korzysta z plików cookies do analizy statystyk,
              logowania oraz personalizacji treści.
              <br />- Użytkownik może zarządzać plikami cookies w ustawieniach
              przeglądarki.
            </p>
          </>
        ) : (
          <>
            <p className="mb-2 font-bold">Условия использования</p>
            <p className="mb-2">
              Настоящие правила регулируют использование приложения знакомств на
              территории России. Используя приложение, пользователь принимает
              следующие условия.
            </p>
            <p className="mt-3">1.1. Описание приложения:</p>
            <p className="mb-2">
              - Приложение предназначено для установления контактов между
              пользователями в целях общения или свиданий.
              <br />- Доступны функции свайпа, чата, постов, верификации,
              донатов и покупки внутренней валюты.
            </p>
            <p className="mt-3">1.2. Аккаунт пользователя:</p>
            <p className="mb-2">
              - Регистрация требует указания базовых данных и согласия с
              условиями.
              <br />- Доступно подтверждение аккаунта с помощью фото. Только
              пользователи старше 18 лет.
            </p>
            <p className="mt-3">1.3. Бесплатная и платная версии:</p>
            <p className="mb-2">
              - Женщины получают полный доступ после верификации.
              <br />- Мужчины имеют ограниченный доступ в бесплатной версии.
              <br />- Платная подписка открывает полный доступ.
            </p>
            <p className="mt-3">1.4. Внутренняя валюта:</p>
            <p className="mb-2">
              - Пользователи могут покупать валюту через Stripe.
              <br />- Валюта используется для отправки сообщений без совпадения
              и разблокировки функций.
            </p>
            <p className="mt-3">1.5. Контент и публикации:</p>
            <p className="mb-2">
              - Посты можно публиковать после оплаты.
              <br />- Первый пост и один бесплатный в неделю — бесплатно.
              <br />- Лайки и комментарии — до 10 раз в день в бесплатной
              версии.
            </p>
            <p className="mt-3">1.6. Чат:</p>
            <p className="mb-2">
              - Чат доступен после совпадения или оплаты.
              <br />- Доступны текст, голос, фото, видео (до 1 минуты).
              <br />- Цветовая маркировка сообщений.
              <br />- Фото и видео — одноразовые, исчезают после просмотра.
            </p>
            <p className="mt-3">1.7. Жалобы и модерация:</p>
            <p className="mb-2">
              - Можно пожаловаться на профиль, пост или сообщение.
              <br />- Админ может заблокировать аккаунт или удалить контент.
              <br />- Пользователь может получить объяснение причин блокировки
              или отклонения.
            </p>
            <p className="mb-4 mt-4 font-bold">Политика конфиденциальности</p>
            <p className="mt-2">2.1. Собираемые данные:</p>
            <p className="mb-2">
              - Добровольно предоставленные данные (имя, адрес электронной
              почты, фото, дата рождения, описание профиля).
              <br />- Технические данные: IP-адрес, cookies, информация об
              устройстве и местоположении.
            </p>

            <p className="mt-2">2.2. Цель обработки данных:</p>
            <p className="mb-2">
              - Предоставление услуг приложения.
              <br />
              - Верификация личности.
              <br />
              - Обработка платежей.
              <br />- Обеспечение безопасности пользователей.
            </p>

            <p className="mt-2">2.3. Права пользователя:</p>
            <p className="mb-2">
              - Право на доступ к данным и их исправление.
              <br />
              - Право ограничить обработку и перенос данных.
              <br />- Право возразить против обработки данных.
            </p>

            <p className="mt-2">2.4. Передача данных:</p>
            <p className="mb-2">
              - Данные могут передаваться технологическим партнёрам, например,
              для обработки платежей.
              <br />- Мы не передаём персональные данные третьим лицам без
              законных оснований.
            </p>

            <p className="mt-2">2.5. Защита данных:</p>
            <p className="mb-2">
              - Данные защищены техническими и организационными средствами.
              <br />- Используем шифрование, контроль доступа и другие меры
              безопасности.
            </p>

            <p className="mt-2">2.6. Cookies:</p>
            <p className="mb-2">
              - Приложение использует cookies для анализа статистики,
              авторизации и персонализации контента.
              <br />- Пользователь может управлять cookies в настройках
              браузера.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
