import styled, { keyframes } from "styled-components";
import { font, spacing } from "../../styles/tokens";

const scroll = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const Container = styled.header`
  padding: ${spacing.sp016};
`;

export const Title = styled.h1`
  font-weight: normal;
  font-size: ${font.fn024};
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: ${font.fn020};
`;

export const Star = styled.p`
  margin: ${spacing.sp010} 0 ${spacing.sp016};
`;

export const Banner = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  border-bottom: 1px solid #333;
`;

export const BannerText = styled.p`
  display: inline-block;
  animation: ${scroll} 20s linear infinite;
  font-size: ${font.fn020};
`;
