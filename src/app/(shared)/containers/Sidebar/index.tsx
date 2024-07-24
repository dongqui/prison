import Link from "next/link";

import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

import Avatar from "@/(shared)/components/Avatar";
import GhostButton from "@/(shared)/components/Buttons/GhostButton";

export default function SideBar() {
  return (
    <aside className="border-r border-gray-10">
      <nav className="flex flex-col items-center gap-40 w-20 pt-10 pb-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="23"
          viewBox="0 0 40 23"
          fill="none"
        >
          <g clipPath="url(#clip0_2_3)">
            <path
              d="M22.5624 11.5002C22.5624 17.8514 17.5116 23 11.2814 23C5.05122 23 0 17.8502 0 11.5002C0 5.15017 5.05083 0 11.2814 0C17.512 0 22.5624 5.14901 22.5624 11.5002ZM34.9381 11.5002C34.9381 17.4785 32.4126 22.3267 29.2974 22.3267C26.1821 22.3267 23.6567 17.4785 23.6567 11.5002C23.6567 5.52192 26.1817 0.673652 29.297 0.673652C32.4123 0.673652 34.9377 5.52037 34.9377 11.5002H34.9381ZM40 11.5002C40 16.8553 39.1119 21.1991 38.0162 21.1991C36.9204 21.1991 36.0327 16.8564 36.0327 11.5002C36.0327 6.14397 36.9207 1.80132 38.0162 1.80132C39.1116 1.80132 40 6.14358 40 11.5002Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_3">
              <rect width="40" height="23" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div className="flex flex-col items-center gap-6">
          <Link href={`/`}>
            <HomeIcon width={24} height={24} />
          </Link>

          <GhostButton>
            <MagnifyingGlassIcon width={24} height={24} />
          </GhostButton>

          <GhostButton>
            <BellIcon width={24} height={24} />
          </GhostButton>

          <div className="w-6 h-px bg-gray-10"></div>
          <Link href={`/write`}>
            <PencilSquareIcon width={24} height={24} />
          </Link>
        </div>
        <Link href={`/profile/id`}>
          <Avatar />
        </Link>
      </nav>
    </aside>
  );
}
