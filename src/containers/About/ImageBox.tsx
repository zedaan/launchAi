import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const Wrapper = styled('div')`
  background: #D0C3C3;
  border-radius: 10px;
  width: 380px;
  margin-bottom: 75px;

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    padding: 25px; 
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #121211;
  }
`;

const ImageBox: Component<any> = (props) => {
  return (
    <Wrapper>
      <div>
        <img src={props.src}/>
      </div>
      <div>
        <h3>{props.title}</h3>
      </div>
    </Wrapper>
  )
}

export default ImageBox;
