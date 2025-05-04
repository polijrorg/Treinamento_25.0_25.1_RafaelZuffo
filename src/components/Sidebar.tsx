'use client';

import React from "react";
import { SidebarContainer, Menu, MenuButtons, SidebarButton, Logo, ProfileImage, Logout } from "../styles/Sidebar";


const menubotoes = [
  { icon: '/images/dogAnonimo.jpg', label: 'Página Inicial', active: true },
  { icon: '/images/dogAnonimo.jpg', label: 'Notificações' },
  { icon: '/images/dogAnonimo.jpg', label: 'Mensagens' },
  { icon: '/images/dogAnonimo.jpg', label: 'Salvos' },
  { icon: '/images/dogAnonimo.jpg', label: 'Perfil' },
  { icon: '/images/dogAnonimo.jpg', label: 'Configurações' },
];

export default function Sidebar() {
  return (
    <SidebarContainer>
      <Menu>
         <Logo> <img src="../../public/assets/images/doRock.jpeg" /> PIUPIUWER </Logo>
          {menubotoes.map((item, index) => (
         <MenuButtons>
            <SidebarButton key={index}><img src={item.icon}/> {item.label}</SidebarButton>
         </MenuButtons>
      ))}
    </Menu>
    <ProfileImage src="/images/dogAnonimo.jpg" />
    <Logout src="/images/dogAnonimo.jpg" />
    </SidebarContainer>
  )
}
