import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Info } from "../info";
import { Container, InnerContainer } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <InnerContainer>
        <Sidebar />
        <Info />
      </InnerContainer>
    </Container>
  );
}
