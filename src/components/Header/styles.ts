import { styled } from "solid-styled-components";

const Wrapper = styled("div")`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.primary};
  z-index: 99;

  nav {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid ${(props) => props.theme.colors.grey};
    
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      @media(max-width: 767px) {
        height: 60px;
        line-height: 60px;
      }
    }

    li {
      a {
        color: ${(props) => props.theme.colors.primaryText};
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        font-weight: 600;
        font-family: Proxima;
      }
    }
  }

  .button--wrapper {
    padding-right: 10px;
  
    button {
      font-family: Proxima;
      background: #f2f1ea;
      border-radius: 5px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: #1a1818;
      padding: 7px 20px;
      
      &:active,
      &:hover,
      &:visited {
        outline: none;
      }
    }
    @media(max-width: 767px) {  
      display: none;
    }

  }

  .header--mobile {
    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .header--xs {
    @media (max-width: 767px) {
      position: absolute;
      width: 100%;
      left: 0;
      top: 47px;
      right: 0;
      background-color: rgba(0, 0, 0, 0.9);
      padding: 0;

      ul {
        padding: 0;
        margin: 0;
        li {
          a {
            padding: 15px 25px;
            display: block;

            &:hover {
              background-color: ${(props) => props.theme.colors.grey};
            }
          }
        }
      }
    }
  }

  .logo {
    padding-left: 10px;
  }
`;

export default Wrapper;
