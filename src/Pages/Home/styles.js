import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  background: white;
  height: 100%;
  width: 100%;

  @media (max-width: 800px) {
    height: auto;
    margin-top: 0;
    width: 100%;
  }

  p {
    width: 60%;
    font-size: 30px;
    margin: auto;
    text-align: center;
    padding-top: 8vw;
    margin-bottom: 10px;
  }

  .selectionContainer,
  .resultados {
    background: white;
    max-width: 100vw;
    width: 80%;
    padding: 0 10%;
  }

  .selectionContainer {
    padding-top: 30px;
    margin-bottom: 40px;
    align-items: center;
    justify-content: center;
  }

  .resultados {
    padding-top: 60px;
    padding-bottom: 50px;
    display: flex;
    flex-flow: column wrap;
  }

  .containerDDDorigem,
  .containerDDDdestino,
  .containerPlano,
  .containerMinutos {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .containerDDDorigem select,
  .containerDDDdestino select,
  .containerPlano select {
    width: 30%;
    border-radius: 5px;
    height: 25px;
    align-self: center;
  }

  input {
    border-radius: 5px;
    height: 25px;
    align-self: center;
    width: calc(30% - 10px);
    border: solid 0.5px;
    padding-left: 10px;
  }

  input::placeholder {
    font-weight: bold;
  }

  .botaoCalcular {
    width: 20%;
    margin-left: 40%;
    padding: 8px 15px;
    border-radius: 10px;
    box-shadow: 3px 5px 10px black;
    background: black;
    color: white;
    font-size: 1em;
    margin-top: 30px;
    outline: none;
    border: none;
  }

  .botaoCalcular:hover {
    cursor: pointer;
  }

  .botaoCalcular:active {
    box-shadow: 1px 1px 2px black;
    outline: none;
  }

  .resultados table {
    border: solid 2px black;
    border-collapse: collapse;
  }

  .resultados th {
    padding: 15px 0;
    font-size: 1.1em;
    font-weight: 300;
    text-align: center;
    background: #272626;
    color: white;
  }

  .resultados td {
    text-align: center;
    background: white;
    height: 100px;
  }

  @media (max-width: 800px) {
    p {
      width: 75%;
    }

    .selectionContainer,
    .resultados {
      display: flex;
      flex-flow: column;
      width: 80%;
    }

    .containerDDDorigem,
    .containerDDDdestino,
    .containerMinutos,
    .containerPlano {
      flex-flow: column;
      text-align: center;
    }

    .containerDDDorigem select,
    .containerDDDdestino select,
    .containerPlano select,
    input {
      width: 80%;
    }

    .botaoCalcular {
      min-width: 40%;
      margin-left: 40%;
      margin-left: 0;
      align-self: center;
    }

    .resultados {
      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      overflow: scroll;
      margin-bottom: 0;
      padding-top: 20px;
    }

    .resultados table {
      min-width: min-content;
    }

    thead tr th {
      padding: 0 5px;
    }

    th,
    td {
      min-height: 50px;
    }
  }
`
