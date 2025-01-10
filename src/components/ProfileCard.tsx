import { Profile } from "@/types/profile.types";

const ProfileCard = ({ profile }: { profile: Profile }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex flex-col items-center">
        <img
          src={profile.picture.large}
          alt={`${profile.name.first} ${profile.name.last}`}
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-lg font-bold">
          {profile.name.title} {profile.name.first} {profile.name.last}
        </h2>
        <p className="text-gray-600">
          {profile.location.city}, {profile.location.country}
        </p>
        <p className="text-gray-500 text-sm">{profile.email}</p>
        <p className="text-gray-500 text-sm mt-2">{profile.phone}</p>
        <p className="text-gray-500 text-sm">{profile.cell}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
