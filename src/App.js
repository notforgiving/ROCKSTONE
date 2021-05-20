import FirstScreen from "./components/FirstScreen";
import { Swiper, SwiperSlide } from "swiper/react";
import SecondScreen from "./components/SecondScreen";
import "swiper/swiper.min.css";

function App() {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide style={{ overflow: "scroll" }}>
          <FirstScreen />
        </SwiperSlide>
        <SwiperSlide>
          <SecondScreen />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
