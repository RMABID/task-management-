import AddTaskForm from "../components/AddTaskForm";
import Done from "../components/Done";
import InProgress from "../components/InProgress";
import ToDo from "../components/ToDo";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto">
      <AddTaskForm />
      <section className="flex w-8/12 mx-auto justify-between items-center gap-8 my-24">
        <ToDo />
        <InProgress />
        <Done />
      </section>
    </div>
  );
};

export default Home;
