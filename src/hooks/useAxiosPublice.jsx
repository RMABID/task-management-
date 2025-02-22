import axios from "axios";

const axiosPublice = axios.create({
  baseURL: "https://job-task-sever-five.vercel.app",
});

const useAxiosPublice = () => {
  return axiosPublice;
};

export default useAxiosPublice;
