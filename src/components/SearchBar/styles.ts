import styled from 'styled-components';

export const SearchBar = styled.div`
    display: flex;
    height: 40px;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    background: var(--Slate-8, #4c5155);
`;
export const SearchInput = styled.textarea`
    display: flex;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    color: var(--Slate-12, #ecedee);
    background: transparent;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    resize: none;

    &::placeholder {
        color: var(--Slate-12, #ecedee);
        text-align: left;
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

export const SearchIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    margin-left: 8px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;
