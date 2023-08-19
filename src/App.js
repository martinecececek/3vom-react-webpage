import { BrowserRouter, Routes, Route } from "react-router-dom";
// import public pages
import HomePage from "./page/public/HomePage";
import AboutUsPage from "./page/public/AboutPage";
import ContactPage from "./page/public/ContactPage";
import EquipmentPage from "./page/public/EquipmentPage";
import ProgramPage from "./page/public/ProgramPage";
import GalleryPage from "./page/public/GalleryPage";
// import administrator pages
import AdministratorPage from "./page/private/AdministratorPage";
import GalleryEditPage from "./page/private/GalleryEditPage";
import GalleryAddPage from "./page/private/GalleryAddPage";
import ProgramEditPage from "./page/private/ProgramEditPage";
import ProgramAddPage from "./page/private/ProgramAddPage";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               {/* route to index page */}
               <Route index element={<HomePage />} />
               {/* other public pages */}
               <Route path="/domu" element={<HomePage />} />
               <Route path="/onas" element={<AboutUsPage />} />
               <Route path="/kontakty" element={<ContactPage />} />
               <Route path="/galerie" element={<GalleryPage />} />
               <Route path="/program" element={<ProgramPage />} />
               <Route path="/vybaveni" element={<EquipmentPage />} />
               {/* routing to the administrator pages */}
               <Route path="admin" element={<AdministratorPage />} />
               <Route path="admin/add-gallery" element={<GalleryAddPage />} />
               <Route path="admin/edit-gallery" element={<GalleryEditPage />} />
               <Route path="admin/add-program" element={<ProgramAddPage />} />
               <Route path="admin/edit-program" element={<ProgramEditPage />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
