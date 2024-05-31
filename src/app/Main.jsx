import {
  faArrowsUpDownLeftRight,
  faClock,
  faGear,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imagesData, workersData } from "../constants/data";
import { useState } from "react";

const Main = () => {
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
          <input
            type="date"
            name="date"
            id="date"
            className="border-2 border-gray-300 rounded px-2 py-1"
          />
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

  const rowsArr = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];

  const closePopUp = () => {
    setPopupData(null);
  };

  return (
    <div className="overflow-auto relative">
      <table className="min-w-full bg-white border font-semibold text-gray-500">
        <thead>
          <tr>
            <th className="border-r-2 p-2">
              <FontAwesomeIcon icon={faGear} />
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
              {rowsArr.map((row, i) => (
                <td key={worker.id} className="border-b-2 p-2 text-center">
                  {typeof worker.violations[i] === "object"
                    ? worker.violations[i]
                    : row}
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
              className="absolute top-0 right-0 m-4 text-white"
              onClick={closePopUp}
            >
              &times;
            </button>
            <ViolationPopUp data={popupData} />
          </div>
        </div>
      )}
    </div>
  );
};

const ViolationPopUp = ({ data }) => {
  console.log(data);
  // const dataArr = [...data];
  return (
    <div className="w-[296px] h-[556px] bg-white p-4 shadow-lg rounded-lg overflow-y-auto">
      <div className="mb-4">
        <img
          src="workerimg.png"
          alt="worker image"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-lg font-semibold">Comment</h1>
          <div className="flex items-center space-x-2">
            <p className="flex items-center text-sm text-gray-600">
              <FontAwesomeIcon icon={faClock} className="mr-1" />
              {data.date}
            </p>
            <p className="text-sm text-gray-600">#{data.number}</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Main;
