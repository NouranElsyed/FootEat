import Card from "./card";
import meals from "../../../Data/meal.json";

const Main = () => {
  return (
    <div className="w-1/2 md:w-3/4 mx-auto flex flex-col justify-center my-30 md:my-0 md:h-screen">
      <h3 className="text-5xl font-semibold text-center mb-3">Top meals</h3>
    <p className="text-center mb-10 text-gray-700">our top list</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 justify-center">
        {meals.filter(meal => meal.top).map((meals, index) => (
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
  );
};

export default Main;
