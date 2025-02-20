import { Link } from "react-router-dom";
import AddTaskForm from "../components/AddTaskForm";
import Done from "../components/Done";
import InProgress from "../components/InProgress";
import ToDo from "../components/ToDo";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex justify-end my-2 gap-4">
        {user ? (
          <button className="btn" onClick={logOut}>
            Log out
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <Link to={"/login"} className="btn">
              Login
            </Link>
            <Link to={"/register"} className="btn">
              Register
            </Link>
          </div>
        )}
      </div>
      <AddTaskForm />
      <section className="md:flex  mx-auto justify-between items-center gap-8 my-24">
        <ToDo />
        <InProgress />
        <Done />
      </section>
    </div>
  );
};

export default Home;
