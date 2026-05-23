export function renderDashboard() {
  const container = document.getElementById('view-dashboard');
  container.innerHTML = `
    <div class="header-row">
      <h2 class="heading">Dashboard</h2>
    </div>
    
    <!-- Greeting Card -->
    <div class="surface-card glass" style="padding: 24px; margin-bottom: 24px;">
      <h3 class="heading">Good morning, Alex</h3>
      <p class="text-muted" style="margin-top: 8px;">Ready to hit your weekly goal?</p>
      
      <!-- XP Progress -->
      <div style="margin-top: 24px; display: flex; align-items: center; gap: 16px;">
        <div class="chip" style="font-weight: 700;">Lvl 12</div>
        <div style="flex: 1; height: 6px; background: var(--surface-high); border-radius: var(--radius-pill); overflow: hidden;">
          <div class="glow-primary" style="width: 60%; height: 100%; background: var(--primary);"></div>
        </div>
        <div class="mono text-muted" style="font-size: 0.8rem;">2400 / 4000 XP</div>
      </div>
    </div>
    
    <!-- This Week Stats -->
    <h4 class="heading" style="margin-bottom: 16px;">This Week</h4>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px;">
      <div class="surface-card glass" style="padding: 16px; text-align: center;">
        <div class="mono" style="font-size: 1.5rem; color: var(--primary);">42.5</div>
        <div class="text-muted" style="font-size: 0.8rem; margin-top: 4px;">km run</div>
      </div>
      <div class="surface-card glass" style="padding: 16px; text-align: center;">
        <div class="mono" style="font-size: 1.5rem; color: var(--primary);">4</div>
        <div class="text-muted" style="font-size: 0.8rem; margin-top: 4px;">activities</div>
      </div>
      <div class="surface-card glass" style="padding: 16px; text-align: center;">
        <div class="mono" style="font-size: 1.5rem; color: var(--primary);">4h 12m</div>
        <div class="text-muted" style="font-size: 0.8rem; margin-top: 4px;">time</div>
      </div>
    </div>
    
    <!-- Active Challenge -->
    <div class="surface-card border-glow" style="padding: 20px; margin-bottom: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <span class="chip active" style="margin-bottom: 12px;">Weekly Challenge</span>
          <h4 class="heading">Norwegian Threshold Session</h4>
          <p class="text-muted" style="font-size: 0.9rem; margin-top: 4px;">Accumulate 40 mins in Zone 3/4</p>
        </div>
        <span class="chip">2 days left</span>
      </div>
      <div style="margin-top: 16px; display: flex; align-items: center; gap: 12px;">
        <div style="flex: 1; height: 4px; background: var(--surface-high); border-radius: var(--radius-pill);">
          <div style="width: 45%; height: 100%; background: var(--primary); border-radius: var(--radius-pill);"></div>
        </div>
        <span class="mono" style="font-size: 0.8rem;">18/40m</span>
      </div>
    </div>
  `;
}
