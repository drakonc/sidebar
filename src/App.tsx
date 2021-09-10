import profileImagen from "./bill.jpg"
import { FcSettings,FcHome } from "react-icons/fc";
import { SideBarMenu } from './Components/SideBarMenu';
import { SideBarMenuCard, SideBarMenuItem } from "./Types/types";

function App() {

  const items:SideBarMenuItem[] = [
    {
      id: '1',
      label: 'Dashboard',
      icon: FcHome,
      url: '/'
    },
    {
      id: '2',
      label: 'Configuración',
      icon: FcSettings,
      url: '/'
    }
  ]

  const card: SideBarMenuCard = {
    id: "card01",
    displayName: "Jose Castro",
    photoUrl: profileImagen,
    title: "Infraestructura",
    url: "/"
  }

  return (
    <div>
      <SideBarMenu items={items} card={card}/>
    </div>
  )
}

export default App;
