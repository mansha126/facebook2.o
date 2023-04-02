import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  Header,
  PostController,
  SideBarRow,
  SidebarHeadingRow,
  StoryController,
} from "../../components";
import avatar from "../../assets/profile.jpg";

import {
  AdsManager,
  ClimateScienceCentre,
  CrisisResponse,
  Events,
  Favourites,
  Friends,
  Fundraisers,
  GamingVideo,
  Groups,
  LiveVideos,
  MarketPlace,
  Memories,
  Messenger,
  MessengerKids,
  MetaBusinessSuite,
  MostRecent,
  Pages,
  PlayGames,
  RecentAdActivity,
  Saved,
  Watch,
} from "../../assets/facebookIcons";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const leftSideBarMenus = [
  {
    id: "profile",
    title: "Mansha Tiwari",
    img: avatar,
    as: "profile",
  },
  {
    id: "friends",
    title: "Friends",
    img: Friends,
    as: "menu",
  },
  {
    id: "mostRecent",
    title: "MostRecent",
    img: MostRecent,
    as: "menu",
  },
  {
    id: "groups",
    title: "Groups",
    img: Groups,
    as: "menu",
  },
  {
    id: "marketPlace",
    title: "MarketPlace",
    img: MarketPlace,
    as: "menu",
  },
  {
    id: "watch",
    title: "Watch",
    img: Watch,
    as: "menu",
  },
  {
    id: "adsManager",
    title: "Ads Manager",
    img: AdsManager,
    as: "menu",
  },
  {
    id: "climateScienceCentre",
    title: "Climate Science Centre",
    img: ClimateScienceCentre,
    as: "menu",
  },
  {
    id: "crisisResponse",
    title: "Crisis Response",
    img: CrisisResponse,
    as: "menu",
  },
  {
    id: "events",
    title: "Events",
    img: Events,
    as: "menu",
  },
  {
    id: "favourites",
    title: "Favourites",
    img: Favourites,
    as: "menu",
  },
  {
    id: "fundraisers",
    title: "Fundraisers",
    img: Fundraisers,
    as: "menu",
  },
  {
    id: "gamingVideo",
    title: "Gaming Video",
    img: GamingVideo,
    as: "menu",
  },
  {
    id: "live Videos",
    title: "Live Videos",
    img: LiveVideos,
    as: "menu",
  },
  {
    id: "memories",
    title: "Memories",
    img: Memories,
    as: "menu",
  },
  {
    id: "messenger",
    title: "Messenger",
    img: Messenger,
    as: "menu",
  },
  {
    id: "messengerKids",
    title: "Messenger Kids",
    img: MessengerKids,
    as: "menu",
  },
  {
    id: "metaBusinessSuite",
    title: "Meta Business Suite",
    img: MetaBusinessSuite,
    as: "menu",
  },
  {
    id: "pages",
    title: "Pages",
    img: Pages,
    as: "menu",
  },
  {
    id: "playGames",
    title: "Play games",
    img: PlayGames,
    as: "menu",
  },
  {
    id: "recentAdActivity",
    title: "Recent ad activity",
    img: RecentAdActivity,
    as: "menu",
  },
  {
    id: "saved",
    title: "Saved",
    img: Saved,
    as: "menu",
  },
];
const HomePage = () => {
  // const { user } = useAuth();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user]);

  return (
    <div className="h-screen w-full bg-[#f0f2f5]">
      <Header />
      <main
        className="px-3 pt-4 grid gap-x-24"
        style={{ gridTemplateColumns: "300px auto 300px" }}
      >
        {/* Left col */}
        <div className="overflow-y-scroll">
          {leftSideBarMenus.map((menu) => (
            <SideBarRow key={`left-side-menu-${menu.id}`} {...menu} />
          ))}
        </div>
        {/* Mid col */}
        <div className="grid justify-center">
          <div className="grid gap-y-5 w-[700px]">
            <StoryController />
            <PostController />
          </div>
        </div>
        {/* Right col */}
        <div className="overflow-y-scroll ">
          <SidebarHeadingRow title="Your Pages and profiles" />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
