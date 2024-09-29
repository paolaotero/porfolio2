import { Card, Container, Img, Text, Title } from "./styles";

export function Info() {

  const options = [
    {
      key: "diseño-editorial",
      title: "diseño editorial",
      img: '',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati excepturi? Molestiae laborum incidunt unde? Molestias minus incidunt quo error ad quos! Dolores atque, est consequuntur iure veritatis consectetur optio nisi odit.'
    },
    {
      key: "carteleria",
      title: "cartelería",
      img: '',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati excepturi? Molestiae laborum incidunt unde? Molestias minus incidunt quo error ad quos! Dolores atque, est consequuntur iure veritatis consectetur optio nisi odit.'
    },
    {
      key: "tipografia",
      title: "tipografía",
      img: '',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati excepturi? Molestiae laborum incidunt unde? Molestias minus incidunt quo error ad quos! Dolores atque, est consequuntur iure veritatis consectetur optio nisi odit.'
    },
    {
      key: "animacion",
      title: "motion graphics / animación",
      img: '',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati excepturi? Molestiae laborum incidunt unde? Molestias minus incidunt quo error ad quos! Dolores atque, est consequuntur iure veritatis consectetur optio nisi odit.'
    },
    {
      key: "identidad",
      title: "identidad",
      img: '',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati excepturi? Molestiae laborum incidunt unde? Molestias minus incidunt quo error ad quos! Dolores atque, est consequuntur iure veritatis consectetur optio nisi odit.'
    },
    {
      key: "fotografia",
      title: "fotografía",
      img: '',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati excepturi? Molestiae laborum incidunt unde? Molestias minus incidunt quo error ad quos! Dolores atque, est consequuntur iure veritatis consectetur optio nisi odit.'
    },
  ]

  return (
    <Container>
      {
        options.map((op) =>
        <Card
          id={op.key}>
          <Img />

          <Title>
            {op.title}
          </Title>

          <Text>
            {op.description}
          </Text>
        </Card>)
      }
    </Container>
  );
}
