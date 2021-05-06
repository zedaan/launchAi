import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const Wrapper = styled('div')`
  display: flex;
  background: #000000;
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
  margin: 75px 0;
  margin-right: 70px;
  border-radius: 40px;

  img {
    height: 100px;
    width: 100px;
    object-fit: contain;
    filter: contrast(2);
  }
`;

const Icon: Component<any> = (props) => {
  return (
    <Wrapper>
      <img src={props.src} className="staurate" />
    </Wrapper>
  )
}

export default Icon;
