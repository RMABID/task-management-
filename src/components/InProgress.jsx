import useCategory from "../hooks/useCategory";

const InProgress = () => {
  const [category] = useCategory();

  return (
    <div>
      <h3>In Progress</h3>
      <div>
        {category
          ?.filter((item) => item.category === "In Progress")
          ?.map((item) => (
            <div>Hi</div>
          ))}
      </div>
    </div>
  );
};

export default InProgress;
