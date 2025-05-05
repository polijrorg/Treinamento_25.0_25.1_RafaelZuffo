'use client';

import * as S from './styles';
import TrendingItem, { trending } from '../TrendingItem/index';

const trendingData: trending[] = [
    {
        imagem: 'assets/images/dogAnonimo.jpg',
        titulo: 'Dog muito Drip slc',
        descricao:
            'esse cachorro tem o drip, veja o drip desse cachorro, ele tem muito drip'
    },
    {
        imagem: 'assets/images/doRock.jpeg',
        titulo: 'Por acaso vc é do rock?',
        descricao: 'do Rock'
    },
    {
        imagem: 'assets/images/dogAnonimo.jpg',
        titulo: 'Dog muito Drip slc',
        descricao:
            'esse cachorro tem o drip, veja o drip desse cachorro, ele tem muito drip'
    },
    {
        imagem: 'assets/images/doRock.jpeg',
        titulo: 'Por acaso vc é do rock?',
        descricao: 'do Rock'
    },
    {
        imagem: 'assets/images/dogAnonimo.jpg',
        titulo: 'Dog muito Drip slc',
        descricao:
            'esse cachorro tem o drip, veja o drip desse cachorro, ele tem muito drip'
    },
    {
        imagem: 'assets/images/doRock.jpeg',
        titulo: 'Por acaso vc é do rock?',
        descricao: 'do Rock'
    },
    {
        imagem: 'assets/images/dogAnonimo.jpg',
        titulo: 'Dog muito Drip slc',
        descricao:
            'esse cachorro tem o drip, veja o drip desse cachorro, ele tem muito drip'
    },
    {
        imagem: 'assets/images/doRock.jpeg',
        titulo: 'Por acaso vc é do rock?',
        descricao: 'do Rock'
    }
    // etc
];

export default function Trending() {
    return (
        <S.Container>
            <S.Titulo>
                <img src="assets/images/Frame.png" alt="" /> Pius em alta
            </S.Titulo>
            {trendingData.map((item) => (
                <TrendingItem data={item} />
            ))}
        </S.Container>
    );
}
