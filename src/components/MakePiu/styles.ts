import styled from "styled-components";

export const MesDiv = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 55px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-8, #4c5155);
`;
export const MesText = styled.h1`
    color: var(--Slate-12, #ecedee);
    text-align: center;

    /* Quero dar um piu... */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
