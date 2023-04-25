import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${props => props.theme.space[4]}px;
  margin: 0 auto;
  padding: ${props => props.theme.space[3]}px;
  max-width: 100%;
  width: 300px;
  border-radius: ${props => props.theme.radiuses.medium};
  box-shadow: ${props => props.theme.shadows.main};
  background-color: ${props => props.theme.colors.white};
`;

export const Status = styled.span`
  display: block;
  margin-left: ${props => props.theme.space[3]}px;
  width: ${props => props.theme.space[4]}px;
  height: ${props => props.theme.space[4]}px;
  border-radius: ${props => props.theme.radiuses.round};
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: ${props => props.theme.radiuses.large};
  
  }
`;

export const Name = styled.p`
  margin-left: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
`;