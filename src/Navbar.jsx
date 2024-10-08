/* eslint-disable react/no-unescaped-entities */
import { faMendeley } from "@fortawesome/free-brands-svg-icons";
import {
  faClosedCaptioning,
  faFaceSurprise,
  faHotel,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url('public/pexels-francesco-ungaro-2835436 1.png')",
      }}
    >
      {/* Lớp phủ đen mờ */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Nội dung chính */}
      <div className="relative z-10 flex flex-col items-center text-center text-white pt-24">
        <h1 className="text-5xl font-bold">
          Một vé cho hành trình không hồi kết
        </h1>
        <p className="text-lg italic mt-2">
          "Cuộc sống là một chuyến đi, hãy tận hưởng từng khoảnh khắc"
        </p>

        {/* Tabs điều hướng */}
        <div className="bg-blue-50  mt rounded-t-lg shadow-lg w-full max-w-4xl mx-auto ">
          <div className="flex justify-center text-center space-x-8 p-4 font-bold">
            <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-800 ">
              <span>
                <FontAwesomeIcon icon={faHotel} />
                Khách sạn
              </span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-800">
              <span>
                {" "}
                <FontAwesomeIcon icon={faUtensils} />
                Nhà hàng
              </span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-800">
              <span>
                {" "}
                <FontAwesomeIcon icon={faFaceSurprise} />
                Hoạt động & Vui chơi
              </span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-800">
              <span>
                {" "}
                <FontAwesomeIcon icon={faClosedCaptioning} />
                Tours
              </span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-800">
              <span>
                {" "}
                <FontAwesomeIcon icon={faMendeley} />
                Khám phá thêm
              </span>
            </button>
          </div>
        </div>

        {/* Form tìm kiếm */}
        <div className="bg-blue-50  mt rounded-b-lg shadow-lg p-6 w-full max-w-4xl">
          <div className="flex justify-between space-x-4">
            <div className="w-1/4 p-2">
              <label className="block text-gray-700 font-bold">Điểm đến</label>
              <input
                type="text"
                placeholder="Bạn muốn đi đâu?"
                className=" w-full px-4 py-2 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500  text-blue-950 font-bold"
              />
            </div>
            <div className="w-1/4 p-2">
              <label className="block text-gray-700 font-bold">Ngày đến</label>
              <input
                type="date"
                className="w-full px-4 py-2 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-950 font-bold"
              />
            </div>
            <div className="w-1/4 p-2">
              <label className="block text-gray-700 font-bold">Ngày đi</label>
              <input
                type="date"
                className="w-full px-4 py-2 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500  text-blue-950 font-bold"
              />
            </div>
            <div className="w-1/4 p-2">
              <label className="block text-gray-700 font-bold">
                Số phòng, Số khách
              </label>
              <input
                type="text"
                placeholder="1 phòng, 2 người lớn, 0 trẻ em"
                className="w-full px-4 py-2 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500  text-blue-950 font-bold"
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button className="font-bold px-10 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
