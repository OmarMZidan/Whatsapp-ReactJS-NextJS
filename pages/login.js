import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" />
        <Button variant="outlined">Sign in with Google</Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img`
  margin-bottom: 50px;
  height: 200px;
  width: 200px;
`;
