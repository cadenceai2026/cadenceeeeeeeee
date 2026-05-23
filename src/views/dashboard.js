export function renderDashboard() {
  const container = document.getElementById('view-dashboard');
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
      <h2 class="heading" style="font-size: 2rem; color: #fff;">Base de Operaciones</h2>
      <div class="liquid-glass" style="padding: 6px 12px; border-radius: var(--radius-pill); display: flex; align-items: center; gap: 8px;">
        <div style="width: 8px; height: 8px; background: rgba(255,255,255,0.3); border-radius: 50%;"></div>
        <span class="mono" style="font-size: 0.75rem; color: rgba(255,255,255,0.5); letter-spacing: 1px;">SIN DATOS</span>
      </div>
    </div>
    
    <!-- Player Card: Level & XP -->
    <div class="liquid-glass-strong" style="border-radius: 2rem; padding: 32px; margin-bottom: 24px; text-align: center;">
      <div style="margin-bottom: 16px;">
        <span class="heading" style="font-size: 4rem; color: #fff; line-height: 1;">LVL 1</span>
      </div>
      <p style="color: rgba(255,255,255,0.6); font-size: 0.9rem; margin-bottom: 24px;">Principiante Híbrido</p>
      
      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
        <span class="mono" style="font-size: 0.75rem; color: var(--primary);">0 XP</span>
        <div class="liquid-glass" style="flex: 1; height: 8px; border-radius: var(--radius-pill);">
          <div style="width: 0%; height: 100%; background: var(--primary); border-radius: var(--radius-pill); box-shadow: 0 0 15px var(--primary);"></div>
        </div>
        <span class="mono" style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">1000 XP</span>
      </div>
      <div style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">1000 XP para el Nivel 2</div>
    </div>
    
    <!-- Empty State: Connect Strava Persuasive CTA -->
    <div class="liquid-glass" style="border-radius: 1.5rem; padding: 40px 24px; text-align: center; position: relative; overflow: hidden; border: 1px solid rgba(252, 76, 2, 0.3);">
      <div style="position: absolute; top: -50px; left: 50%; transform: translateX(-50%); width: 200px; height: 200px; background: radial-gradient(circle, rgba(252, 76, 2, 0.15) 0%, rgba(0,0,0,0) 70%); z-index: 0; pointer-events: none;"></div>
      
      <div style="position: relative; z-index: 1;">
        <div style="width: 64px; height: 64px; background: rgba(255,255,255,0.05); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
          <svg viewBox="0 0 24 24" class="w-8 h-8" fill="#FC4C02">
            <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/>
          </svg>
        </div>
        
        <h3 class="heading" style="font-size: 1.5rem; color: #fff; margin-bottom: 12px;">Enciende tu Motor</h3>
        <p style="color: rgba(255,255,255,0.6); font-size: 0.95rem; max-width: 320px; margin: 0 auto 24px; line-height: 1.5;">
          Connect Strava to unlock your AI Coach and start earning XP from your real-world workouts.
        </p>
        
        <button id="btn-connect-strava" style="background: #FC4C02; color: #fff; font-weight: bold; padding: 14px 28px; border-radius: var(--radius-pill); border: none; font-size: 1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 0 20px rgba(252, 76, 2, 0.4);" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
          Connect Strava
        </button>
      </div>
    </div>
  `;
}
