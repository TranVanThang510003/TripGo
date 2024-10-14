import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className=" p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="logo.png" />

        {/* Input search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm điểm đến"
            className="bg-blue-100 px-4 py-2 pl-10 pr-4 rounded-full border border-slate-400 focus:outline-none focus:border-blue-500 "
          />
          {/* Search Icon */}
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          />
        </div>
      </div>

      <nav className="flex items-center space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-800 font-bold">
          VN|VND
        </a>
        <FontAwesomeIcon icon={faChevronDown} className="" />
        <a href="#" className="text-gray-600 hover:text-gray-800 font-bold">
          Chuyển đi
        </a>
        <FontAwesomeIcon icon={faChevronDown} className="" />
        <a href="#" className="text-gray-600 hover:text-gray-800 font-bold">
          Hỗ trợ
        </a>
        <FontAwesomeIcon icon={faChevronDown} className="" />
        <button className="px-4 py-2 rounded-lg text-blue-90 border border-blue-700 hover:bg-blue-700 bg-blue-100">
          Đăng Nhập
        </button>
        <button className="px-6 py-2 rounded-lg text-blue-90 border border-blue-700 hover:bg-blue-700  bg-blue-100">
          Đăng Ký
        </button>
      </nav>
    </header>
  );
};

export default Header;
