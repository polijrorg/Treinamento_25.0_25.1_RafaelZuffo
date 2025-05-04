'use client';

import React from "react";
import * as S from './styles';

const menubotoes = [
  { icon: 'assets/images/bx_home.png', label: 'Página Inicial' },
  { icon: 'assets/images/ic_outline-notifications.png', label: 'Notificações' },
  { icon: 'assets/images/jam_messages-alt.png', label: 'Mensagens' },
  { icon: 'assets/images/Cloud_Check.png', label: 'Salvos' },
  { icon: 'assets/images/pajamas_profile.png', label: 'Perfil' },
  { icon: 'assets/images/akar-icons_gear.png', label: 'Configurações' },
];

export default function Sidebar() {
  return (
    <S.SidebarContainer>
      <S.Menu>
         <S.Logo> <img src="assets/images/chick-svgrepo-com.png" /> PIUPIUWER </S.Logo>
         <S.MenuButtons>
            {menubotoes.map((item, index) => (
            <S.SidebarButton key={index}><img src={item.icon}/> {item.label}</S.SidebarButton>
            ))}
         </S.MenuButtons>
      </S.Menu>
        <S.Menu2>
            <S.ProfileImage src="assets/images/dogAnonimo.jpg" />
            <S.Logout src="assets/images/Log_Out.png" />
        </S.Menu2>
       </S.SidebarContainer>
  )
}
