import { useEffect } from "react";
import Banner from "../components/home/Banner";
import { useState } from "react";
import RecepiCard from "../components/cards/RecepiCard";
import CategoryCard from "../components/cards/CategoryCard";

export default function Home() {
  const [recipes, setRescipes] = useState();
  const [categoris, setCategories] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => setRescipes(data));

    

    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log("hi");
  return (
    <div>
      <Banner />

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center italic bg-orange-500 text-white w-[400px] mx-auto rounded pb-1">Our Recipe Categories </h1>
        <div className="grid grid-cols-4 gap-6">
          {categoris?.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
        </div>
      </div>
      <div className="mx-16 mb-11">
        <h1 className="text-4xl my-20 italic bg-orange-500 text-white w-[400px] mx-auto rounded pb-1 text-center">Our Newest Recipes </h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6">
          {recipes
            ?.reverse()
            ?.slice(0, 4)
            ?.map((recipe) => (
              <RecepiCard key={recipe?.id} recipe={recipe} />
            ))}
        </div>
      </div>
    </div>
  );
}
