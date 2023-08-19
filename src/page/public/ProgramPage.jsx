import { useState, useEffect } from "react";
// import universal component's for page
import PageHeader from "../../components/public/universal/PageHeader/pageHeader";
import PageFooter from "../../components/public/universal/PageFooter/pageFooter";
// import universal page css
import "./css/universal.css";
// import content of page
import Post from "../../components/public/galleryPost-GalleryPage/galleryPost";

const ProgramPage = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      // Fetch data from your backend API
      data
         .get("http://localhost:8080/program_post")
         .then((response) => {
            setData(response.data);
         })
         .catch((error) => {
            console.log("Error fetching data:", error);
         });
   }, []);

   const initialEventLimit = 5;
   const [showAllEvents, setShowAllEvents] = useState(false);
   const [displayedEvents, setDisplayedEvents] = useState(
      data.slice(0, initialEventLimit)
   );

   const handleShowMoreClick = () => {
      setShowAllEvents(true);
      setDisplayedEvents(data);
   };

   return (
      <>
         <div className="Page">
            <PageHeader />
            <div className="Page-content">
               {displayedEvents.map((post, postIndex) => (
                  <Post
                     key={postIndex}
                     title={post.title}
                     description={post.description}
                     date={post.date}
                     location={post.location}
                  />
               ))}
            </div>
            {!showAllEvents && data.length > initialEventLimit && (
               <div className="show-more-btn-container">
                  <button
                     onClick={handleShowMoreClick}
                     className="show-more-btn"
                  >
                     Více
                  </button>
               </div>
            )}
            <PageFooter />
         </div>
      </>
   );
}

export default ProgramPage