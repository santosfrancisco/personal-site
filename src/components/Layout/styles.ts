import styled from 'styled-components';
import { config, Container as AwesomeContainer } from 'react-awesome-styled-grid';

export const Container = styled(AwesomeContainer)`
  ${props => config(props).media.md`
    
  `}
`;
