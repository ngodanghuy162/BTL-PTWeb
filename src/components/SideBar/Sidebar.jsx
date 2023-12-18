import React, { useState } from "react";
import {useAuth} from "../../hooks/AuthContext";
import Logo from "@/assets/images/logo.png";

import style from "./Sidebar.module.scss";
import {useNavigate} from "react-router-dom";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarCategory } from "./Category/Category";
import classNames from "classnames";

const Sidebar = ({ selected, onSelected }) => {
    const {handleLogout} = useAuth();
    const navigate = useNavigate();
    const sidebarVariants = {
        true: {
            left: "0",
        },
        false: {
            left: "-60%",
        },
    };
    console.log(window.innerWidth);

    const onClickLogout = () => {
        handleLogout();
        navigate("/");
    }

    return (
        <>
            <div className={style.sidebar}>
                <div className={style.logo}>
                    <img src={Logo} alt="logo" />
                    <span>
                        <span>magic</span> admin
                    </span>
                </div>

                <div className={style["menu"]}>
                    {SidebarCategory.map((item, index) => {
                        return (
                            <div
                                className={classNames(style.menuItem, {
                                    [style.active]: index === selected,
                                })}
                                key={index}
                                onClick={() => onSelected(index)}
                            >
                                <item.icon />
                                <span>{item.heading}</span>
                            </div>
                        );
                    })}
                    <div className={style.menuItem}>
                        <UilSignOutAlt onClick={handleLogout}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
