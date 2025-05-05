'use client';

import React from 'react';
import * as S from './styles';

type PiuProps = {
    foto: string; // digite o local da foto
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
    numero_reposts
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
                <S.botao>
                    <img src="/assets/images/Arrow_Reload_02.svg" />{' '}
                    {numero_reposts}
                </S.botao>
                <S.botao>
                    <img src="/assets/images/Chat_Circle.svg" />{' '}
                    {numero_comentarios}
                </S.botao>
                <S.botao>
                    <img src="/assets/images/Heart_02.svg" /> {curtidas}
                </S.botao>
            </S.Etc>
        </S.PiuCard>
    );
}
