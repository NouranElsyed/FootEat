import { useParams } from "react-router-dom";
import meals from "../../Data/meal.json"; 
import "./index.css"
  
  
const Meals = () => {
  const { id } = useParams(); 

  
  const meal = meals.find((meal) => meal.id === Number(id));

  
  if (!meal) {
    return <h2 className="text-center text-red-600 text-2xl">Meal not found!</h2>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-center md:items-center mt-30 md:mt-0  p-10 min-h-screen gap-2 md:gap-20">
      <img src={meal.image} alt={meal["meal-Name"]} className="w-80 h-80 rounded-lg shadow-lg" />
     <div className="flex flex-col"> <h2 className=" text-orange-800  text-4xl font-bold mt-5">{meal["meal-Name"]}</h2>
      <p className="text-lg text-gray-700 my-3">{meal.description}</p>
      <div className="flex gap-2  items-center text-xl"> <span className=" text-green-700">$</span> <span>{meal.price}</span></div>
      <div className="flex gap-1   items-center"> <span className="icon-star text-amber-400 text-xl"></span><span className="text-lg">{meal.star} Stars</span> </div>
      </div>

    </div>
  );
};

export default Meals;
