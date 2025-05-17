import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { projectsInfos } from "../../utils/projects-infos";

import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { Content } from "./content.jsx";
import { useRef, useState, useEffect } from "react";

import arrow from "@/assets/icons/arrow.svg";

export function SliderProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const [showFixedButtons, setShowFixedButtons] = useState(false);
  const swiperContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onScroll() {
      if (!swiperContainerRef.current) return;
      const rect = swiperContainerRef.current.getBoundingClientRect();
      setShowFixedButtons(rect.top <= -280);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function storageSlideIndex(slideIndex: number) {
    setActiveIndex(slideIndex);
  }

  function handlePrev() {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }

  function handleNext() {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }

  return (
    <>
      <div className="know-titles">
        <h2>Conheça meus projetos</h2>
      </div>

      <div
        className={`slider-general ${showFixedButtons ? "hidden-btn" : "show-btn"}`}
        ref={swiperContainerRef}
      >
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
          onSwiper={(swiper) => (swiperRef.current = swiper)}
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


      <div
        className={`fixed-swiper-buttons ${
          showFixedButtons ? "show-btn" : "hidden-btn"
        }`}
      >
        <button
          className="btn-swiper fixed-btn fixed-btn-left"
          onClick={handlePrev}
          aria-label="Projeto anterior"
        >
          <img src={arrow} alt="Anterior" />
        </button>
        <button
          className="btn-swiper fixed-btn fixed-btn-right"
          onClick={handleNext}
          aria-label="Próximo projeto"
        >
          <img src={arrow} alt="Próximo" />
        </button>
      </div>

      <div className="content">
        <Content showFixedButtons={showFixedButtons} actualSlide={activeIndex} />
      </div>
    </>
  );
}
