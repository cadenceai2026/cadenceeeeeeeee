export function renderSettings() {
  const container = document.getElementById('view-settings');
  container.innerHTML = `
    <div class="header-row">
      <h2 class="heading">Settings</h2>
    </div>
    
    <!-- Profile -->
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 32px;">
      <div style="width: 80px; height: 80px; border-radius: 50%; background: var(--surface-high); display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--muted)"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
      </div>
      <div>
        <h3 class="heading" style="margin:0;">Alex Runner</h3>
        <p class="text-muted" style="margin: 4px 0 0 0; font-size: 0.9rem;">Madrid, Spain</p>
        <span class="chip" style="margin-top: 8px; background: rgba(207, 189, 255, 0.15); border-color: var(--secondary); color: var(--secondary); font-size: 0.75rem;">Elite Member</span>
      </div>
    </div>
    
    <!-- Preferences -->
    <h4 class="heading" style="margin-bottom: 12px; color: var(--muted);">Training Preferences</h4>
    <div class="surface-card" style="padding: 16px; margin-bottom: 24px;">
      
      <div style="margin-bottom: 16px;">
        <div style="font-size: 0.9rem; margin-bottom: 8px;">Focus Area</div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <span class="chip">5K/10K</span>
          <span class="chip active">Hybrid / Hyrox</span>
          <span class="chip">Marathon</span>
        </div>
      </div>
      
      <div>
        <div style="font-size: 0.9rem; margin-bottom: 8px;">Coaching Style</div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <span class="chip">Friendly</span>
          <span class="chip active">Norwegian (Data-driven)</span>
          <span class="chip">Aggressive</span>
        </div>
      </div>
      
    </div>
    
    <!-- Integrations -->
    <h4 class="heading" style="margin-bottom: 12px; color: var(--muted);">Integrations</h4>
    <div class="surface-card" style="padding: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--primary); box-shadow: 0 0 8px var(--primary);"></div>
        <span style="font-weight: 500;">Strava Connected</span>
      </div>
      <button class="secondary" style="padding: 6px 12px; font-size: 0.8rem;">Disconnect</button>
    </div>
    
    <!-- Account Actions -->
    <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 40px;">
      <button id="btn-logout" class="secondary">Log Out</button>
      <button style="background: transparent; border: 1px solid var(--error); color: var(--error); padding: 12px 24px; border-radius: var(--radius-pill); cursor: pointer; font-weight: 700;">Delete Account</button>
    </div>
  `;

  // Attach logout handler
  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', async () => {
      const { supabase } = await import('../lib/supabase.js');
      await supabase.auth.signOut();
    });
  }
}
