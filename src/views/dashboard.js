export function renderDashboard() {
  const container = document.getElementById('view-dashboard');
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
      <h2 class="heading" style="font-size: 2rem; color: #fff;">Base de Operaciones</h2>
      <div class="liquid-glass" style="padding: 6px 12px; border-radius: var(--radius-pill); display: flex; align-items: center; gap: 8px;">
        <div style="width: 8px; height: 8px; background: var(--primary); border-radius: 50%; box-shadow: 0 0 10px var(--primary);"></div>
        <span class="mono" style="font-size: 0.75rem; color: var(--primary); letter-spacing: 1px;">SINC: STRAVA</span>
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
          <div style="width: 15%; height: 100%; background: var(--primary); border-radius: var(--radius-pill); box-shadow: 0 0 15px var(--primary);"></div>
        </div>
        <span class="mono" style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">1000 XP</span>
      </div>
      <div style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">850 XP para el Nivel 2</div>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
      <!-- Fatigue State -->
      <div class="liquid-glass" style="border-radius: 1.25rem; padding: 24px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <svg style="width: 20px; height: 20px; color: var(--primary);" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h3 class="heading" style="font-size: 1.1rem; color: #fff;">Estado de Fatiga</h3>
        </div>
        <div style="font-size: 2rem; font-weight: 700; color: #fff; margin-bottom: 4px;">Óptimo</div>
        <p style="color: rgba(255,255,255,0.5); font-size: 0.85rem;">Tu Ratio Agudo:Crónico está en 1.1. Estás en la zona perfecta para asimilar carga de entrenamiento.</p>
      </div>

      <!-- Quick Stats -->
      <div class="liquid-glass" style="border-radius: 1.25rem; padding: 24px;">
         <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <svg style="width: 20px; height: 20px; color: var(--primary);" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h3 class="heading" style="font-size: 1.1rem; color: #fff;">Esta Semana</h3>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <div style="font-size: 2rem; font-weight: 700; color: #fff; line-height: 1;">0.0</div>
            <div style="color: rgba(255,255,255,0.5); font-size: 0.8rem; margin-top: 4px;">km recorridos</div>
          </div>
          <div>
            <div style="font-size: 2rem; font-weight: 700; color: #fff; line-height: 1;">0</div>
            <div style="color: rgba(255,255,255,0.5); font-size: 0.8rem; margin-top: 4px;">sesiones</div>
          </div>
        </div>
      </div>
    </div>
  `;
}
