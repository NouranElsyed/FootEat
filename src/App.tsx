import { Routes, Route, NavLink } from "react-router-dom";
import bgImg from "../public/bgImg.jpg";
import MainPage from "./components/Main Page/MainPage";
import { Header } from "./components/Header/Header";
import { useState } from "react";
// import { Link as ScrollLink } from "react-scroll";
import { Modal } from "./components/ui/Modal";
import Menu from "./components/MenuPage/Menu";
import "../public/icon/style.css"
import ContactPage from "./components/ContactPage/ContactPage";
import Meals from "./components/meal/meal";
function App() {
  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const navList = [
    { name: "Home", href: "home", path: "/" },
    { name: "Menu", href: "menu", path: "/menu" },
    { name: "Contact", href: "contact", path: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

 

  return (
    <div style={bgStyle} className="min-h-screen flex flex-col">
      <div style={bgStyle} className="min-h-screen flex flex-col">
          <Header openModal={openModal} />
        <div className="bg-white/50 backdrop-blur-3xl flex-grow">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/meals/:id" element={<Meals />} />
          </Routes>
          <Modal closeModal={closeModal} isOpen={isOpen} openModal={openModal}>
            <ul className="dark:text-white">
              {navList.map((item, index) => (
                     <li key={index} 
                     className="border-b border-b-zinc-200 my-3 pb-3 flex items-center justify-center"
                     >
                     <NavLink
                       className={({ isActive }) =>
                         `cursor-pointer ${
                           isActive ? "text-orange-600 " : "text-orange-800"
                         }`
                       }
                       to={item.path}
                       onClick={() => {
                        closeModal(); 
                      }}
                     >
                       {item.name}
                     </NavLink>
                   </li>
              ))}
            </ul>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
