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
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');

  // Sidebar Toggle Logic
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      if (sidebar.classList.contains('expanded')) {
        sidebar.classList.remove('expanded');
        sidebar.classList.add('collapsed');
      } else {
        sidebar.classList.remove('collapsed');
        sidebar.classList.add('expanded');
      }
    });
  }

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
      // Handle click within icon containers as well
      const viewId = item.closest('.nav-item').dataset.view;
      if (viewId) {
        switchView(viewId);
      }
    });
  });

  // Empty state routing
  const btnRouteSettings = document.getElementById('btn-route-settings');
  if (btnRouteSettings) {
    btnRouteSettings.addEventListener('click', () => switchView('settings'));
  }

  // Compete Hub Tabs Logic
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      // Update buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Update contents
      tabContents.forEach(content => {
        if (content.id === `tab-${target}`) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
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
