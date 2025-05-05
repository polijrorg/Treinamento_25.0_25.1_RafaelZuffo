import styled from 'styled-components';


export const Container = styled.div`
    background: var(--Slate-1, #151718);
    min-height: 100%;
    display: flex;
    justify-content: left;
    flex-direction: row;
    align-items: left;

    @media (max-width: 768px) {
        padding: ${({ theme }) => `${theme.space[3]}px`};
    }
`;


