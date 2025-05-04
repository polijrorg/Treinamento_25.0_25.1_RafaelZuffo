import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px solid var(--Slate-8, #4c5155);
    background: var(--Slate-2, #1a1d1e);
    padding: 1.5rem;
    max-width: 336px;
    color: white;
`;

export const Titulo = styled.h1`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #374151;
`;
