import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/svg/home-icon.svg";
import { ReactComponent as AccountIcon } from "../../assets/svg/account-icon.svg";
import { ReactComponent as WalletIcon } from "../../assets/svg/wallet-icon.svg";
import { ReactComponent as BuySellIcon } from "../../assets/svg/buy-sell-icon.svg";
import { ReactComponent as MarketIcon } from "../../assets/svg/market-icon.svg";
import { ReactComponent as SettingIcon } from "../../assets/svg/settings-icon.svg";
import { ReactComponent as AdPagesIcon } from "../../assets/svg/pages-icon.svg";

import styles from "./sidebar.module.css";

const Sidebar = () => {
  const [links, setLinks] = useState([
    {
      name: "Home",
      icon: HomeIcon,
    },
    {
      name: "Account",
      icon: AccountIcon,
    },
    {
      name: "Wallets",
      icon: WalletIcon,
    },
    {
      name: "Buy/Sell",
      icon: BuySellIcon,
    },
    {
      name: "Markets",
      icon: MarketIcon,
    },
    {
      name: "Settings",
      icon: SettingIcon,
    },
    {
      name: "Ad Pages",
      icon: AdPagesIcon,
    },
  ]);

  const { sidebar, sidebarContent, logo, listMenu, listMenuItem } = styles;

  return (
    <aside className={sidebar}>
      <div className={sidebarContent}>
        <Logo className={logo} />

        <ul className={listMenu}>
          {links.map((link, idx) => {
            return (
              <li key={idx} className={listMenuItem}>
                <a href="#">
                  <span>
                    <link.icon />
                  </span>
                  <span>{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
