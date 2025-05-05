'use client';

import { useState } from 'react';
import * as S from './styles';
import Piu from '../Piu/index';
import SearchBar from '../SearchBar/index';
import MakePiu from '../MakePiu/index';

const pius = [
    {
        foto: 'assets/images/dogAnonimo.jpg',
        nome: 'Dog Anônimo',
        usuario: 'dogA',
        texto: 'NÃO há imoralidade em furar a fila do bandejão...',
        curtidas: 8,
        numero_comentarios: 5,
        numero_reposts: 3
    },
    {
        foto: 'assets/images/dogAnonimo.jpg',
        nome: 'Gato',
        usuario: 'souumgato',
        texto: 'sou um gato',
        curtidas: 3,
        numero_comentarios: 1,
        numero_reposts: 0
    },

    {
        foto: 'assets/images/dogAnonimo.jpg',
        nome: 'Gato',
        usuario: 'souumgato',
        texto: 'sou um gato',
        curtidas: 3,
        numero_comentarios: 1,
        numero_reposts: 0
    },

    {
        foto: 'assets/images/dogAnonimo.jpg',
        nome: 'Gato',
        usuario: 'souumgato',
        texto: 'sou um gato',
        curtidas: 3,
        numero_comentarios: 1,
        numero_reposts: 0
    },

    {
        foto: 'assets/images/dogAnonimo.jpg',
        nome: 'Gato',
        usuario: 'souumgato',
        texto: 'sou um gato',
        curtidas: 3,
        numero_comentarios: 1,
        numero_reposts: 0
    },

    {
        foto: 'assets/images/dogAnonimo.jpg',
        nome: 'Gato',
        usuario: 'souumgato',
        texto: 'sou um gato',
        curtidas: 3,
        numero_comentarios: 1,
        numero_reposts: 0
    }
];

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPius = pius.filter(
        (piu) =>
            piu.texto.toLowerCase().includes(searchTerm.toLowerCase()) ||
            piu.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            piu.usuario.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <S.Background>
            <SearchBar onSearch={setSearchTerm} />
            <MakePiu />
            <S.Linha />
            {filteredPius.map((piu, index) => (
                <Piu
                    key={index}
                    foto={piu.foto}
                    nome={piu.nome}
                    usuario={piu.usuario}
                    texto={piu.texto}
                    curtidas={piu.curtidas}
                    numero_comentarios={piu.numero_comentarios}
                    numero_reposts={piu.numero_reposts}
                />
            ))}
        </S.Background>
    );
}
