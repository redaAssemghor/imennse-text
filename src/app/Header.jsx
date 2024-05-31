import {
  faA,
  faBars,
  faBell,
  faChevronDown,
  faChevronUp,
  faGear,
  faMoon,
  faRightFromBracket,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import LanguagesDropDown from "../components/LanguagesDropDown";

const Header = ({ toggleSidebar }) => {
  const [toggled, setToggled] = useState(false);

  const handleProfile = () => {
    setToggled(!toggled);
  };

  return (
    <div>
      <div className="flex justify-between p-4 border-l-2">
        <div className="flex items-center gap-5">
          <button
            className="text-2xl text-slate-400 mx-5 md:block hidden"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h1 className="text-xl font-bold">Overview</h1>
        </div>
        <div className="flex gap-10">
          <ul className="md:flex gap-10 text-xl text-gray-400 items-center hidden">
            <li>
              <button className="hover:text-blue-500">
                <FontAwesomeIcon icon={faA} />
              </button>
            </li>
            <li>
              <button className="hover:text-blue-500">
                <FontAwesomeIcon icon={faMoon} />
              </button>
            </li>
            <li>
              <button className="hover:text-blue-500">
                <FontAwesomeIcon icon={faBell} />
              </button>
            </li>
          </ul>
          <LanguagesDropDown />
          {/* <div className="flex items-center">
            <button onClick={handleLanguage}>
              <img src={languageIcon} alt="en language" className="h-5 " />
            </button>
          </div> */}

          <button className="flex gap-3 items-center" onClick={handleProfile}>
            <img
              src="/images.png"
              alt="en language"
              className="h-9 w-9 aspect-auto border-2 rounded-full"
            />
            <p className="md:block hidden font-bold text-gray-500">
              BESIX Group
            </p>
            {!toggled ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} />
            )}
          </button>
        </div>
        {toggled && <DropDown />}
        {/* {language && <LanguagesDropDown />} */}
      </div>
      <HeadersList />
    </div>
  );
};

const HeadersList = () => {
  const [selected, setSelected] = useState("All");

  const handleSelect = (site) => {
    setSelected(site);
  };

  return (
    <div className="text-gray-500 flex border-2 border-l-2 bg-white">
      <h1 className="px-12 py-3 border-r-2 self-center">SITES</h1>
      <ul className="flex gap-5 px-12 py-3">
        {["All", "Site 1", "Site 2", "Site 3", "Site 4"].map((site) => (
          <li
            key={site}
            className={`cursor-pointer px-4 py-2 rounded ${
              selected === site ? "text-blue-500" : "hover:bg-gray-200"
            }`}
            onClick={() => handleSelect(site)}
          >
            {site}
          </li>
        ))}
      </ul>
    </div>
  );
};

function DropDown() {
  return (
    <div className="text-gray-500 border-2 rounded-lg p-4 w-[180px] absolute right-2 top-16 z-10 bg-white">
      <div className="border-b-2 pb-3">
        <h1 className="font-bold">BESIX Group</h1>
        <p className="text-sm font-light">besix.group@besix.be</p>
      </div>
      <ul className="py-5 border-b-2">
        <li className="flex gap-3 items-center">
          <a href="/Profile-Settings">
            <FontAwesomeIcon icon={faGear} />
            Profile Settings
          </a>
        </li>
        <li className="flex gap-3 items-center">
          <a href="policies">
            <FontAwesomeIcon icon={faShield} />
            Our policies
          </a>
        </li>
      </ul>
      <button className="flex gap-3 items-center mt-3">
        <FontAwesomeIcon icon={faRightFromBracket} />
        Log out
      </button>
    </div>
  );
}

export default Header;
