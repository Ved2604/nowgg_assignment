import { Profile } from "@/types/profile.types";
import { useState, useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { adventurer } from "@dicebear/collection";
import { MessageSquareCodeIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  UserIcon,
  MapPinIcon,
  HomeIcon,
  PhoneIcon,
  MailIcon,
} from "lucide-react";

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
    <div className="w-full max-w-[280px] mx-auto overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg mt-5">
      {/* Image Container with Button */}
      <div className="relative">
        <div className="aspect-[3/2] w-full">
          <LazyImage
            src={avaatar}
            alt={`${profile.name.first} ${profile.name.last}`}
          />
        </div>
        <button className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-1.5 rounded-full bg-indigo-600 px-3 sm:px-4 py-1 sm:py-1.5 text-base sm:text-lg font-medium text-white hover:bg-indigo-700 mb-4">
          <MessageSquareCodeIcon className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="ml-1 sm:ml-2">Chat</span>
        </button>
        <Dialog>
          <DialogTrigger>
            <button className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-1.5 rounded-full bg-indigo-600 px-3 sm:px-4 py-1 sm:py-1.5 text-base sm:text-lg font-medium text-white hover:bg-indigo-700 mb-4">
              <MessageSquareCodeIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="ml-1 sm:ml-2">Chat</span>
            </button>
          </DialogTrigger>
          <DialogContent className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg border border-gray-200 shadow-lg p-4 sm:p-6 w-[90%] sm:w-full max-w-md mx-4 sm:mx-auto sm:mr-4">
            <div className="flex flex-col space-y-4 sm:space-y-6 text-left">
              <h3 className="text-lg sm:text-xl font-bold text-indigo-900 border-b pb-2">
                About {profile.name.first} {profile.name.last}
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-700">
                <div className="flex items-start space-x-2 sm:space-x-3 bg-indigo-50 p-2 sm:p-3 rounded-lg">
                  <UserIcon className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 mt-1" />
                  <p className="text-base sm:text-lg">
                    <span className="font-semibold">
                      {profile.name.title}. {profile.name.first}{" "}
                      {profile.name.last}
                    </span>{" "}
                    is a
                    <span className="font-medium text-indigo-600">
                      {" "}
                      {profile.dob.age} year old {profile.gender}
                    </span>
                  </p>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3 bg-gray-50 p-2 sm:p-3 rounded-lg">
                  <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 mt-1" />
                  <p className="text-base sm:text-lg">
                    From{" "}
                    <span className="font-medium text-indigo-600">
                      {profile.location.city}, {profile.location.country}
                    </span>
                  </p>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3 bg-indigo-50 p-2 sm:p-3 rounded-lg">
                  <HomeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 mt-1" />
                  <p className="text-base sm:text-lg">
                    Lives on {profile.location.street.name} in{" "}
                    {profile.location.state}
                  </p>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3 bg-gray-50 p-2 sm:p-3 rounded-lg">
                  <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 mt-1" />
                  <p className="text-base sm:text-lg">
                    Contact at{" "}
                    <span className="font-medium text-indigo-600">
                      {profile.phone}
                    </span>
                  </p>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3 bg-indigo-50 p-2 sm:p-3 rounded-lg">
                  <MailIcon className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 mt-1" />
                  <p className="text-base sm:text-lg">
                    Email:{" "}
                    <span className="font-medium text-indigo-600">
                      {profile.email}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Content below image */}
      <div className="p-3 sm:p-4 pt-2 sm:pt-3 mt-4">
        <h3 className="font-medium text-base sm:text-lg text-gray-900">
          {profile.name.first} {profile.name.last}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-gray-500 line-clamp-2">
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
        className="h-full w-full object-cover"
      />
    </div>
  );
};
