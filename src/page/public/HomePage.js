// import universal page components
// import universal component's for page
import PageHeader from "../../components/public/universal/PageHeader/pageHeader";
import PageFooter from "../../components/public/universal/PageFooter/pageFooter";
// import universal page css
import "./css/universal.css";
// import page content
import Component1 from "../../components/public/InfoComponent-MainPage/infoComponent";
import Component2 from "../../components/public/GalleryComponent-MainPage/galleryComponent";

const HomePage = () => {
   return (
      <>
         <div className="Page">
            <PageHeader />
            <div className="Page-content">
               <Component1 />
               <Component2 />
            </div>
            <PageFooter />
         </div>
      </>
   );
};

export default HomePage;
