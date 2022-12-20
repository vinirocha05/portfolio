import Link from 'next/link';
import { Project } from '../../domain/project';
import { Container } from './styles';

export default function ProjectContainer({
  name,
  description,
  cover,
  link,
}: Project) {
  return (
    <Container>
      <Link href={link}>
        <img src={cover} alt="" />
      </Link>
      <h3>{name}</h3>
      <p>{description}</p>
    </Container>
  );
}
