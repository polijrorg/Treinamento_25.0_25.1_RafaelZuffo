'use client';

import * as S from './styles';
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
  <S.Card>
    <S.Image src={data.imagem} alt={data.titulo} />
    <S.Content>
      <S.TituloCard>{data.titulo}</S.TituloCard>
      <S.Descricao>{data.descricao}</S.Descricao>
    </S.Content>
  </S.Card>
  );
}
