import { styled } from 'solid-styled-components';

const Wrapper = styled('div')`
.content {
  max-width: 795px;
  margin: auto;

  .main--heading {
    padding-top: 186px;
    
    .heading__description {
      p {
        position: relative;
        color: rgba(242, 241, 234, 0.7);
        font-family: Inter;
        font-style: normal;
        font-weight: 200;
        font-size: 44px;
        line-height: 60px;
        letter-spacing: -0.02em;
        padding-top: 20px;
        padding-bottom: 70px;
        margin-bottom: 75px;

        .title {
          position: absolute;
          color: rgba(242, 241, 234, 1);
          font-weight: 800;
          font-size: 44px;
          line-height: 80px;
          left: 0;
          bottom: 0;
          padding-left: 60px;

          &:before {
            position: absolute;
            content: "";
            left: 0;
            top: 40px;
            height: 2px;
            width: 50px;
            background-color: rgba(242, 241, 234, 1);
            bottom: 60px;
          }
        }
      }
    }
  }
  .description {
    p {
      color: #F2F1EA;
      font-weight: 300;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.01em;
    }
  }

  .section__value {
    h3 {
      color: #FFFFFF;
      font-weight: 800;
      font-size: 44px;
      line-height: 80px;
      letter-spacing: -0.5px;
      margin-bottom: 16px;
    }

    h4 {
      color: rgba(255, 255, 255, 0.6);
      font-weight: 800;
      font-size: 44px;
      line-height: 60px;
      letter-spacing: -0.5px;
      margin-bottom: 30px;
    }

    p {
      color: #F2F1EA;
      font-weight: 300;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.01em;
      margin-bottom: 32px;

      b {
        font-weight: 800;
      }
    }
  }
  .performance {
    h2 {
      color: #FFFFFF;
      font-weight: 800;
      font-size: 44px;
      line-height: 80px;
      letter-spacing: -0.5px;
    }

    p {
      font-weight: 300;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.01em;
      color: #F2F1EA;
      margin-bottom: 40px;
    }
    
    h3 {
      color: #FFFFFF;
      font-weight: 800;
      font-size: 32px;
      line-height: 60px;
      letter-spacing: -0.5px;
    }

    hr {
      width: 572px;
      height: 3px;
      background-color: #FFFFFF;
      margin-bottom: 32px;
    }

    h4 {
      color: rgba(255, 255, 255, 0.6);
      font-weight: 800;
      font-size: 32px;
      line-height: 60px;
      letter-spacing: -0.5px;
      margin-bottom: 32px;
    }

    button {
      color: #FFFFFF;
      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 17px 33px;
      margin-bottom: 100px;
    }
  }
}
`;

export default Wrapper;
