import { SkillContainer } from './styles';

export type SkillCardProps = {
  skill: {
    image: string;
    name: string;
    description: string;
  };
};

export default function Technologys({ skill }: SkillCardProps) {
  return (
    <SkillContainer>
      <img src={skill.image} alt="" />
    </SkillContainer>
  );
}
