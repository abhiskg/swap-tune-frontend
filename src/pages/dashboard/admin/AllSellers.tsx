import { useUsersData } from "../../../hooks/useUsersData";

const AllSellers = () => {
  const { data, isLoading } = useUsersData("ab@gmail.com", "buyer");

  return <div>All Seller</div>;
};

export default AllSellers;
