import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructors = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
      queryKey: ["isInstructor", user?.email],
      enabled: !!user?.email && !!localStorage.getItem("access-token"),
      queryFn: async () => {
        const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
        return res.data.admin;
      },
    });
    console.log(isInstructor, "from useAdmin");
    return [isInstructor, isInstructorLoading];
};

export default useInstructors;