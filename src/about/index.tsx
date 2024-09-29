import { Header } from "../components/header";
import {
  Container,
  Photo,
  InnerContainer,
  Title,
  Text,
  Language,
  Skills,
  Img,
  Images,
} from "./styles";
import PhotoImage from "../assets/photo.png";
import Image from "../assets/img.png";

export function About() {
  return (
    <Container>
      <Header />
      <InnerContainer>
        <div>
          <Title>grado en diseño gráfico - e/s/d madrid</Title>
          <Text>
            adobe creative cloud (photoshop, illustrator, indesign, after
            effects, premiere, lightroom)
            <br />
            figma
            <br />
            html, css, javascript
            <br />
            fontlab8
            <br />
            touchdesigner
          </Text>
          <Skills>
            fotografía <br /> ilustración
          </Skills>
          <Language>inglés - español</Language>
        </div>

        <Images>
          <Photo src={PhotoImage} alt="self photo" />

          <Img src={Image} alt="presupuestos sin compromiso" />
        </Images>
      </InnerContainer>
    </Container>
  );
}
