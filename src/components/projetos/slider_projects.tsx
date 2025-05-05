import { Swiper, SwiperSlide } from "swiper/react";
import { projectsInfos } from "../../utils/projects-infos";

import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import { Content } from "./content.jsx";
import { useState } from "react";

export function SliderProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  function storageSlideIndex(slideIndex: number) {
    setActiveIndex(slideIndex);
  }

  return (
    <>
      <div className="center">
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
          onSlideChange={(swiper) => storageSlideIndex(swiper.realIndex)}
        >
          {projectsInfos.map((project) => {
            return (
              <SwiperSlide key={project.id}>
                <p>{project.projeto}</p>
                <img src={project.logo} alt="logo empresa" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="content">
        <Content actualSlide={activeIndex} />
      </div>
    </>
  );
}
