import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    gap: 0.75rem;
    padding-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #4c5155;
    border-top: 1px solid #4c5155;
`;

export const Image = styled.img`
    width: 112px;
    height: 112px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 8px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TituloCard = styled.span`
    color: var(--Slate-12, #ecedee);

    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Descricao = styled.span`
    align-self: stretch;
    color: var(--Slate-12, #ecedee);
    font-feature-settings: 'liga' off, 'clig' off;

    /* Body/Body Normal */
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;
