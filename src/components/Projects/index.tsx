import { Project } from '../../domain/project';
import ProjectContainer from '../ProjectContainer';
import { ProjectsContainer, Content } from './styles';

export type ProjectsProps = {
  projects: Project[];
};

const projects = [
  {
    name: 'Desafio Wine',
    description:
      'Projeto desenvolvido com Typescript e Styled Components para estilização. Foi utilizado o NextJs como framework devido fuas ferramentas para criar sites estáticos com possibilidade de implementar SSR. Durante esse desafio pude sentir na práticas os princípios da progracmação KISS e DRY, uma que depois da refatoração projeto provavelmente terminei com metade do código que tinha escrito ',
    cover: '/assets/wine-project.png',
  },
  {
    name: 'Site Ah!çaí',
    description:
      'Algum tempo atrás minha mãe tinha um loja açaí, então para treinar um pouco das minhas habilidades em Javascript e CSS resolvi criar essa página de apresentação da Loja. Projeto muito legal, que além de treinar as habilidades relativas ao desenvolvimento, tinha a oportunidade de entender um pouco mais do processo de hospedagem e compra de domínios ',
    cover: '/assets/ahcai-project.png',
  },
  {
    name: 'Blog',
    description:
      'Para criar esse Blog utilizei o Strapi como ferramenta de CMS, além do Docker e Postgres para gerar o banco de dados. O projeto foi desenvolvido em Typescript, utilziando o Styled Components para estilização. Para os teste foram utilziados as bibliotecas Jest e Storybook.',
    cover: '/assets/blog-project.png',
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
