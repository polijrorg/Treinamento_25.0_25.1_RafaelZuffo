'use client';

import React from "react";
import * as S from './styles';

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
    <S.PiuCard>
      <S.Header>
        <S.ProfileCircle src={foto} />
        <div>
          <S.Nome>{nome}</S.Nome>
          <S.Usuario>@{usuario}</S.Usuario>
        </div>
      </S.Header>
      <S.Texto>{texto}</S.Texto>
      <S.Etc>
        <span>{numero_comentarios}</span>
        <span>{numero_reposts}</span>
        <span>{curtidas}</span>
      </S.Etc>
    </S.PiuCard>
  );
}
