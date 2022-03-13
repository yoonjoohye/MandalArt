import React from 'react';
import { connect } from 'react-redux';
import { loginAsync } from '../../stores/auth';
import Loading from '../../components/Loading';
import ReactHelmet from '../../components/ReactHelmet';
import {
  BackgroundSection,
  Container,
  FlexBox
} from '../../assets/css/Section.style';
import styled from 'styled-components';
import { MarkdownBase, MarkdownMd } from '../../assets/css/Markdown.style';
import { Color } from '../../assets/css/Theme.style';
import { media } from '../../assets/css/Media.style';
import Alert from '../../components/button/Alert';
import { Icon } from '../../assets/css/Image.style';
import logoIcon from '../../assets/img/icon/puzzle.svg';
import { GoogleLogin } from 'react-google-login';

const LoginContainer = styled(Container)`
  min-height: 100vh;
  ${FlexBox('center')};
`;

const LoginWrapper = styled.div`
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  width: 350px;
  padding: 7rem;
  background-color: white;
  border-radius: 0.5rem;
  ${media.sm`
        width: 100%;
        padding: 0 1rem;
        box-shadow:none;
        background: none;
    `}
`;

const LoginBox = styled.div`
  ${FlexBox('center')};
`;

const LogoTitle = styled(MarkdownMd)`
  color:${Color.black};
`;
const LoginTitle = styled(MarkdownBase)`
  margin-bottom: 70px;
  text-align: center;
  color:${Color.black};
`;
const LoginIcon = styled(Icon)`
  margin-right: 10px;
`;

const StyledGoogleLogin=styled(GoogleLogin)`
  width:100%;
  justify-content: center;
`

const Login = (props) => {
  let { loginAsync, loading } = props;

  const responseGoogle = (response) => {
    loginAsync(response.accessToken);
  }

  return (
    <>
      <ReactHelmet
        title="로그인 - 나만의 만다라트"
        description="만다라트는 오타니쇼헤이의 성공비법으로 유명한 기법입니다. 홈페이지에서 나만의 만다라트를 세우고 성공목표를 세워보세요."
        keywords="만다라트(mandal art) 사이트로 플랜(plan) 도구를 만나보세요! 나만의 만다라트를 만들어 성공 목표를 세워보세요."
      />
      <BackgroundSection img={require('../../assets/img/index.jpg')}>
        <Loading show={loading} />
        <LoginContainer>
          <LoginWrapper>
            <LoginBox>
              <LoginIcon
                alt="만다라트-로고"
                src={logoIcon}
              />
              <LogoTitle fontWeight="600">Mandal-ART</LogoTitle>
            </LoginBox>
            <LoginTitle>로그인</LoginTitle>
            <StyledGoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="구글로 로그인"
                onSuccess={responseGoogle}
            />
            <Alert />
          </LoginWrapper>
        </LoginContainer>
      </BackgroundSection>
    </>
  );
};

export default connect(
  (state) => ({
    user: state.auth.user,
    loading: state.auth.loading.login
  }),
  {
    loginAsync
  }
)(Login);
