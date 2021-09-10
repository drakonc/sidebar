import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { classNames } from "../Utils/classes";
import SideBarMenuItemView from "./SideBarMenuItemView"
import SiderBarMenuCardView from "./SiderBarMenuCardView"
import { SideBarMenuCard, SideBarMenuItem } from "../Types/types";
import "./SideBarMenu.scss";

interface SideBarMenuProps {
    items: SideBarMenuItem[];
    card: SideBarMenuCard;
}

export function SideBarMenu({items, card}: SideBarMenuProps) {

    const [isOpen, setIsOpen] = useState<boolean>(true);

    function handleClick() {
        setIsOpen(!isOpen);
    }
    
    return (
        <div className={classNames("SideBarMenu", isOpen ? "expanded" : "collapsed")}>
            <div className="menuButton">
                <button className="hamburgerIcon" onClick={handleClick}>
                    <VscMenu />
                </button>
            </div>
            <SiderBarMenuCardView  card={card} isOpen={isOpen} />
            {items.map((item) => (
                <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen}/>
            ))}
        </div>
    )
}