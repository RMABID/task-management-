import useCategory from "../hooks/useCategory";

const Done = () => {
  const [category] = useCategory();

  return (
    <div>
      <h3>In Progress</h3>
      <div>
        {category
          ?.filter((item) => item.category === "Done")
          ?.map((item) => (
            <div>Hi</div>
          ))}
      </div>
    </div>
  );
};

export default Done;
