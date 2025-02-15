import Card from "../Main Page/Main/card"
import "./Menu.css"
import meals from "../../Data/meal.json";

const Menu = () => {
  return (
    <div id="menu" className="w-3/4 mx-auto flex flex-col justify-center items-center py-15  md:min-h-screen">
    <h2 className=" text-6xl font-semibold text-orange-800 my-15 ">Menu</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 justify-center">
        {meals.map((meals, index) => (
          <Card
            id={meals.id}
            index={index}
            stars={meals.star}
            mealName={meals["meal-Name"]}
            image={meals.image}
            price={meals.price}
            description={meals.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu