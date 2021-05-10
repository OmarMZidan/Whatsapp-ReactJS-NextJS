import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";

const Login = () => {
  const handleSignIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  const handleGuest = () => {
    auth
      .signInWithEmailAndPassword("test@test.com", "testtest")
      .then((userCredential) => {})
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
  return (
    <Container>
      <Head>
        <title>WhatsApp</title>
      </Head>
      <Header>
        <HeaderLogo
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="WhatsApp Logo"
        />
        <PageTitle>WHATSAPP WEB</PageTitle>
      </Header>
      <LoginContainer>
        <Logo
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="WhatsApp Logo"
        />
        <Button
          onClick={handleSignIn}
          variant="outlined"
          style={{ marginBottom: "20px" }}
        >
          Sign in with your Google account
        </Button>
        <Button onClick={handleGuest} variant="outlined">
          Sign in as a Guest
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: linear-gradient(0deg, #dddbd1 65%, #00bfa5 35%);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;
const PageTitle = styled.span`
  color: white;
  margin-left: 10px;
`;
const HeaderLogo = styled.img`
  height: 40px;
  width: 40px;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
const Logo = styled.img`
  margin-bottom: 50px;
  height: 200px;
  width: 200px;
`;
