import { styled } from 'solid-styled-components';

const Wrapper = styled('div')`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  padding: 16px;
  min-width: 345px;

`;

export default Wrapper;
