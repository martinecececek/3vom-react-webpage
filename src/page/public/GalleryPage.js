import { useState, useEffect, React } from "react";
// import universal component's for page
import PageHeader from "../../components/public/universal/PageHeader/pageHeader";
import PageFooter from "../../components/public/universal/PageFooter/pageFooter";
// import universal page css
import "./css/universal.css";
// import page content
import Post from "../../components/public/EquipmentComponent-EquipmentPage/equipmentComponent";

const GalleryPage = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch("http://localhost:8080/blogposts")
         .then((res) => res.json())
         .then((data) => setData(data))
         .catch((err) => console.log(err));
   }, []);

   return (
      <>
         <div className="Page">
            <PageHeader />
            <div className="Page-content">
               <ul className="content-wrapper">
                  {data.map((post, postIndex) => (
                     <li className="program-post" key={postIndex}>
                        <Post
                           title={post.title}
                           description={post.description}
                           date={post.date}
                           location={post.location}
                           images={post.images}
                        />
                     </li>
                  ))}
               </ul>
            </div>
            <PageFooter />
         </div>
      </>
   );
};

export default GalleryPage;
