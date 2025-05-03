'use client';

import React from "react";
import { PiuCard, Header, ProfileCircle, Nome, Usuario, Texto, Etc,} from "../styles/Piu";

type PiuProps = {
  foto: string; //digite o local da foto
  nome: string;
  usuario: string;
  texto: string;
  curtidas: number;
  numero_comentarios: number;
  numero_reposts: number;
};

export default function Piu({
  foto,
  nome,
  usuario,
  texto,
  curtidas,
  numero_comentarios,
  numero_reposts,
}: PiuProps) {
  return (
    <PiuCard>
      <Header>
        <ProfileCircle src={foto} />
        <div>
          <Nome>{nome}</Nome>
          <Usuario>@{usuario}</Usuario>
        </div>
      </Header>
      <Texto>{texto}</Texto>
      <Etc>
        <span>{numero_comentarios}</span>
        <span>{numero_reposts}</span>
        <span>{curtidas}</span>
      </Etc>
    </PiuCard>
  );
}
