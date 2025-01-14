import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

export default function useCart() {
  const axioxSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const result = await axioxSecure.get(`/carts?email=${user.email}`);
      return result.data;
    },
  });
  return [cart, refetch];
}
