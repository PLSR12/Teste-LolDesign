import styled from 'styled-components'

export const ContainerHeader = styled.div`
  background: #0095ff;
  height: 10vh;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    position: relative;
    margin: auto;
    width: 100vw;
    overflow: auto;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 400px) {
    width: 150%;
    height: 10vh;
  }

  .image-container {
    justify-content: center;
  }
  img {
    width: 100%;
    height: 15vh;
    text-align: center;
    @media (max-width: 400px) {
      img {
        width: 100%;
      }
    }

    img {
      width: 150%;
      margin: auto;
    }
  }
`
export const NavHeader = styled.div`
  width: 70%;

  @media (max-width: 800px) {
    margin-right: 20%;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  ul li {
    list-style: none;
    margin-left: 30px;
    align-self: center;
  }

  ul li a {
    text-decoration: none;
    color: white;
  }

  ul li a:hover {
    text-decoration: none;
    color: black;
    transition: 10ms;
  }
`
