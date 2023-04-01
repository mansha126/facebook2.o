import React, { Component } from "react";
import Logo from "../../assets/logo.png";
import Input from "../Input";
import { HiOutlineSearch } from "react-icons/hi";
import clsx from "clsx";
import { RightMenu, TabBar } from "../";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoStorefrontOutline, IoNotificationsSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { CgGames } from "react-icons/cg";
import { BsFillGrid3X3GapFill, BsMessenger } from "react-icons/bs";

const tabs = [
  { id: "home", title: "Home", Icon: AiFillHome },
  { id: "watch", title: "Watch", Icon: MdOutlineOndemandVideo },
  { id: "marketplace", title: "Marketplace", Icon: IoStorefrontOutline },
  { id: "groups", title: "Groups", Icon: HiUserGroup },
  { id: "gaming", title: "Gaming", Icon: CgGames },
];
const rightMenu = [
  {
    id: "create",
    title: "Create",
    Icon: AiOutlinePlus,
    className: "md:hidden",
  },
  {
    id: "menu",
    title: "Menu",
    Icon: BsFillGrid3X3GapFill,
    className: "hidden md:block",
  },
  {
    id: "messenger",
    title: "Messenger",
    Icon: BsMessenger,
  },
  {
    id: "notification",
    title: "Notification",
    Icon: IoNotificationsSharp,
  },
];
const row = "flex items-center";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: tabs[0],
    };
  }
  render() {
    return (
      <div
        className={`h-14 shadow-md bg-white justify-between px-4 sticky top-0 ${row}`}
      >
        {/* "h-12 shadow-md bg-white flex items-center justify-between px-4" +`${row}` ===> use clsx or backtick like this*/}
        {/*Left Column */}
        <div className={clsx(row)}>
          <img src={Logo} alt="logo" width="72px" />
          <div
            className={clsx(
              "bg-[#f0f2f5] rounded-full p-3 h-10 lg:w-72 lg:px-2",
              row
            )}
          >
            <HiOutlineSearch size={20} />
            <Input
              className="hidden lg:block bg-transparent outline-none border-none py-0 "
              placeholder="Search Facebook"
            />
          </div>
        </div>

        {/*Mid Column */}
        <TabBar
          tabs={tabs}
          selected={this.state.selectedTab}
          onTabClick={(tab) => this.setState({ selectedTab: tab })}
          className="hidden md:flex min-w-[300px] lg:min-w-[680px]"
        />
        {/*Right Column */}
        <RightMenu menus={rightMenu} />
      </div>
    );
  }
}
