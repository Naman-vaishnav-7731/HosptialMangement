import Header from "../components/header";
import SwiperComponent from "../components/swiper/Swiper";
import ProductIntro from "../components/ProductIntro";
import Footer from "../components/footer";

const Home = () => {

    const swiperSlideItems = [
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ]

    return(
        <>
         <Header logo={"Medically🩺"} />
         <SwiperComponent swiperSlideItems={swiperSlideItems}/>
         <ProductIntro />
         <Footer />
        </>
    )
}

export default Home;