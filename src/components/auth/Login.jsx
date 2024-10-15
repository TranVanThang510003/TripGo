import AuthForm from './AuthForm';

function Login() {
  const handleLogin = (data) => {
    console.log('Login Data:', data);
    // Handle login logic here
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
}

export default Login;
