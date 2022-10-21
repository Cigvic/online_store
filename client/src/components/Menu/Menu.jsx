import { useState, useContext } from "react";
import "./Menu.css";
import Container from "./../Container/Container";
import { Link } from "react-router-dom";
import Account from "../Account/Account";
import { Context } from "index";
import { observer } from "mobx-react-lite";
import authAvatar from "./assets/profile__avatar.jpg";
import unAuthAvatar from "./assets/unauth_user.svg";

// @ts-ignore
const Menu = observer(({ items }, ...props) => {
  const { user, basket } = useContext(Context);
  const [element, setElement] = useState([renderMenuItems(items)]),
    [isAccountMenuVisible, setIsAccountMenuVisible] = useState(false);

  function renderMenuItems(items) {
    return (
      <menu key="menu" className="Menu__list">
        {items.map((item, index) => {
          return (
            <li key={index + 1} className="Menu__item">
              <Link className="Menu__link" to={item.link}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </menu>
    );
  }

  function renderSearchInput() {
    return (
      <input
        type="text"
        className="search-input"
        key="1"
        placeholder="Search entiere store here..."
      />
    );
  }

  function renderProductCount() {
    if (basket.count) {
      return <div className="user-nav__basket-count">{basket.count}</div>;
    }
  }
  return (
    <div className="Menu">
      <Container className="default flex justify-space-between align-center">
        <div className="Menu__container">
          <Link to="/">
            <svg
              style={{ cursor: "pointer" }}
              width="34"
              height="41"
              viewBox="0 0 34 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0331 0.945374L0.296875 10.8637V23.0708L17.0331 32.9891L30.4588 25.3596V28.9836L17.0331 36.9946L0.296875 26.8855V31.2725L17.0331 41L33.7693 31.2725V19.0653L20.3435 26.8855V23.0708L33.7693 15.0599V10.8637L17.0331 0.945374Z"
                fill="#0156FF"
              />
            </svg>
          </Link>
          {element}
        </div>
        <div className="user-nav">
          <button
            className="user-nav__show-search-bar"
            onClick={(e) => {
              // @ts-ignore
              const classList = e.target.classList;
              classList.toggle("user-nav__show-search-bar_active");

              setElement(
                classList.contains("user-nav__show-search-bar_active")
                  ? [renderSearchInput()]
                  : [renderMenuItems(items)]
              );
            }}
          ></button>
          <button
            className="user-nav__basket"
            onClick={(e) => {
              for (let id in basket.products) {
                console.log({ ...basket.products[id] });
              }
            }}
          >
            {renderProductCount()}
          </button>
          <div style={{ position: "relative" }}>
            <button
              className="user-nav__profile"
              onClick={() => setIsAccountMenuVisible(!isAccountMenuVisible)}
              style={
                user.isAuth
                  ? {
                      background: `url(${authAvatar})`,
                    }
                  : {
                      background: `url(${unAuthAvatar})`,
                    }
              }
            />
            {isAccountMenuVisible && (
              <Account
                user={user}
                setIsAccountMenuVisible={setIsAccountMenuVisible}
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
});

export default Menu;