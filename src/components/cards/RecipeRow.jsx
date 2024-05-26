import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
export default function RecipeRow({ recipe,onDelete }) {

  const {id}=recipe;
  const handleDelete=()=>{
    // const data = axios.delete(`http://localhost:3000/recipes/${id}`);
    // if(data?.status === 200){
     
    //   onDelete(data.id)
    // }

    fetch(`http://localhost:3000/recipes/${id}`)
    .then(res=>res.json())
    .then(data=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          onDelete(id)
        }
      });
    })

  }

  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/edit-recipe/${recipe?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
}
