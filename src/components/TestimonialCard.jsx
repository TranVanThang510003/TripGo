const TestimonialCard = () => {
  return (
    <div className="grid grid-cols-2 gap-8 justify-items-center mt-[100px] border-t">
      {/* First Testimonial */}
      <div className="text-center max-w-md mt-20 ">
        <p className="text-lg">
          Trải nghiệm của chúng tôi với TripGo thật tuyệt vời. Trang web rất
          thân thiện và giúp chúng tôi lên kế hoạch cho chuyến đi một cách suôn
          sẻ. Quy trình đặt chỗ rất dễ dàng. Chúng tôi rất khuyến nghị TripGo
          cho những ai muốn khám phá những điểm đến mới!
        </p>
        <p className="text-blue-500 font-bold mt-4">- Vand D</p>
        <p className="text-gray-400">Happy Treloo</p>
        <div className="mt-4 flex justify-center relative">
          <img
            className="relative w-24 h-24 rounded-full object-cover"
            src="https://iv1cdn.vnecdn.net/giaitri/images/web/2019/07/01/mv-son-tung-m-tp-dat-47-trieu-luot-xem-sau-50-phut-ra-mat-1561993656.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=Wlie1HpvjMna-99RjddlSw"
            alt="Vand D"
          />
          <div className="absolute w-[45px] h-[20px] bg-white text-black flex items-center rounded-md justify-center ml-12">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="ml-1 font-bold">4.5</span>
          </div>
        </div>
      </div>

      {/* Second Testimonial */}
      <div className="text-center max-w-md mt-20">
        <p className="text-lg">
          Our trip to Morocco was truly a once-in-a-lifetime experience, and we
          are so grateful to everyone that made it happen seamlessly. Our travel
          planner, Jaouad, was incredible.
        </p>
        <p className="text-blue-500 font-bold mt-4">- Tru Vio</p>
        <p className="text-gray-400">Happy Treloo</p>
        <div className="mt-4 flex justify-center relative">
          <img
            className="relative w-24 h-24 rounded-full object-cover"
            src="https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/10/15/base64-1697371188123490553865.png"
            alt="Vand D"
          />
          <div className="absolute w-[45px] h-[20px] bg-white text-black flex items-center rounded-md justify-center ml-12">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="ml-1 font-bold">4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
