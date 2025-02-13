import React from 'react';

const Login = () => {
  return (
    <div>
      <section id="login">
        <h2>Login</h2>
        <form>
          <label>Email:</label>
          <input type="email" id="login-email" name="login-email"/>

          <label>Password:</label>
          <input type="password" id="login-password" name="login-password"/>

          <button type="submit">Login</button>
          <button type="button">Logout</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
