import styled from 'styled-components';

export const SearchBar = styled.div`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    background: var(--Slate-8, #4c5155);

    ::placeholder {
        color: var(--Slate-12, #ecedee);
        text-align: center;
        font-feature-settings: 'liga' off, 'clig' off;

        /* Body/Body Normal */
        font-family: Nunito;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 171.429% */
        letter-spacing: 0.5px;
    }
`;

export const SearchInput = styled.textarea`
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
        line-height: normal
    }
`;
