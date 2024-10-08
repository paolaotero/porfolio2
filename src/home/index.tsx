import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Info } from "../info";
import { Container } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Info />
      </Container>
    </>
  );
}
