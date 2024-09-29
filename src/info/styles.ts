import styled from "styled-components";
import { spacing } from "../styles/tokens";

export const Container = styled.div`
  width: 80%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
  scrollbar-width: none;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const Img = styled.div`
  width: 100%;
  height: 300px;
  background-color: lightgray;
  display: flex;
`

export const Title = styled.div`
  font-size: 20px;
`

export const Text = styled.div`
  font-size: 14px;
`