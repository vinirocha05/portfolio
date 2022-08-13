import { IconsContainer, Content, SkillDetails, Heading } from './styles';
import SkillCard from '../SkillCard';
import { useState } from 'react';

const skills = [
  {
    name: 'Typescript',
    description:
      'O que aconteceria se adicionassemos tipagem ao bom e velho Javaxript? Teríamos todos os benefócios e flexiblidade do Javascript, além de diversas vantagens que a tipagem nos proporciopna, entre elas maior segurança no código, tratar possíveis bugs em tempo de desenvolvimento e além disso um código mais coeso.',
    image:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg',
  },
  {
    name: 'NextJS',
    description:
      'NextJs é um framework React que nos permite criar sites de alta performance. Além da possibilidade de criar sites estáticos e dinâmicos, o NextJS adicionou uma gama de funcionalides ao React.',
    image:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  },

  {
    name: 'React',
    description:
      'Criada pelo Facebook, o React é uma biblioteca para Javascript que nasceu com o objetivo de prover maior interação do usuário. Através des suas funcionaldiades é possível criar sites dinâmicos com uma conexão simplicada entre o HTML, CSS e Javascript.',
    image:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  },
  {
    name: 'Styled Components',
    description:
      'O Styled Components é um biblioteca que nos permite escrever CSS dentro de um arquivo Javascript, dentre as principais vantagens podemos destacar a criação estlizaçoes dinâmicas e personalizáveis para cada componente.',
    image: '/assets/styled.png',
  },
  {
    name: 'Github',
    description:
      'Como ferramenta de versionamento de código utilizo o Github, além de conseguir quebra a entrega do projeto em várias etapas podemos compartilhar o trabalho com outros desenvolvedores.',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'Jest',
    description:
      'O Jest é uma ferramenta de testes unitários em Javascript. Entre suas principais vantagens estão a simplicidade no uso, possibilidade de fazer testes isolados e geração de relatória de cobeturados testes.',
    image: '/assets/jest.png',
  },
];

export type Skill = {
  image: string;
  name: string;
  description: string;
};

export default function Citation() {
  const [skill, setSkill] = useState<Skill>();

  return (
    <>
      <Heading>Tecnologias</Heading>
      <Content id="tecnologias">
        <SkillDetails>
          {skill ? (
            <div>
              <h2>{skill.name}</h2>
              <p>{skill.description}</p>
            </div>
          ) : (
            <span>Clique em uma tecnologia para ver os detalhes</span>
          )}
        </SkillDetails>

        <IconsContainer>
          {skills.map((skill) => (
            <div onClick={() => setSkill(skill)} key={skill.name}>
              <SkillCard skill={skill} />
            </div>
          ))}
        </IconsContainer>
      </Content>
    </>
  );
}
