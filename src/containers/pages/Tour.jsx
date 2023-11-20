import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"
import { Helmet } from 'react-helmet-async'

function Tour(){
    return(
        <Layout>
            <Helmet>
                <title>Trabook | Tour</title>
                <meta name='description' content='Agencia de viajes' />
                <link rel='canonical' href='dominio.com'></link>
                <meta name='description' content='Agencia de viajes' />
            </Helmet>
            <Navbar/>
            <div className="pt-28">
            Tour
            </div>
            <Footer/>
        </Layout>
    )
}

export default Tour