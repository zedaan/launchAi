import { styled } from 'solid-styled-components';

const Header = styled('h2')`
  background: linear-gradient(90deg, #26C5E8 -3.87%, #C7F14F 110.33%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 70px;
  line-height: 80px;
  letter-spacing: -0.5px;

  &.heading--about {
    background: linear-gradient(90deg, #E82683 -3.87%, #C7F14F 110.33%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default Header;
