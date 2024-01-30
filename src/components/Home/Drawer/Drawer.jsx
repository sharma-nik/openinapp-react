import React from "react";

//icons
import logo from "../../../assets/Logo.svg";
import dashboard from "../../../assets/Dashboard.svg";
import upload from "../../../assets/Upload.svg";
import invoice from "../../../assets/Invoice.svg";
import schedule from "../../../assets/Schedule.svg";
import calender from "../../../assets/Calendar.svg";
import notification from "../../../assets/Notification.svg";

//styles
import "./Drawer.scss";

const Drawer = () => {
  return (
    <div className="drawer">
      <div className="drawer__logo-wrapper">
        <img className="drawer__logo" src={logo} />
        <p className="drawer__base">Base</p>
      </div>

      <div className="drawer__navigation-wrapper">
        <DrawerNavigation icon={dashboard} navigationLabel={"Dashboard"} />
        <DrawerNavigation
          icon={upload}
          navigationLabel={"Upload"}
          selected={true}
        />
        <DrawerNavigation icon={invoice} navigationLabel={"Invoice"} />
        <DrawerNavigation icon={schedule} navigationLabel={"Schedule"} />
        <DrawerNavigation icon={calender} navigationLabel={"Calender"} />
        <DrawerNavigation
          icon={notification}
          navigationLabel={"Notification"}
        />
      </div>
    </div>
  );
};

const DrawerNavigation = ({ icon, navigationLabel, selected = false }) => {
  return (
    <div className="drawer__navigation">
      <img className="drawer__navigation-icon" src={icon} />
      {selected ? (
        <p className="drawer__navigation-label-selected">{navigationLabel}</p>
      ) : (
        <p className="drawer__navigation-label">{navigationLabel}</p>
      )}
    </div>
  );
};

export default Drawer;
