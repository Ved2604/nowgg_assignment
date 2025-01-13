import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton"; // Import the skeleton loader
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton styles
import { UserApiResponse, Profile } from "@/types/profile.types";

const ExploreGrid = ({ searchTerm }: { searchTerm: string }) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchUsers = async () => {
    try {
      setLoading(true); // Show loader while fetching
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
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const filteredProfiles = profiles.filter((profile) => {
    const fullName = `${profile.name.first} ${profile.name.last}`.toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      profile.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.location.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  useEffect(() => {
    if (profiles.length === 0) {
      fetchUsers();
    }
  }, [profiles]);

  return (
    <>
      {loading && profiles.length === 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 sm:px-8 lg:px-16 xl:px-32 mt-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="p-4">
              <Skeleton height={200} /> {/* Skeleton block for profile */}
              <Skeleton height={20} width="80%" className="mt-2" />
              <Skeleton height={20} width="60%" className="mt-2" />
            </div>
          ))}
        </div>
      )}
      <InfiniteScroll
        dataLength={filteredProfiles.length}
        next={fetchUsers}
        hasMore={hasMore}
        loader={
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 sm:px-8 lg:px-16 xl:px-32 mt-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="p-4">
                <Skeleton height={200} />
                <Skeleton height={20} width="80%" className="mt-2" />
                <Skeleton height={20} width="60%" className="mt-2" />
              </div>
            ))}
          </div>
        }
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 sm:px-8 lg:px-16 xl:px-32 mt-8"
      >
        {filteredProfiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default ExploreGrid;
