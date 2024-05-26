/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


export default function RecepiCard({ recipe }) {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img  src={recipe.photoUrl} alt="food" className="h-[200px] max-w-50" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe?.title}</h2>
        <h2 className="card-title">{recipe?.price}</h2>
        <p>
          {recipe?.description?.length > 30
            ? recipe?.description?.slice(0, 30)
            : recipe?.description}
        </p>
        <div className="card-actions items-center flex justify-between">
          <Link to={`/details/${recipe?.id}`}>
            <button className=" btn bg-orange-500 hover:bg-blue-500 hover:text-white text-white rounded">See Details</button>
          </Link>
          <div className="badge badge-outline">{recipe?.category}</div>
        </div>
      </div>
    </div>
  );
}
