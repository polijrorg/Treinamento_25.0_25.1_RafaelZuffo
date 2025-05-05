'use client';

import * as S from './styles';

export default function MakePiu() {
    return (
        <S.MesDiv>
            <S.MesText placeholder='Quero dar um piu...'/>
            <S.EmojiDiv>
                <S.EmojiDiv2>
                    <S.FotoLogo src="assets\images\Image_02.png" />
                    <S.CamLogo src="assets\images\Video.png" />
                    <S.SmileLogo src="assets\images\Feliz.png" />
                    <S.PriceLogo src="assets\images\Tag.png" />
                    <S.GifLogo src="assets\images\Gif.png" />
                </S.EmojiDiv2>
                <S.SendLogo src="assets\images\Paper_Plane.png" />
            </S.EmojiDiv>
        </S.MesDiv>
    );
}
