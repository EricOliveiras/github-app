import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100wh;
`
export const WrapperStatsCount = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  div {
    margin-right: 10px;
  }
`
export const WrapperUserName = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  h3 {
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }
`
export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  height: 200px;

  h1 {
    font-size: 2.5em;
    font-weight: bold;
  }

  h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.2em;
  }
`
export const WrapperImgUser = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 0 10px;
`