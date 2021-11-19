import styled from 'styled-components'

export const RadioCheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: #808080;
  font-family: metropolisbold;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
`;

export const RadioCheckBoxAppreance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  min-width: 22px;
  border-radius: 100%;
  margin-right: 10px;
  margin-top: 0;
  border: ${({ active }) => active ? '2px solid #e9b405' : '2px solid #b2b2b2'};
  background: ${({ active }) => active ? '#e9b405' : 'transparent'};
`;

export const RadioCheckBoxLabel = styled.div`
  font-family: Avenir,sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.colors.textColor};
`;