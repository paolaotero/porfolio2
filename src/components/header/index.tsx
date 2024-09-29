import {
  Container,
  Title,
  InnerContainer,
  Link,
  Star,
  Banner,
  BannerText,
} from "./styles";

export function Header() {
  return (
    <Container>
      <InnerContainer>
        <Title>Paola Otero</Title>

        <Link href="/info">info</Link>
      </InnerContainer>

      <Star>&#9733;</Star>

      <Banner>
        <BannerText>
          diseño gráfico
        </BannerText>
      </Banner>
    </Container>
  );
}
