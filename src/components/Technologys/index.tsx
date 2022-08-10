import { IconsContainer, Content, SkillDetails } from './styles';
import SkillCard from '../SkillCard';
import { useState } from 'react';

const skills = [
  {
    name: 'Typescript',
    description: 'loremadadas dasdasd adsdas',
    image:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg',
  },
  {
    name: 'NextJS',
    description: 'sdfsdfsdf dasdasd adsdas',
    image:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  },

  {
    name: 'React',
    description: 'loremadadas dasdasd adsdas',
    image:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  },
  {
    name: 'Styled Components',
    description: 'loreuykjyujmadadas dasdasd adsdas',
    image:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
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
            <p>Projets: lroem asdsadasdasd dasdasd </p>
          </div>
        ) : (
          ''
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
