import styled from 'styled-components';

export const Background = styled.div`
    display: flex;
    width: 100%;
    heigh: 100%;
    padding: 32px;
    flex-direction: column;
    align-items: center;
    gap: 46px;
    background: var(--Slate-1, #151718);
`;

export const SearchBar = styled.textarea`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
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

export const NewPiu = styled.textarea`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 55px;
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
