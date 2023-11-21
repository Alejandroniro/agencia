import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet-async';
import Layout from "../../hocs/layouts/Layout";
import Navbar from "../../components/navigation/Navbar";
import Header from "components/home/Header";
import Incentives from "components/home/Incentives";
import DealSection from "components/home/DealsSection";
import VacationPlan from "components/home/vacationPlan";
import AboutUs from "components/home/aboutUs";
import BlogSection from "components/home/BlogSection";
import CTA from "components/home/CTA";
import Footer from "../../components/navigation/Footer";
import { get_abouts } from "redux/actions/about/abouts";
import { get_blogs } from "redux/actions/blog/blog";
import { get_dealSections } from "redux/actions/dealSection/dealSections";
import { get_incentives } from "redux/actions/incentive/incentives";
import { get_vacationPlans } from "redux/actions/vacationPlans/vacationPlans";

function Home({
    get_abouts,
    get_blogs,
    get_dealSections,
    get_incentives,
    get_vacationPlans,
    abouts,
    blogs,
    dealSections,
    incentives,
    vacationPlans,
}){
    useEffect(()=>{
        get_abouts();
        get_blogs();
        get_dealSections();
        get_incentives();
        get_vacationPlans();
    },[])

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
                <Incentives incentives={incentives&&incentives}/>
                <DealSection dealSections={dealSections&&dealSections}/>
                <VacationPlan vacationPlans={vacationPlans&&vacationPlans}/>
                <AboutUs abouts={abouts&&abouts}/>
                <BlogSection blogs={blogs&&blogs}/>
                <CTA/>
            </div>
            <Footer/>
        </Layout>
    )
}
const mapStateToProps=state=>({
    abouts: state.abouts.abouts,
    blogs: state.blogs.blogs,
    dealSections: state.dealSections.dealSections,
    incentives: state.incentives.incentives,
    vacationPlans: state.vacationPlans.vacationPlans
})
export default connect(mapStateToProps,{
    get_abouts,
    get_blogs,
    get_dealSections,
    get_incentives,
    get_vacationPlans
}) (Home)