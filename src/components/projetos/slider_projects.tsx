import { Swiper, SwiperSlide } from "swiper/react";
import { projectsInfos } from "../../utils/projects-infos";

import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { Content } from "./content.jsx";
import { useState } from "react";

import arrow from "@/assets/icons/arrow.svg";

export function SliderProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  function storageSlideIndex(slideIndex: number) {
    setActiveIndex(slideIndex);
  }

  return (
    <>
      <div className="know-titles">
        <h2>Conheça meus projetos</h2>
      </div>

      <div className="slider-general">
        <div className="prev-btn btn-swiper">
          <img src={arrow} alt="" />
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          parallax={true}
          modules={[Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) => storageSlideIndex(swiper.realIndex)}
          breakpoints={{
            1050: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {projectsInfos.map((project) => {
            return (
              <SwiperSlide key={project.id}>
                <div className="slider-img">
                  <img src={project.logo} alt="logo empresa" />
                </div>
                <div className="name-project">
                  <p>{project.projeto}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="next-btn btn-swiper">
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className="content">
        <Content actualSlide={activeIndex} />
      </div>
    </>
  );
}
