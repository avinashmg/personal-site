// Import Swiper React components
import SwiperCore, {Pagination, Navigation, EffectFade, Autoplay} from 'swiper'
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);
const Slider = ()=>{
return (
    <Swiper
      style={{height:'500px'}}
      slidesPerView={1}
      autoplay={{"delay":2500}}
      spaceBetween={30} effect={'fade'} navigation={true} pagination={{
        "clickable": true}}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide style={{background: `url('https://wallpaperaccess.com/full/740013.jpg') center center / cover`}}></SwiperSlide>
      <SwiperSlide style={{background: `url('https://th.bing.com/th/id/R934e08b30ad1b5604e15bfb63f77b1f3?rik=mDgfeQIwcu5uew&riu=http%3a%2f%2f1.bp.blogspot.com%2f-8ekwpNGUm7o%2fTzDslWf2NJI%2fAAAAAAAADdk%2fuKbPW0CmwPc%2fs1600%2fbugatti-veyron-red-and-black.jpg&ehk=57aknIGA0OuJP29%2fA68k8m4xdkNo8d1o%2fYMBKv0R9m8%3d&risl=&pid=ImgRaw') center center / cover`}}></SwiperSlide>
      <SwiperSlide style={{background: `url('https://th.bing.com/th/id/R0e4d64fdfc8492b64a36844cde27ff0e?rik=vPzEdJHdkkZWgg&riu=http%3a%2f%2fwww.wallpaperbetter.com%2fwallpaper%2f57%2f404%2f1016%2fbmw-hamann-x6m-red-black-car-1080P-wallpaper.jpg&ehk=E32BJ4pbGhE63KztG6FpmKy9zhEgqmd%2foY6hNEE4aOQ%3d&risl=&pid=ImgRaw') center center / cover`}}></SwiperSlide>
    </Swiper>
)
}
export default Slider