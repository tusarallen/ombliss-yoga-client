import { useQuery } from "@tanstack/react-query";

const useManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://om-bliss-yoga-server.vercel.app/users");
    return res.json();
  });

  return [users, refetch];
};

export default useManageUsers;
