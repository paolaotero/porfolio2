import styled, { keyframes } from "styled-components";
import { colors, font, spacing } from "../../styles/tokens";

const scroll = keyframes`
  0% {
   transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);

  }
`;

export const Container = styled.header`
  margin: 1.3rem ${spacing.sp064} 0;
`;

export const Title = styled.h1`
  font-weight: normal;
  font-size: ${font.fn024};

  a {
    text-decoration: none;
    color: ${colors.black};
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: ${font.fn020};

  &:visited,
  :active {
    color: ${colors.black};
  }
`;

export const Star = styled.p`
  font-size: ${font.fn024};
  line-height: 1;
  margin: 0 0 ${spacing.sp010};
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

  span {
    padding: 0 ${spacing.sp032};
  }
`;
