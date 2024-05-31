import { imagesData } from "../constants/data";

const Setting = ({ settingOn, data, handleCheckboxChange }) => {
  return (
    <div>
      {settingOn && (
        <div className="max-w-[250px] border-2 rounded-lg bg-white shadow-md absolute p-4 top-1 left-10">
          <h1 className="text-lg text-gray-400 font-bold mb-4">
            Select columns to display
          </h1>
          <ul className="space-y-2">
            {data.map((item, index) => (
              <li key={index}>
                <label htmlFor={item.name} className="flex items-center">
                  <input
                    type="checkbox"
                    name={item.name}
                    id={item.name}
                    className="mr-2 custom-checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange(item.name)}
                  />
                  {item.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Setting;
