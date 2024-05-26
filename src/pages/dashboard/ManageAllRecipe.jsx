import axios from "axios";
import { useEffect, useState } from "react";
import RecipeRow from "../../components/cards/RecipeRow";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function ManageAllRecipe() {
  const [recipes, setRescipes] = useState();
  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/recipes");
      if (data?.status === 200) {
        setRescipes(data?.data);
      }
    }
    load();
  }, []);

  

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/recipes/${id}`)
          .then(() => {
            const remaining = recipes.filter(recipe => recipe.id !== id);
            setRescipes(remaining);
            Swal.fire({
              title: 'Deleted!',
              text: 'Your recipe has been deleted.',
              icon: 'success'
            });
          })
          .catch(() => {
            toast.error('Failed to delete recipe');
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto w-full px-16 mt-10">
      <h1 className="text-3xl mb-4">Mange All Recipe</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recipes?.map((recipe) => (
            <RecipeRow key={recipe?.id} handleDelete={handleDelete} recipe={recipe} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
