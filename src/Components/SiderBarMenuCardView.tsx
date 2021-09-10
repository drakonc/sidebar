import { classNames } from "../Utils/classes"
import { SideBarMenuCard } from "../Types/types";
import './SiderBarMenuCardView.scss'

interface SiderBarMenuCardViewProps {
    card: SideBarMenuCard;
    isOpen: boolean;
}

export default function SiderBarMenuCardView ({card, isOpen}:SiderBarMenuCardViewProps){
    return (
        <div className="SiderBarMenuCardView">
            <img className="profile" src={card.photoUrl} alt={card.displayName} width="100%"/>
            <div className={classNames('profileInfo',  isOpen? '' : 'collapsed')}>
                <div className="name">{card.displayName}</div>
                <div className="title">{card.title}</div>
                <div className="url"><a href={card.url}>Ir Al Perfil</a></div>
            </div>
        </div>
    )
}