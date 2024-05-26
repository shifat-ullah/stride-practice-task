import { useLoaderData } from "react-router-dom";


const RecipeDetails = () => {
    const recipeData = useLoaderData();
    console.log(recipeData)

    return (
        <div className="card w-[700px] mx-auto mt-20 mb-20 glass">
            <figure><img src={recipeData?.photoUrl
            } alt="car!" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{recipeData?.title}</h2>
                <p>{recipeData.description}</p>
                <div className="card-actions justify-end">
                    <div className="btn btn-outline">{recipeData.category}</div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;