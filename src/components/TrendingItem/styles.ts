import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #374151;
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TituloCard = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

export const Descricao = styled.span`
  font-size: 0.85rem;
  color: #9ca3af;
`;

