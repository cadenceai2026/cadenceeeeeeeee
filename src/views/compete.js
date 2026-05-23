export function renderCompete() {
  const container = document.getElementById('view-compete');
  container.innerHTML = `
    <div class="header-row">
      <h2 class="heading">Compete Hub</h2>
    </div>
    
    <!-- Tab Navigation -->
    <div style="display: flex; gap: 16px; border-bottom: 1px solid var(--outline); margin-bottom: 24px; padding-bottom: 8px;">
      <div style="font-family: var(--font-heading); font-weight: 700; color: var(--primary); border-bottom: 2px solid var(--primary); padding-bottom: 6px;">Battles</div>
      <div style="font-family: var(--font-heading); font-weight: 700; color: var(--muted); cursor: pointer;">Leagues</div>
      <div style="font-family: var(--font-heading); font-weight: 700; color: var(--muted); cursor: pointer;">Battle Pass</div>
    </div>
    
    <!-- Battles Content -->
    <h3 class="heading" style="margin-bottom: 16px; font-size: 1.2rem;">Active Battle</h3>
    
    <div class="surface-card border-glow" style="padding: 24px; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 100px; background: linear-gradient(135deg, rgba(110,255,192,0.1), rgba(0,0,0,0)); z-index: 0;"></div>
      
      <div style="position: relative; z-index: 1;">
        <div style="text-align: center; margin-bottom: 20px;">
          <span class="chip">Distance War (7 Days)</span>
          <div class="mono text-muted" style="font-size: 0.8rem; margin-top: 8px;">Ends in 2d 14h</div>
        </div>
        
        <!-- Players -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
          <div style="text-align: center;">
            <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--surface-high); border: 2px solid var(--primary); margin: 0 auto 8px;"></div>
            <div style="font-weight: bold;">You</div>
            <div class="mono" style="color: var(--primary);">42.5 km</div>
          </div>
          
          <div style="font-family: var(--font-heading); font-weight: 800; font-size: 1.5rem; color: var(--muted); font-style: italic;">VS</div>
          
          <div style="text-align: center;">
            <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--surface-high); border: 2px solid var(--error); margin: 0 auto 8px;"></div>
            <div style="font-weight: bold;">Sarah T.</div>
            <div class="mono" style="color: var(--error);">38.2 km</div>
          </div>
        </div>
        
        <!-- Progress Bar -->
        <div style="display: flex; height: 12px; border-radius: var(--radius-pill); overflow: hidden; background: var(--surface-high);">
          <div style="width: 53%; background: var(--primary); box-shadow: 0 0 10px var(--primary);"></div>
          <div style="width: 47%; background: var(--error); box-shadow: 0 0 10px var(--error);"></div>
        </div>
      </div>
    </div>
    
    <button class="primary" style="width: 100%; margin-top: 24px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#000" style="margin-right: 8px;"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
      Challenge a Friend
    </button>
  `;
}
