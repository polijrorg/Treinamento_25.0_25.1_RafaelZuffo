'use client';

import * as S from './styles';
import Piu from '../Piu/index';

export default function Home() {
  return (
    <main>
        <S.Background>
            <S.SearchBar placeholder="Ouvir um piu..."/>
            <S.NewPiu placeholder="Quero dar um piu..."/>
            <Piu
                foto="images/dogAnonimo.jpg"
                nome="Pedro Souza"
                usuario="pedrosz"
                texto="NÃO há imoralidade em furar a fila do bandejão..."
                curtidas={8}
                numero_comentarios={5}
                numero_reposts={3}
             />
        </S.Background>
    </main>
  );
}
