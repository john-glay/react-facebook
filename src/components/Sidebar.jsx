import React from "react";
import SidebarRow from "./SidebarRow";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  CalendarIcon,
  ClockIcon,
  ComputerDesktopIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow
        src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/271709406_1461870397542491_1920538670295261720_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7W2PnHxwyI4AX9rL0bU&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT9fCmXd6AMtXTWV_SC5UbM8u_CPQ-AGb1qk-cU5SDJ8ww&oe=63231467"
        title="profile"
      />

      <SidebarRow Icon={ComputerDesktopIcon} title="Watch" />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}
