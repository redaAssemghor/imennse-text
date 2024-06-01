import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const ViolationPopUp = ({ data }) => {
  console.log(data);

  return (
    <div className="w-[296px] h-[556px] bg-white p-4 shadow-lg rounded-lg overflow-y-auto scrollbar-webkit">
      {data.map((el, i) => (
        <div key={i} className="mb-4">
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
                {el.date}
              </p>
              <p className="text-sm text-gray-600">#{el.number}</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {el.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ViolationPopUp;
