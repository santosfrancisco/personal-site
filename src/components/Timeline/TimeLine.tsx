import * as S from './styles';
import { jobs } from 'data';

type TimelineItemProps = {
  dateInfo: {
    month: string;
    year: string;
    duration: string;
  };
  jobInfo: {
    role: string;
    company: string;
    description: string;
  };
};

const TimelineItem = ({ dateInfo, jobInfo }: TimelineItemProps) => {
  return (
    <S.Container>
      <S.Time>
        <S.Month>{dateInfo.month}</S.Month>
        <S.Year>{dateInfo.year}</S.Year>
      </S.Time>
      <div>
        <S.JobDuration>{dateInfo.duration}</S.JobDuration>
        <S.JobTitle>
          <S.Role>{jobInfo.role}</S.Role> na <S.Company>{jobInfo.company}</S.Company>
        </S.JobTitle>
        <p>{jobInfo.description}</p>
      </div>
    </S.Container>
  );
};

const Timeline = () => {
  return (
    <S.TimelineWrapper>
      {jobs.map(job => (
        <TimelineItem key={`${job.jobInfo.role}-${job.jobInfo.company}`} {...job} />
      ))}
    </S.TimelineWrapper>
  );
};

export default Timeline;
