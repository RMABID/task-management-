import { CiTrash } from "react-icons/ci";
import useAxiosPublice from "../hooks/useAxiosPublice";

const TaskCard = ({ item, refetch }) => {
  const axiosPublice = useAxiosPublice();
  const { task_title, _id, description } = item;
  const hadledelete = async (id) => {
    try {
      await axiosPublice.delete(`/task/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between border p-4 rounded-xl gap-12">
      <div>
        <h3>{task_title}</h3>
        <p>{description}</p>
      </div>
      <div className="grid grid-cols-1 items-center gap-4">
        <button className="btn">x</button>
        <button onClick={() => hadledelete(_id)} className="btn text-red-500">
          <CiTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
