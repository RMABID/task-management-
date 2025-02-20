const AddTaskForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const task_title = e.target.task_title.value;
    const description = e.target.description.value;
    const newTask = {
      task_title,
      description,
    };
    // try {
    //   await 
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div>
      <h1 className="text-3xl text-center">Your Task</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 font-Garamond md:grid-cols-2 font-raleway-font px-4 md:px-36 mt-8  gap-6"
      >
        <div>
          <label className="block text-lg font-medium mb-2">
            Product Name :
          </label>
          <input
            required
            type="text"
            name="task_title"
            placeholder="Enter your product name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-lg font-medium text-gray-700">
            Description :
          </label>
          <textarea
            rows={4}
            placeholder="please add Description"
            name="description"
            className="w-full  mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <button type="submit" className="btn ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
