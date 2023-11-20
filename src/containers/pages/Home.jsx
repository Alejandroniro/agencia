import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"
import { Helmet } from 'react-helmet-async'
import Header from "components/home/Header"
import Incentives from "components/home/Incentives"
import BlogSection from "components/home/BlogSection"
import CTA from "components/home/CTA"
import DealSection from "components/home/DealsSection"
import VacationPlan from "components/home/vacationPlan"
import AboutUs from "components/home/aboutUs"

function Home(){
    return(
        <Layout>
            <Helmet>
                <title>Trabook | Travel Agency</title>
                <meta name='description' content='Agencia de viajes' />
                <link rel='canonical' href='dominio.com'></link>
                <meta name='description' content='Agencia de viajes' />
            </Helmet>
            <Navbar/>
            <div className="pt-20">
                <Header/>
                <Incentives/>
                <DealSection/>
                <VacationPlan/>
                <AboutUs/>
                <BlogSection/>
                <CTA/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Home