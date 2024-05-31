import {
  faBagShopping,
  faHand,
  faHands,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Sidebar = ({ open }) => {
  const [selected, setSelected] = useState("#dashboard");
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsOpen(false);
      } else {
        setIsOpen(open);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const handleSelected = (id) => () => {
    setSelected(id);
  };

  return (
    <div
      className={`flex flex-col h-screen ${
        isOpen ? "w-[250px] p-5" : "w-[80px]"
      }`}
    >
      <div className="mb-5">
        {isOpen ? (
          <img src="/logo.png" alt="Logo" className="m-4" />
        ) : (
          <img src="/mini-logo.png" alt="Logo" className="p-5" />
        )}
      </div>
      {isOpen ? (
        <div className="text-gray-400 flex-grow">
          <ul className="font-bold">
            <li className="flex items-center mb-2">
              <a
                href="#dashboard"
                className={`flex items-center w-full px-2 py-1 rounded ${
                  selected === "#dashboard"
                    ? "bg-blue-400 text-white"
                    : "text-gray-400 hover:bg-blue-400 hover:text-white"
                }`}
                onClick={handleSelected("#dashboard")}
              >
                <FontAwesomeIcon icon={faHouse} className="mr-2" />
                Dashboard
              </a>
            </li>
            <li className="flex items-center mb-2">
              <a
                href="#ppe-violations"
                className={`flex items-center w-full px-2 py-1 rounded ${
                  selected === "#ppe-violations"
                    ? "bg-blue-400 text-white"
                    : "text-gray-400 hover:bg-blue-400 hover:text-white"
                }`}
                onClick={handleSelected("#ppe-violations")}
              >
                <FontAwesomeIcon icon={faHand} className="mr-2" />
                P.P.E Violations
              </a>
            </li>
          </ul>
          <h1 className="py-5 m-1 text-sm font-medium text-gray-300">MANAGE</h1>
          <ul className="font-bold">
            <li className="flex items-center mb-2">
              <a
                href="#ppes"
                className={`flex items-center w-full px-2 py-1 rounded ${
                  selected === "#ppes"
                    ? "bg-blue-400 text-white"
                    : "text-gray-400 hover:bg-blue-400 hover:text-white"
                }`}
                onClick={handleSelected("#ppes")}
              >
                <FontAwesomeIcon icon={faHands} className="mr-2" />
                P.P.Es
              </a>
            </li>
            <li className="flex items-center mb-2">
              <a
                href="#contractors"
                className={`flex items-center w-full px-2 py-1 rounded ${
                  selected === "#contractors"
                    ? "bg-blue-400 text-white"
                    : "text-gray-400 hover:bg-blue-400 hover:text-white"
                }`}
                onClick={handleSelected("#contractors")}
              >
                <FontAwesomeIcon icon={faBagShopping} className="mr-2" />
                Contractors
              </a>
            </li>
            <li className="flex items-center mb-2">
              <a
                href="#workers"
                className={`flex items-center w-full px-2 py-1 rounded ${
                  selected === "#workers"
                    ? "bg-blue-400 text-white"
                    : "text-gray-400 hover:bg-blue-400 hover:text-white"
                }`}
                onClick={handleSelected("#workers")}
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Workers
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="text-gray-400 text-xl">
          <ul className="flex flex-col gap-6 p-5">
            <li>
              <a
                href="#dashboard"
                className={`p-2 ${
                  selected === "#dashboard"
                    ? " text-blue-400"
                    : "hover:text-blue-400"
                }`}
                onClick={handleSelected("#dashboard")}
              >
                <FontAwesomeIcon icon={faHouse} />
              </a>
            </li>
            <li>
              <a
                href="#ppe-violations"
                className={`p-2 ${
                  selected === "#ppe-violations"
                    ? "text-blue-400"
                    : " hover:text-blue-400"
                }`}
                onClick={handleSelected("#ppe-violations")}
              >
                <FontAwesomeIcon icon={faHand} />
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-6 border-t-2 p-5">
            <li>
              <a
                href="#ppes"
                className={`p-2${
                  selected === "#ppes"
                    ? "text-blue-400"
                    : " hover:text-blue-400"
                }`}
                onClick={handleSelected("#ppes")}
              >
                <FontAwesomeIcon icon={faHands} />
              </a>
            </li>
            <li>
              <a
                href="#contractors"
                className={`p-2 ${
                  selected === "#contractors"
                    ? "text-blue-400 "
                    : " hover:text-blue-400"
                }`}
                onClick={handleSelected("#contractors")}
              >
                <FontAwesomeIcon icon={faBagShopping} />
              </a>
            </li>
            <li>
              <a
                href="#workers"
                className={`p-2 ${
                  selected === "#workers"
                    ? "text-blue-400"
                    : " hover:text-blue-400"
                }`}
                onClick={handleSelected("#workers")}
              >
                <FontAwesomeIcon icon={faUser} />
              </a>
            </li>
          </ul>
        </div>
      )}

      {isOpen && (
        <div className="mt-auto text-gray-400 border-t-2">
          <h1 className="font-bold">@ App Name 2021</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            aliquid debitis mollitia quasi itaque necessitatibus
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
