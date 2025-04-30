import { Swiper, SwiperSlide } from "swiper/react";
import { projectsInfos } from "../../utils/projects-infos";

import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";

export function SliderProjects() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {projectsInfos.map((project) => {
          return <SwiperSlide>{project.projeto}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
}
