import { supabase } from './lib/supabase.js';

export function initAuth() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const btnAuth = document.getElementById('btn-auth');
  const toggleAction = document.getElementById('toggle-action');
  const toggleText = document.getElementById('toggle-text');
  const errorMsg = document.getElementById('error-message');

  const authTitle = document.getElementById('auth-title');
  const authSubtitle = document.getElementById('auth-subtitle');

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

  const btnGoogle = document.getElementById('btn-google');
  if (btnGoogle) btnGoogle.addEventListener('click', () => signInOAuth('google'));

  const btnApple = document.getElementById('btn-apple');
  if (btnApple) btnApple.addEventListener('click', () => signInOAuth('apple'));

  const btnFacebook = document.getElementById('btn-facebook');
  if (btnFacebook) btnFacebook.addEventListener('click', () => signInOAuth('facebook'));

  // Toggle Sign In / Sign Up
  toggleAction.addEventListener('click', () => {
    isSignUp = !isSignUp;
    if (isSignUp) {
      if (authTitle) authTitle.textContent = 'Crear Cuenta';
      if (authSubtitle) authSubtitle.textContent = 'Únete a la nueva era del entrenamiento híbrido.';
      btnAuth.innerHTML = 'Sign up &rarr;';
      toggleText.textContent = 'Already have an account?';
      toggleAction.textContent = 'Sign In';
    } else {
      if (authTitle) authTitle.textContent = 'Acceso Rápido';
      if (authSubtitle) authSubtitle.textContent = 'Inicia sesión en la nueva era del entrenamiento híbrido.';
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
        const mainPanel = document.getElementById('main-auth-panel');
        const overlay = document.getElementById('success-overlay');
        
        if (mainPanel && overlay) {
          mainPanel.style.opacity = '0';
          setTimeout(() => {
            mainPanel.style.display = 'none';
            overlay.classList.remove('hidden');
            setTimeout(() => {
              overlay.classList.remove('opacity-0');
              overlay.classList.add('opacity-100');
              import('./success3d.js').then(module => {
                module.initSuccess3D();
              }).catch(err => console.error("Failed to load 3D module", err));
            }, 50);
          }, 500);
        }
      } else {
        // Successful login: redirect to app
        btnAuth.innerHTML = 'Connecting...';
        window.location.href = '/app.html';
      }
    }
  });
}
