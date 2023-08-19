import React from "react";
// import universal component's for page
import PageHeader from "../../components/public/universal/PageHeader/pageHeader";
import PageFooter from "../../components/public/universal/PageFooter/pageFooter";
// import universal page css
import "./css/universal.css";
// import page content
import Content from "../../components/public/AboutUs-AboutUsPage/aboutUs";

const AboutPage = () => {
   return (
      <>
         <div className="Page">
            <PageHeader />
            <div className="Page-content">
               <Content />
            </div>
            <PageFooter />
         </div>
      </>
   );
};
export default AboutPage;
