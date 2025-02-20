import useCategory from "../hooks/useCategory";
import TaskCard from "./TaskCard";

const ToDo = () => {
  const [category, refetch] = useCategory();

  return (
    <div className="flex flex-col items-start my-4">
      <h3>To-Do</h3>
      <div className="grid grid-cols-1 items-center gap-4">
        {category
          ?.filter((item) => item.category === "To-Do")
          ?.map((item, index) => (
            <TaskCard refetch={refetch} key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ToDo;
