import styled from 'styled-components';

export const SidebarContainer = styled.div`
    border-right: 1px solid var(--Slate-8, #4c5155);
    background: var(--Slate-2, #1a1d1e);
    //    position: fixed;

    display: flex;
    width: 320px;
    height: 100vh;
    padding: 32px 0px;
    flex-direction: column;
    align-items: center;
    //    gap: 200px;
    flex-shrink: 0;
    border: none;
`;

export const Menu = styled.div`
    display: flex;
    height: 528px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
    align-self: stretch;
`;

export const Logo = styled.h1`
    display: flex;
    align-items: center;
    gap: 16px;

    color: var(--Slate-12, #ecedee);
    font-family: Nunito;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 6px;
`;

export const MenuButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`;

export const SidebarButton = styled.button`
    display: flex;
    height: 57px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
    background: none;
    border: none;
    color: var(--Slate-12, #ecedee);

    &:hover {
        display: flex;
        width: 179px;
        height: 57px;
        width: 304px;
        padding: 0px 16px;
        align-items: center;
        gap: 10px;
        border-radius: 0px 80px 80px 0px;
        background: var(--Indigo-9, #3e63dd);
    }

    & svg {
        display: flex;
        width: 179px;
        height: 57px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        color: var(--Slate-12, #ecedee);

        /* Subtitle/Bold */
        font-family: Nunito;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

export const ProfileImage = styled.img`
    width: 64px;
    height: 64px;
    flex-shrink: 0;
`;

export const Logout = styled.img`
    width: 64px;
    height: 64px;
    flex-shrink: 0;
`;
