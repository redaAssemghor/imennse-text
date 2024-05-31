import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsUpDownLeftRight,
  faGear,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { imagesData, workersData } from "../constants/data";
import ViolationPopUp from "../components/ViolationPopUp";
import Setting from "../components/Settings";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Main = () => {
  const [dates, setDates] = useState(null);

  return (
    <div className="p-6 bg-gray-100 min-h-screen border-l-2 max-w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">
          P.R.E Violations Table
        </h1>
        <form className="flex items-center text-gray-500 space-x-4">
          <label className="flex items-center border-2 border-gray-300 rounded px-2">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-400"
            />
            <input
              type="text"
              placeholder="Search worker"
              className="ml-2 outline-none p-1"
            />
          </label>

          <div className="card flex justify-content-center custom-calendar">
            <Calendar
              value={dates}
              onChange={(e) => setDates(e.value)}
              selectionMode="range"
              readOnlyInput
              hideOnRangeSelection
              inputClassName="p-inputtext p-component w-64 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300"
            />
          </div>

          <select
            name="workers"
            id="workers"
            className="border-2 border-gray-300 rounded px-2 py-1"
          >
            <option value="All Constructors" defaultValue={"All Constructors"}>
              All Constructors
            </option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
          <button
            type="button"
            className="flex items-center justify-center border-2 border-gray-300 rounded px-3 py-1"
          >
            <FontAwesomeIcon
              icon={faArrowsUpDownLeftRight}
              className="text-gray-400"
            />
          </button>
        </form>
      </div>
      <Tables />
    </div>
  );
};

const Tables = () => {
  const [popupData, setPopupData] = useState(null);
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="overflow-auto relative">
      <table className="min-w-full bg-white border font-semibold text-gray-500">
        <thead>
          <tr>
            <th className="border-r-2 p-2">
              <button onClick={() => setOpenSettings(!openSettings)}>
                <FontAwesomeIcon icon={faGear} />
              </button>
            </th>
            <th className="border-r-2 p-2 min-w-[150px]">Workers</th>
            {imagesData.map((image, i) => (
              <th key={i} className="border-b-2 p-2">
                <div className="flex flex-col items-center">
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-10 h-10 mb-2"
                  />
                  <h3>{image.name}</h3>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {workersData.map((worker) => (
            <tr key={worker.id}>
              <td className="border-2 p-2">{worker.id}</td>
              <td className="border-t-2 border-r-2 p-2 min-w-[250px]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <img
                      src={worker.imgUrl}
                      alt={worker.name}
                      className="w-10 h-10"
                    />
                    <div>
                      <h3>{worker.name}</h3>
                      <h6 className="font-light text-sm">{worker.position}</h6>
                    </div>
                  </div>
                  <img
                    src={worker.companyIcon}
                    alt={worker.name}
                    className="w-10 h-10"
                  />
                </div>
              </td>
              {worker.violations.map((vio, i) => (
                <td key={i} className="border-b-2 px-5">
                  {vio ? (
                    <button
                      className={`h-8 w-8 rounded-full ${
                        vio.length > 1
                          ? "bg-red-500 text-white"
                          : "bg-yellow-500 text-black"
                      }`}
                      onClick={() => setPopupData(vio)}
                    >
                      {vio.length}
                    </button>
                  ) : (
                    "-"
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {popupData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 m-4 text-black text-3xl font-bold"
              onClick={() => setPopupData(null)}
            >
              &times;
            </button>
            <ViolationPopUp data={popupData} />
          </div>
        </div>
      )}
      <Setting settingOn={openSettings} />
    </div>
  );
};

export default Main;
