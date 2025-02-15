import { useNavigate } from "react-router-dom";

interface IProps {
  id: number; 
  index: number;
  stars: number;
  mealName: string;
  image: string;
  price: number;
  description: string;
}

const Card = ({ id, index, stars, mealName, image, price, description }: IProps) => {
  const navigate = useNavigate();

  return (
    <div
      key={index}
      onClick={() => navigate(`/meals/${id}`)} 
      className="cursor-pointer pt-10 px-10 pb-3 rounded-2xl bg-white/5 backdrop-blur-3xl flex flex-col items-center justify-center transition-all duration-800 hover:scale-105"
    >
      <img src={image} alt={mealName} className="rounded-2xl mb-5" />
      <h4 className="mb-2 font-medium">{mealName}</h4>
      <p className="text-gray-700 px-1 mb-5">
        {description.length > 50 ? description.slice(0, 50) + "..." : description}
      </p>
      <div className="flex justify-between w-full mb-2 font-semibold">
        <div className="flex gap-2 items-center">
          <span className="text-green-700">$</span> <span>{price}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span>{stars}</span>
          <span className="icon-star text-amber-400"></span>
        </div>
      </div>
    </div>
  );
};

export default Card;
