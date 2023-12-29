import React, { useState } from "react";
import {useAuth} from "../../../hooks/AuthContext";
import Logo from "@/assets/images/logo.png";

import style from "./LeaderSidebar.module.scss";
import {useNavigate} from "react-router-dom";
import {SidebarContent} from "./SideBarContent";
import classNames from "classnames";

const LeaderSidebar = ({ selected, onSelected }) => {
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

    const onClickLogout = () => {
        handleLogout();
        navigate("/");
    }

    return (
        <>
            <div className={style.sidebar}>
                <div className={style.logo}>
                    <img className={style.logoImage} src={Logo}  alt="logo" />
                    <span className={style.text}>
                        <span>Magic</span> Post
                    </span>
                </div>

                <div className={style["menu"]}>
                    {SidebarContent.map((item, index) => {
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
                </div>
            </div>
        </>
    );
};

export default LeaderSidebar;
