import { glob } from "solid-styled-components";

export default glob`
html,
body {
  background: #1A1818;
  font-family: 'Inter', sans-serif;
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

.line {
  fill: none;
  stroke: #ffab00;
  stroke-width: 3;
}
  
.overlay {
  fill: none;
  pointer-events: all;
}

.dot {
  fill: #ffab00;
  stroke: #fff;
  height: 100px;
}
  
.focus {
  fill: #fff;
  stroke: steelblue;
  cursor: pointer;
}

.btn--wrap {
  > button {
    margin-right: 10px;
  }
}

.container {
  max-width: 1200px;
}

.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  h2 {
    font-size: 30px;
    color: #fff;
    margin-bottom: 20px;
  }

  a {
    display: inline-block;
    text-align: center;
    font-family: Proxima;
    color: #1A1818;
    background: #F2F1EA;
    border-radius: 5px;
    padding: 8px 30px;
    border-radius: 5px;
    margin: auto;

  }
}

`;
