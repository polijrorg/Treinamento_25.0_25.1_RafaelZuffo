'use client';

import { useState } from 'react';
import Image from 'next/image';
import * as S from './styles';

type Props = {
    onSearch: (term: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
    const [term, setTerm] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setTerm(value);
        onSearch(value);
    };

    return (
        <S.SearchBar>
            <S.SearchInput
                as="textarea"
                placeholder="Ouvir um piu..."
                value={term}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-zinc-800 text-white placeholder-gray-400"
            />
            <S.SearchIcon>
                <Image
                    src="assets/images/ci_search.svg"
                    alt="Search"
                    width={20}
                    height={20}
                />
            </S.SearchIcon>
        </S.SearchBar>
    );
}
