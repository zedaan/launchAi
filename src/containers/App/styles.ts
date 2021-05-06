import { styled } from "solid-styled-components";

export default styled("div")`
  padding-bottom: 80px;

  .main--heading {
    padding-top: 186px;
    padding-bottom: 133px;

    p {
      color: ${(props) => props.theme.colors.primaryText};
      font-size: 1.125em;
      font-size: 18px;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      padding-top: 20px;
      max-width: 640px;
      margin: auto;
      line-height: 28px;
    }
  }

  .cards {
    > div {
      margin: 10px;

      @media(max-width: 767px) {
        width: 100%;
      }
    }
  }

  .sub--heading {
    color: ${(props) => props.theme.colors.primaryText};
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 80px;
    padding-left: 10px;
  }
`;
