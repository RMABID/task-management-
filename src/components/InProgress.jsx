import useCategory from "../hooks/useCategory";
import TaskCard from "./TaskCard";

const InProgress = () => {
  const [category, refetch] = useCategory();

  return (
    <div className="flex flex-col items-start my-4">
      <h3>In Progress</h3>
      <div>
        {category
          ?.filter((item) => item.category === "In Progress")
          ?.map((item, index) => (
            <TaskCard refetch={refetch} key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default InProgress;
