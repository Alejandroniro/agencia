import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"
import { Helmet } from 'react-helmet-async'

function Blog() {
    return (
        <Layout>
            <Helmet>
                <title>Trabook | Blog</title>
                <meta name='description' content='Agencia de viajes' />
                <link rel='canonical' href='dominio.com'></link>
                <meta name='description' content='Agencia de viajes' />
            </Helmet>
            <Navbar />
            <div className="pt-28">
                Blog
            </div>
            <Footer />
        </Layout>
    )
}

export default Blog