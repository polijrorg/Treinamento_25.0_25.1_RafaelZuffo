'use client';

import {Card, Image, Content, TituloCard, Descricao} from '@/styles/Trending';
//declara trending
export type trending = {
  imagem: string; //coloque o caminho da imagem rs
  titulo: string;
  descricao: string;
};
//data recebe os valores de trending pra conseguir importar as strings vindas de /styles/Trending
type Trend = {
  data: trending;
}

export default function TrendingItem ({data}: Trend) { return (
  <Card>
    <Image src={data.imagem} alt={data.titulo} />
    <Content>
      <TituloCard>{data.titulo}</TituloCard>
      <Descricao>{data.descricao}</Descricao>
    </Content>
  </Card>
  );
}
