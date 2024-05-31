import { useState } from "react";

function LanguagesDropDown() {
  const [language, setLanguage] = useState(false);
  const [languageIcon, setLanguageIcon] = useState("en.png");

  const handleLanguage = () => {
    setLanguage(!language);
  };

  const handleLanguageIcon = (icon) => {
    setLanguageIcon(icon);
    setLanguage(false);
  };

  return (
    <div className="flex items-center">
      <div>
        <button onClick={handleLanguage}>
          <img src={languageIcon} alt="en language" className="h-5 " />
        </button>
      </div>

      {language && (
        <div className="text-gray-500 border-2 rounded-lg p-4 w-[190px] absolute lg:right-52 right-2 top-16 z-10 bg-white">
          <ul>
            <li>
              <button
                className="flex gap-3 items-center mb-3"
                onClick={() => handleLanguageIcon("en.png")}
              >
                <img src="/en.png" alt="English language" className="h-5" />
                <p>English (en)</p>
              </button>
            </li>
            <li>
              <button
                className="flex gap-3 items-center mb-3"
                onClick={() => handleLanguageIcon("fr.png")}
              >
                <img src="/fr.png" alt="French language" className="h-5" />
                <p>français (FR)</p>
              </button>
            </li>
            <li>
              <button
                className="flex gap-3 items-center mb-3"
                onClick={() => handleLanguageIcon("ne.png")}
              >
                <img src="/ne.png" alt="Dutch language" className="h-5" />
                <p>Nederlands (NL)</p>
              </button>
            </li>
            <li>
              <button
                className="flex gap-3 items-center mb-3"
                onClick={() => handleLanguageIcon("es.png")}
              >
                <img src="/es.png" alt="Spanish language" className="h-5" />
                <p>Española (ES)</p>
              </button>
            </li>
            <li>
              <button
                className="flex gap-3 items-center mb-3"
                onClick={() => setLanguageIcon("de.png")}
              >
                <img src="/de.png" alt="German language" className="h-5" />
                <p>Deutsch (DE)</p>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguagesDropDown;
