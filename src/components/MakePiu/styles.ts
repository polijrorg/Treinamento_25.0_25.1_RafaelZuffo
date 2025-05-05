import styled from 'styled-components';

export const MesDiv = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 55px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-8, #4c5155);
    border-bottom: 1px solid #4c5155;
`;
export const MesText = styled.textarea`
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

        /* Subtitle/Normal */
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;
export const EmojiDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;
export const EmojiDiv2 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    &:hover {
        cursor: pointer;
    }
`;
export const FotoLogo = styled.img`
    width: 24px;
    height: 24px;
    &:hover {
        cursor: pointer;
    }
`;
export const CamLogo = styled.img`
    width: 24px;
    height: 24px;
    &:hover {
        cursor: pointer;
    }
`;
export const SmileLogo = styled.img`
    width: 20px;
    height: 20px;
    &:hover {
        cursor: pointer;
    }
`;
export const PriceLogo = styled.img`
    width: 24px;
    height: 24px;
    &:hover {
        cursor: pointer;
    }
`;
export const GifLogo = styled.img`
    width: 24px;
    height: 24px;
    &:hover {
        cursor: pointer;
    }
`;
export const SendLogo = styled.img`
    display: flex;
    align-items: center;
    gap: 8px;
    &:hover {
        cursor: pointer;
    }
`;
