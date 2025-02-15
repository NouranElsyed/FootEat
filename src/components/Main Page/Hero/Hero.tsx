import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import heroImage from "/hero.png";
import "./index.css";

const Hero = () => {
  const navigate = useNavigate();

  const downloadMenu = () => {
    const pdfUrl = "/menu/FoodEat.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Menu.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container pt-50 md:pt-40 flex flex-col md:flex-row space-y-20 md:space-y-0 items-center md:h-screen ">
      <div className="flex flex-col md:w-1/2">
        <h3 className="text-4xl lg:text-6xl font-semibold ">
          Delicious Food Is Waiting For You
        </h3>
        <p className="my-7 ">
          Welcome to La Tavola where flavors from around the world come
          together! 🍽️✨ Experience a diverse selection of international dishes
          crafted with passion and the finest ingredients.
        </p>

        <div className="flex justify-center space-x-5 lg:justify-start">
          <Button usage="Primary" onClick={downloadMenu}>
            Food menu
          </Button>
          <Button
            usage="Secondary"
            onClick={() => {
              console.log("Navigating to /contact");
              navigate("/contact");
            }}
          >
            Book table
          </Button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end items-center md:w-1/2">
        <img className="w-2/3 spin" src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
