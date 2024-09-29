import styled from "styled-components";
import { font, spacing } from "../styles/tokens";

export const Container = styled.div`
  margin: 1.3rem 4rem 0;
`;

export const InnerContainer = styled.div`
  margin-left: auto;
  width: 40%;
  display: flex;
  gap: ${spacing.sp064};
`;

export const Text = styled.p``;

export const Title = styled.h2`
  font-size: ${font.fn020};
  font-weight: normal;
  margin: 0 0 ${spacing.sp010};
`;

export const Skills = styled.p`
  margin-top: ${spacing.sp032};
`;

export const Language = styled.p`
  margin-top: ${spacing.sp064};
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Photo = styled.img`
  width: 6.75rem;
  height: 7.0625rem;
`;

export const Img = styled.img`
  width: 10.5rem;
  height: 6.5625rem;
`;
