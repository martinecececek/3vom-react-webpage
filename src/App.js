import { BrowserRouter, Route, Routes } from "react-router-dom";
// import public pages
import HomePage from "./page/public/HomePage";
import AboutPage from "./page/public/AboutPage";
import ContactPage from "./page/public/ContactPage";
import GalleryPage from "./page/public/GalleryPage";
import ProgramPage from "./page/public/ProgramPage";
import EquipmentPage from "./page/public/EquipmentPage"; //TODO: add equipment page
//import admin page
import AdministratorPage from "./page/private/AdministratorPage";
import GalleryAdd from "./page/private/GalleryAddPage";
import GalleryEdit from "./page/private/GalleryEditPage";
import ProgramAdd from "./page/private/ProgramAddPage";
import ProgramEdit from "./page/private/ProgramEditPage";
// import error page
import NoPage from "./page/noPage";

export default function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               {/* index page route */}
               <Route index element={<HomePage />} />
               {/* public page routes */}
               <Route path="/domu" element={<HomePage />} />
               <Route path="/onas" element={<AboutPage />} />
               <Route path="/kontakty" element={<ContactPage />} />
               <Route path="/galerie" element={<GalleryPage />} />
               <Route path="/program" element={<ProgramPage />} />
               <Route path="/vybaveni" element={<EquipmentPage />} />
               {/* admin pages routes */}
               <Route path="/admin" element={<AdministratorPage />} />
               <Route path="/admin/add-gallery" element={<GalleryAdd />} />
               <Route path="/admin/edit-gallery" element={<GalleryEdit />} />
               <Route path="/admin/add-program" element={<ProgramAdd />} />
               <Route path="/admin/edit-program" element={<ProgramEdit />} />
               {/* error page route*/}
               <Route path="/*" element={<NoPage />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}
