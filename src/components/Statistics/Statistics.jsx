import PropTypes from 'prop-types';
import { StatisticsCard, Title, StatList, StatItem, StatsDescription } from './Statistics.styled';

export const Statistics = ({title, stats: data}) => {
    return ( <StatisticsCard>
      {title && <Title>{title}</Title>}  

    <StatList>
        {data.map(({id, label, percentage}) => {
           return <StatItem key={id} label={label}>
           <StatsDescription>{label}</StatsDescription>
           <span>{percentage}%</span>
         </StatItem>
        })}
    </StatList>
  </StatisticsCard>);
};

Statistics.propTypes = {
   title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};