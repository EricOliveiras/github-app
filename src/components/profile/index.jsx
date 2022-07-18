import React from 'react'
import * as S from './styled'

export const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImgUser 
        src='https://avatars.githubusercontent.com/u/88443797?v=4'
        alt='Avatar'
      />
      <S.WrapperInfoUser>
        <h1>Eric Oliveira</h1>
        <S.WrapperUserName>
          <h3>Username: </h3>
          <a 
            href="https://github.com/EricOliveiras"
            target="_blank"
            rel='noopener noreferrer'
          >
            EricOliveiras
          </a>
        </S.WrapperUserName>
        <S.WrapperStatsCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>5</span>
          </div>
        </S.WrapperStatsCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}