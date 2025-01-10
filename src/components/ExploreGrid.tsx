import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserApiResponse, Profile } from "@/types/profile.types";

const ExploreGrid = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const url = `https://randomuser.me/api/?page=${page}&results=36`;

  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const data: UserApiResponse = await response.json();
      if (data.results.length === 0) {
        setHasMore(false);
        return;
      } else {
        setProfiles([...profiles, ...data.results]);
        setPage(page + 1);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <InfiniteScroll
        dataLength={profiles.length}
        next={fetchUsers}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        className="grid grid-cols-4 gap-4 pl-32 mt-20"
      >
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default ExploreGrid;
