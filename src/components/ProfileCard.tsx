import { Profile } from "@/types/profile.types";
import { MessageCircle } from "lucide-react";
import { useState, useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { adventurer } from "@dicebear/collection";
import { MessageSquareCodeIcon } from "lucide-react";

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  const avaatar = useMemo(
    () =>
      createAvatar(adventurer, {
        seed: profile.name.first + profile.name.last,
        backgroundType: ["gradientLinear", "solid"],
        backgroundColor: ["b6e3f4", "c0aede", "d1d4f9"],
        size: 96,
      }).toDataUri(),
    [profile.name.first, profile.name.last]
  );

  return (
    <div className="w-64 overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg mt-5">
      {/* Image Container with Button */}
      <div className="relative">
        <div className="aspect-[3/] w-full">
          <LazyImage
            src={avaatar}
            alt={`${profile.name.first} ${profile.name.last}`}
          />
        </div>

        <button className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 mb-4">
          <MessageSquareCodeIcon className="h-4 w-4" />
          <span>Chat</span>
        </button>
      </div>

      {/* Content below image */}
      <div className="p-4 pt-3 mt-4">
        <h3 className="font-medium text-gray-900">
          {profile.name.first} {profile.name.last}
        </h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {`${profile.name.first} is a creative and dynamic individual from ${profile.location.city}, passionate about connecting with others and sharing experiences.`}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;

const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover 
        }`}
      />
    </div>
  );
};
