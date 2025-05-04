'use client';

import { useState } from 'react';
import * as S from './styles'

type Props = {
  onSearch: (term: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [term, setTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);
    onSearch(value);
  };

  return (
    <S.SearchInput
      type="text"
      placeholder="Ouvir um piu..."
      value={term}
      onChange={handleChange}
      className="w-full p-2 rounded-md bg-zinc-800 text-white placeholder-gray-400"
    />
  );
}

