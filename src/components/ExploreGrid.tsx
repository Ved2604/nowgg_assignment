import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserApiResponse, Profile } from "@/types/profile.types";

const ExploreGrid = ({ searchTerm }: { searchTerm: string }) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://randomuser.me/api/?page=${page}&results=20`
      );
      const data: UserApiResponse = await response.json();

      if (data.results.length === 0) {
        setHasMore(false); // No more data to load
        return;
      }

      setProfiles((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1); // Increment the page number for next fetch
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Filter the profiles based on the search term (filter only existing profiles)
  const filteredProfiles = profiles.filter((profile) => {
    const fullName = `${profile.name.first} ${profile.name.last}`.toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      profile.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.location.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  useEffect(() => {
    // Initially fetch users if the profiles array is empty
    if (profiles.length === 0) {
      fetchUsers();
    }
  }, [profiles]); // Fetch users once on initial load

  return (
    <InfiniteScroll
      dataLength={filteredProfiles.length}
      next={fetchUsers} // Continue fetching more users when scroll reaches the bottom
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      className="grid grid-cols-4 gap-1 pl-32 mt-20 pr-32"
    >
      {filteredProfiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </InfiniteScroll>
  );
};

export default ExploreGrid;
