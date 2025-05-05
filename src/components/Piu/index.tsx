'use client';

import React from 'react';
import * as S from './styles';

type PiuProps = {
    foto: string; // digite o local da foto
    nome: string;
    usuario: string;
    texto: string;
    curtidas: number;
    numerocomentarios: number;
    numeroreposts: number;
};

export default function Piu({
    foto,
    nome,
    usuario,
    texto,
    curtidas,
    numerocomentarios,
    numeroreposts
}: PiuProps) {
    return (
        <S.PiuCard>
            <S.Header>
                <S.ProfileName>
                    <S.ProfileCircle src={foto} />
                    <S.ProfileNames>
                        <S.Nome>{nome}</S.Nome>
                        <S.Usuario>@{usuario}</S.Usuario>
                    </S.ProfileNames>
                </S.ProfileName>
                <S.Lixeira src="assets/images/Trash_Full.png" />
            </S.Header>
            <S.Texto>{texto}</S.Texto>
            <S.Etc>
                <S.Botao>
                    <img src="/assets/images/Arrow_Reload_02.svg" alt="" />{' '}
                    {numeroreposts}
                </S.Botao>
                <S.Botao>
                    <img src="/assets/images/Chat_Circle.svg" alt="" />{' '}
                    {numerocomentarios}
                </S.Botao>
                <S.Botao>
                    <img src="/assets/images/Heart_02.svg" alt="" /> {curtidas}
                </S.Botao>
            </S.Etc>
        </S.PiuCard>
    );
}
