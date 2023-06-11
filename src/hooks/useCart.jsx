import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["studentclasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure(
        `/studentclasses?email=${user?.email}`
      );
      console.log("res from axios", response.data);
      return response.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
