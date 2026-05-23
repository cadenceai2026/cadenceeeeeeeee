import './style.css';
import { renderDashboard } from './views/dashboard.js';
import { renderCoach } from './views/coach.js';
import { renderActivities } from './views/activities.js';
import { renderCompete } from './views/compete.js';
import { renderSettings } from './views/settings.js';
import { supabase } from './lib/supabase.js';

// Route Protection Logic
supabase.auth.getSession().then(({ data: { session } }) => {
  if (!session) {
    window.location.href = '/index.html';
  }
});

// Setup auth state listener for logouts
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_OUT' || !session) {
    window.location.href = '/index.html';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const viewContainers = document.querySelectorAll('.view-container');

  function switchView(viewId) {
    // Update active nav items (desktop and mobile)
    navItems.forEach(item => {
      if (item.dataset.view === viewId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update active views
    viewContainers.forEach(view => {
      if (view.id === `view-${viewId}`) {
        view.classList.add('active');
      } else {
        view.classList.remove('active');
      }
    });

    // Render content for specific views if needed
    switch(viewId) {
      case 'dashboard': renderDashboard(); break;
      case 'coach': renderCoach(); break;
      case 'activities': renderActivities(); break;
      case 'compete': renderCompete(); break;
      case 'settings': renderSettings(); break;
    }
  }

  // Attach click listeners to all nav items
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = item.dataset.view;
      if (viewId) {
        switchView(viewId);
      }
    });
  });

  // Initialize first view
  switchView('dashboard');
  
  // Register Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }
});
