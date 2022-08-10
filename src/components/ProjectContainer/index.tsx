import { Project } from '../../domain/project';
import { Container } from './styles';

export default function ProjectContainer({
  name,
  description,
  cover,
}: Project) {
  return (
    <Container>
      <img src={cover} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
    </Container>
  );
}
