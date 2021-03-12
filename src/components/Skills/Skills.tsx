import * as S from './styles';
import { skills } from 'data';

interface SkillProps {
  value: number;
  label: string;
}

const Skill = ({ label, value }: SkillProps) => (
  <S.Container>
    <S.Label>{label}</S.Label>
    <S.SkillContainer>
      <S.SkillBar value={value} />
    </S.SkillContainer>
  </S.Container>
);

const Skills = () => (
  <>
    {skills.map(skill => (
      <Skill key={skill.label} label={skill.label} value={skill.value} />
    ))}
  </>
);

export default Skills;
