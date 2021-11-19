import styled from 'styled-components'

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  color: #808080;
  font-family: metropolisbold;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
`;

export const CheckBoxAppreance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  min-width: 22px;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 0;
  border: 2px solid ${props => props.theme.colors.textColor};
  background: ${({ active }) => active ? 'white' : 'transparent'};
`;

export const CheckBoxLabel = styled.div`
  font-family: Avenir,sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.colors.textColor};
`;