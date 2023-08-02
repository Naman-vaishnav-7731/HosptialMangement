import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';


const SwiperComponent = ({swiperSlideItems}) => {
    return(
      <div className='bg-[#312E81] p-8'>
           <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper mt-5 bg-dark"
          >
          {
              swiperSlideItems.map((img) => {
                return(
                    <SwiperSlide>
                        <img src={img} />
                    </SwiperSlide>
                )
            })
          }
        </Swiper>
      </div>
    )
}

export default SwiperComponent;
