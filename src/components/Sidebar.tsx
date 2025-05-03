'use client';

import React from "react";
import { SidebarContainer, SidebarButton, Logo } from "../styles/Sidebar";


const menubotoes = [
  { icon: '/images/dogAnonimo.jpg', label: 'Página Inicial', active: true },
  { icon: '', label: 'Notificações' },
  { icon: '', label: 'Mensagens' },
  { icon: '', label: 'Salvos' },
  { icon: '', label: 'Perfil' },
  { icon: '', label: 'Configurações' },
];

export default function Sidebar() {
  return (
    <SidebarContainer>
      <Logo>PIUPIUWER</Logo>
      {menubotoes.map((item, index) => (
        <SidebarButton key={index}>{item.icon} {item.label}</SidebarButton>
      ))}
    </SidebarContainer>
  )
}
