import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faGear,
  faCoins,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/Button/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu/Menu";
import config from "~/config";

import classNames from "classnames/bind";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons/Icons";
import Image from "~/components/Image/Image";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;

  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
      title: "English",
      children: {
        title: "Language",
        data: [
          {
            type: "language",
            code: "en",
            title: "English",
          },
          {
            type: "language",
            code: "vi",
            title: "Tiếng Việt",
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
      title: "Feedback and help",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
      title: "Keyboard shortcuts",
      to: "",
    },
  ];

  //Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        //handle change
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
      title: "view profile",
      to: "/@gacon",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo-link")}>
          <img src={images.logo} alt="TikTok" />
        </Link>

        {/* Search */}
        <Search />

        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy
                offset={(12, 8)}
                delay={200}
                content="Upload video"
                placement="bottom"
              >
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy
                offset={(12, 8)}
                delay={200}
                content="Message"
                placement="bottom"
              >
                <button className={cx("action-btn")}>
                  <MessageIcon></MessageIcon>
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                alt="NTA"
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cc4ffee6a167883e21a7cf4141a5fc45.jpeg?lk3s=a5d48078&x-expires=1704348000&x-signature=I0o6N22%2BlACuQQKZ6X98wjWIr%2B8%3D"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
