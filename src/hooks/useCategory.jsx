import { useQuery } from "@tanstack/react-query";
import useAxiosPublice from "./useAxiosPublice";

const useCategory = () => {
  const axiosPublice = useAxiosPublice();
  const {
    data: category,
    refetch,
    isLoading,
  } = useQuery({
    queryFn: ["category"],
    queryKey: async () => {
      const data = await axiosPublice("/all-task");
      return data;
    },
  });
  return [category, refetch, isLoading];
};

export default useCategory;
