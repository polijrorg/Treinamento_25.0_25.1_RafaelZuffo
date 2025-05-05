import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 32px 16px;
    border-left: 1px solid var(--Slate-8, #4c5155);
    background: var(--Slate-2, #1a1d1e);
    max-width: 336px;
    color: white;
    overflow-y: scroll;
    /* Scrollbar estilizada */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #2c2c2c; /* Fundo da barra */
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: #7f7f7f; /* Cor da alça */
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #a0a0a0;
    }

`;

export const Titulo = styled.div`
    display: flex;
    color: var(--Slate-12, #ecedee);

    /* Headline/Bold */
    font-family: Nunito;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 24px;
    border-bottom: 1px solid #4c5155;
`;
