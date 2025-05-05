import styled from 'styled-components';

export const PiuCard = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-3, #202425);
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`;

export const Lixeira = styled.img`
    align: right;
    &:hover {
        cursor: pointer;
    }
`;

export const ProfileCircle = styled.img`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border-radius: 48px;
    border: 4px solid var(--Institutional-Blue-Fade, #004c97);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    // background-color: #555;
    // margin-right: 12px;
`;

export const ProfileNames = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;

export const ProfileName = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: flex-start;
    // gap: 8px;
`;

export const Nome = styled.div`
    color: var(--Slate-12, #ecedee);
    text-align: center;

    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Usuario = styled.div`
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
`;

export const Texto = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;

    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Etc = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;

    color: var(--Slate-12, #ecedee);

    /* Subtitle/Normal */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const botao = styled.div`
    &:hover {
        cursor: pointer;
    }
`;
