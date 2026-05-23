import { supabase } from './lib/supabase.js';
import { triggerZoomTransition } from './hero3d.js';

export function initAuth() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const btnAuth = document.getElementById('btn-auth');
  const toggleAction = document.getElementById('toggle-action');
  const toggleText = document.getElementById('toggle-text');
  const errorMsg = document.getElementById('error-message');

  let isSignUp = false;

  // Check if user is already logged in
  supabase.auth.getSession().then(({ data: { session } }) => {
    if (session) {
      window.location.href = '/app.html';
    }
  });

  // OAuth Providers
  const signInOAuth = async (provider) => {
    errorMsg.style.display = 'none';
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: window.location.origin + '/app.html'
      }
    });
    if (error) {
      errorMsg.textContent = error.message;
      errorMsg.style.display = 'block';
    }
  };

  document.getElementById('btn-google').addEventListener('click', () => signInOAuth('google'));
  document.getElementById('btn-apple').addEventListener('click', () => signInOAuth('apple'));
  document.getElementById('btn-facebook').addEventListener('click', () => signInOAuth('facebook'));

  // Toggle Sign In / Sign Up
  toggleAction.addEventListener('click', () => {
    isSignUp = !isSignUp;
    if (isSignUp) {
      btnAuth.innerHTML = 'Sign up &rarr;';
      toggleText.textContent = 'Already have an account?';
      toggleAction.textContent = 'Sign In';
    } else {
      btnAuth.innerHTML = 'Sign in &rarr;';
      toggleText.textContent = "Don't have an account?";
      toggleAction.textContent = 'Sign Up';
    }
    errorMsg.style.display = 'none';
  });

  // Email / Password Auth
  btnAuth.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    
    if (!email || !password) {
      errorMsg.textContent = 'Please enter email and password.';
      errorMsg.style.display = 'block';
      return;
    }

    btnAuth.disabled = true;
    btnAuth.style.opacity = '0.7';
    errorMsg.style.display = 'none';

    let result;
    if (isSignUp) {
      result = await supabase.auth.signUp({ email, password });
    } else {
      result = await supabase.auth.signInWithPassword({ email, password });
    }

    btnAuth.disabled = false;
    btnAuth.style.opacity = '1';

    if (result.error) {
      errorMsg.textContent = result.error.message;
      errorMsg.style.display = 'block';
    } else {
      if (isSignUp && result.data.user && !result.data.session) {
        errorMsg.textContent = 'Sign up successful! Please check your email to confirm your account.';
        errorMsg.style.color = '#34A853'; // Success green
        errorMsg.style.display = 'block';
      } else {
        // Successful login: trigger 3D transition before redirecting
        btnAuth.innerHTML = 'Connecting...';
        await triggerZoomTransition();
        window.location.href = '/app.html';
      }
    }
  });
}
