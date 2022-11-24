import { useUsersData } from "../../../hooks/useUsersData";

const AllBuyers = () => {
  const { data, isLoading } = useUsersData("ab@gmail.com", "buyer");
  return <div>All Buyers</div>;
};

export default AllBuyers;
