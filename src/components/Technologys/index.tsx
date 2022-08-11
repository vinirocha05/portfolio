import { IconsContainer, Content, SkillDetails } from './styles';
import SkillCard from '../SkillCard';
import { useState } from 'react';

const skills = [
  {
    name: 'Typescript',
    description:
      'O que aconteceria se adicionassemos tipagem ao bom e velho Javaxript? Teríamos todos os benefócios e flexiblidade do Javascript, além de diversas vantagens que a tipagem nos proporciopna, entre elas maior segurança no código, tratar possíveis bugs em tempo de desenvolvimento e além disso um código mais coeso',
    image:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg',
  },
  {
    name: 'NextJS',
    description:
      'NextJs é um framework React que nos permite criar sites de alta performance. Além da possibilidade de criar sites estáticos e dinâmicos, o NextJS adicionou uma gama de funcionalides ao React.  ',
    image:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  },

  {
    name: 'React',
    description:
      'O React é uma biblioteca do Javascript que nasceu com o objetivo de prover maior interação do usuário.',
    image:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  },
  {
    name: 'Styled Components',
    description: 'loreuykjyujmadadas dasdasd adsdas',
    image: '/assets/styled.png',
  },
  {
    name: 'CSS',
    description: 'loremadadas dasdasd adsdas',
    image:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  },
  {
    name: 'Javascript',
    description: 'fwefw dasdasd adsdas',
    image:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
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
    <Content>
      <SkillDetails>
        {skill ? (
          <div>
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
          </div>
        ) : (
          <span>Click on some skill to se de details</span>
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
  );
}
