import styled from 'styled-components';

export const Background = styled.div`
    flex: 1;
    display: flex;
    width: 54.44vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background-color: #151718;
    padding: 32px;
    gap: 46px;
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

export const NewPiu = styled.textarea`
    resize: none;
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-8, #4c5155);
    &::placeholder {
        width: 153px;
        color: var(--Slate-12, #ecedee);
        text-align: center;

        /* Subtitle/Normal */
        font-family: Nunito;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

export const Linha = styled.div`
    width: 100%;
    color: #4C5155;
    border: none;
    border-top: 1px solid #4C5155;
    // stroke-width: 20px;
    // height: 2px;
    // background-color: red;
    // //    stroke: var(--Slate-8, #4c5155);
    // align-self: stretch;
`;
