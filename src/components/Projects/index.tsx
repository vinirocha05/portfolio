import { Project } from '../../domain/project';
import ProjectContainer from '../ProjectContainer';
import { ProjectsContainer, Content } from './styles';

export type ProjectsProps = {
  projects: Project[];
};

const projects = [
  {
    name: 'Typescript',
    description: 'loremadadas dasdasd adsdas',
    cover:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg',
  },
  {
    name: 'Typescript',
    description: 'loremadadas dasdasd adsdas',
    cover:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg',
  },
  {
    name: 'Typescript',
    description: 'loremadadas dasdasd adsdas',
    cover:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg',
  },
  {
    name: 'Typescript',
    description: 'loremadadas dasdasd adsdas',
    cover:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg',
  },
];
export default function Projects() {
  return (
    <Content>
      <h2>Projetos</h2>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectContainer {...project} key={project.name} />
        ))}
      </ProjectsContainer>
    </Content>
  );
}
