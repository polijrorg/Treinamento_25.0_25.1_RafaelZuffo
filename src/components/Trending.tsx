'use client';

import { Container, Titulo } from '../styles/Trending';
import TrendingItem, { trending } from './TrendingItem';

const trendingData: trending[] = [
  {
    imagem: '../../public/assets/images/dogAnonimo.jpg',
    titulo: 'Dog muito Drip slc',
    descricao: 'esse cachorro tem o drip, veja o drip desse cachorro, ele tem muito drip',
  },
  {
    imagem: '/images/imgteste.png',
    titulo: 'teste1',
    descricao: 'teste2',
  },
  // etc
];

export default function Trending() {
  return (
    <Container>
      <Titulo>🔥 Pius em alta</Titulo>
      {trendingData.map((item, idx) => (
        <TrendingItem key={idx} data={item} />
      ))}
    </Container>
  );
}
