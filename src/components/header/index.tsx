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
        <Title>
          <a href="/">Paola Otero</a>
        </Title>

        <Link href="/about">about</Link>
      </InnerContainer>

      <Star>&#9733;</Star>

      <Banner>
        <BannerText>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>

          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
          <span>diseño gráfico</span>
        </BannerText>
      </Banner>
    </Container>
  );
}
