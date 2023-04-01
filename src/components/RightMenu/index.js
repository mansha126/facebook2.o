import clsx from "clsx";
import { Avatar, Tooltip } from "..";
import CircleIcon from "../CircleIcon";
import avatar from "../../assets/profile.jpg";
function RightMenu({ menus }) {
  const row = "flex items-center";
  return (
    <div className={clsx(row, "gap-x-2")}>
      {menus.map((menu) => (
        <CircleIcon key={`menu-${menu.id}`} {...menu} />
      ))}
      <Tooltip title="Account">
        <Avatar src={avatar} />
      </Tooltip>
    </div>
  );
}

export default RightMenu;
