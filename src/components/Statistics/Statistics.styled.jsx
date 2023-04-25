import styled from 'styled-components';
import { getRandomHexColor } from '../../utils/getRandomColor';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  max-width: 100%;
  width: 600px;
  box-shadow: ${props => props.theme.shadows.main};
  border-radius: ${props => props.theme.radiuses.medium};
`;

export const Title = styled.h2`
  padding: ${props => props.theme.space[5]}px;
  margin: ${props => props.theme.space[0]}px;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  padding: ${props => props.theme.space[5]}px;
  width: 100%;
  height: 100%;
  :first-child {
    border-bottom-left-radius: ${props => props.theme.radiuses.medium};
  }
  :last-child {
    border-bottom-right-radius: 0${props => props.theme.radiuses.medium};
  }
  background-color: ${props => getRandomHexColor(props.index)}
`;

export const Label = styled.span`
  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  font-size:  ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
`;