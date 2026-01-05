
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import CategoryNav  from '../../components/layout/CategoryNav'
import banner from "../../assets/banner.png"
function Home(){

    return (
        <>
        <Header />
        <CategoryNav />
        <img src={banner} alt="banner" className="img-fluid w-75 d-block m-auto"/>
        
        <p className='fs-3 fw-semibold ms-5'>Top Deals</p>
        <p className='fs-3 fw-semibold ms-5'>Hot collections</p>

        <p className='fs-3 fw-semibold ms-5'>New collections</p>
        <Footer />
        </>
    )
}

export default Home