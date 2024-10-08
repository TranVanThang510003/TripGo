const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-[160px] border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mt-10">
        {/* Logo and tagline */}
        <div className="mb-6 md:mb-0 ">
          <h2 className="text-4xl font-bold text-blue-900 mt-[-40px]">TripGo.</h2>
          <p className="text-sm text-gray-500 mt-8">
            Book your trip in minute, get full <br /> control for much longer.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-between w-full md:w-auto md:space-x-10 text-gray-500 text-sm ">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-blue-900">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-blue-900">Contact</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#">Help/FAQ</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-blue-900">More</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#">Airline Fees</a>
              </li>
              <li>
                <a href="#">Airline</a>
              </li>
              <li>
                <a href="#">Low Fare Tips</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & App Links */}
        <div className="mt-6 md:mt-0">
          <div className="flex space-x-4 mb-4 justify-center">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn.pixabay.com/photo/2021/06/23/18/31/twitter-6359396_960_720.png"
                alt="Twitter"
                className="w-6 h-6 rounded-full"
              />
            </a>
          </div>
          <p className="text-lg text-gray-500 mb-2">Discover our app</p>
          <div className="flex space-x-4">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="w-[130px] h-[45px] rounded-3xl"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png"
                alt="Apple Store"
                className="w-[130px] h-[45px] rounded-3xl"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-gray-200 pt-4 text-center text-gray-500 text-sm">
        All rights reserved @jadoo.co
      </div>
    </footer>
  );
};

export default Footer;
