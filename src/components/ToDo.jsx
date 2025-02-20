import useCategory from "../hooks/useCategory";

const ToDo = () => {
  const [category] = useCategory();

  return (
    <div>
      <h3>To-Do</h3>
      <div>
        {category
          ?.filter((item) => item.category === "To-Do")
          ?.map((item) => (
            <div>Hi</div>
          ))}
      </div>
    </div>
  );
};

export default ToDo;
