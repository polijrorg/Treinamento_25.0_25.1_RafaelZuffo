import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #1A1D1E;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Logo = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const SidebarButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #1f2937;
  }

  & svg {
    font-size: 1.2rem;
  }
`;

