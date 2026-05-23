export function renderCompete() {
  const container = document.getElementById('view-compete');
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
      <h2 class="heading" style="font-size: 2rem; color: #fff;">Competición</h2>
      <div class="liquid-glass" style="padding: 6px 12px; border-radius: var(--radius-pill); display: flex; align-items: center; gap: 8px;">
        <div style="width: 8px; height: 8px; background: #FFD700; border-radius: 50%; box-shadow: 0 0 10px #FFD700;"></div>
        <span class="mono" style="font-size: 0.75rem; color: #FFD700; letter-spacing: 1px;">LIGA ORO</span>
      </div>
    </div>
    
    <!-- Tab Navigation -->
    <div style="display: flex; gap: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 32px; padding-bottom: 8px;">
      <div style="font-family: var(--font-heading); font-weight: 700; color: var(--primary); border-bottom: 2px solid var(--primary); padding-bottom: 6px; cursor: pointer;">Ligas Globales</div>
      <div style="font-family: var(--font-heading); font-weight: 700; color: rgba(255,255,255,0.4); cursor: pointer; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">Batallas 1v1</div>
      <div style="font-family: var(--font-heading); font-weight: 700; color: rgba(255,255,255,0.4); cursor: pointer; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">Desbloqueables</div>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr; gap: 32px;">
      
      <!-- Global Leaderboard (Leagues) -->
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 16px;">
          <div>
            <h3 class="heading" style="font-size: 1.5rem; color: #fff;">Leaderboard: Oro</h3>
            <p style="color: rgba(255,255,255,0.5); font-size: 0.85rem; margin-top: 4px;">Los 10 mejores ascienden a Élite el domingo.</p>
          </div>
          <span class="mono" style="font-size: 0.8rem; color: var(--primary);">Termina en 2d 14h</span>
        </div>
        
        <div class="liquid-glass-strong" style="border-radius: 1.5rem; overflow: hidden;">
          <!-- Top 1 -->
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; background: rgba(255, 215, 0, 0.1); border-bottom: 1px solid rgba(255,255,255,0.05);">
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="font-weight: bold; color: #FFD700; width: 24px; text-align: center;">1</div>
              <div style="width: 40px; height: 40px; border-radius: 50%; background: url('https://i.pravatar.cc/150?img=11') center/cover; border: 2px solid #FFD700; box-shadow: 0 0 10px rgba(255,215,0,0.3);"></div>
              <div style="font-weight: bold; color: #fff;">David Goggins</div>
            </div>
            <div class="mono" style="color: var(--primary); font-weight: bold;">12,450 XP</div>
          </div>
          
          <!-- Top 2 -->
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; background: rgba(192, 192, 192, 0.05); border-bottom: 1px solid rgba(255,255,255,0.05);">
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="font-weight: bold; color: #C0C0C0; width: 24px; text-align: center;">2</div>
              <div style="width: 40px; height: 40px; border-radius: 50%; background: url('https://i.pravatar.cc/150?img=32') center/cover; border: 2px solid #C0C0C0;"></div>
              <div style="font-weight: bold; color: #fff;">Sarah T.</div>
            </div>
            <div class="mono" style="color: var(--primary); font-weight: bold;">11,200 XP</div>
          </div>
          
          <!-- You -->
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; background: rgba(110, 255, 192, 0.15); border-left: 4px solid var(--primary);">
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="font-weight: bold; color: var(--primary); width: 24px; text-align: center;">12</div>
              <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--surface-high); border: 2px solid var(--primary);"></div>
              <div style="font-weight: bold; color: #fff;">Tú</div>
            </div>
            <div class="mono" style="color: var(--primary); font-weight: bold;">8,450 XP</div>
          </div>
        </div>
      </div>
      
      <!-- 1v1 Battles -->
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
           <h3 class="heading" style="font-size: 1.5rem; color: #fff;">Batalla Activa (1v1)</h3>
           <button style="background: transparent; color: var(--primary); border: 1px solid var(--primary); border-radius: var(--radius-pill); padding: 4px 12px; font-size: 0.8rem; cursor: pointer;">Retar a amigo</button>
        </div>
        
        <div class="liquid-glass" style="border-radius: 1.5rem; padding: 32px; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 120px; background: linear-gradient(135deg, rgba(110,255,192,0.1), rgba(0,0,0,0)); z-index: 0;"></div>
          
          <div style="position: relative; z-index: 1;">
            <div style="text-align: center; margin-bottom: 24px;">
              <span style="background: rgba(255,255,255,0.1); color: #fff; padding: 4px 12px; border-radius: var(--radius-pill); font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.2);">Desafío de Volumen (7 Días)</span>
            </div>
            
            <!-- Players -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; padding: 0 20px;">
              <div style="text-align: center;">
                <div style="width: 80px; height: 80px; border-radius: 50%; background: var(--surface-high); border: 3px solid var(--primary); margin: 0 auto 12px; box-shadow: 0 0 20px rgba(110, 255, 192, 0.4);"></div>
                <div style="font-weight: bold; font-size: 1.1rem; color: #fff;">Tú</div>
                <div class="mono" style="color: var(--primary); font-size: 1.2rem; margin-top: 4px;">42.5 km</div>
              </div>
              
              <div style="font-family: var(--font-heading); font-weight: 800; font-size: 2rem; color: rgba(255,255,255,0.2); font-style: italic;">VS</div>
              
              <div style="text-align: center;">
                <div style="width: 80px; height: 80px; border-radius: 50%; background: url('https://i.pravatar.cc/150?img=32') center/cover; border: 3px solid #FF4D4D; margin: 0 auto 12px; box-shadow: 0 0 20px rgba(255, 77, 77, 0.4);"></div>
                <div style="font-weight: bold; font-size: 1.1rem; color: #fff;">Sarah T.</div>
                <div class="mono" style="color: #FF4D4D; font-size: 1.2rem; margin-top: 4px;">38.2 km</div>
              </div>
            </div>
            
            <!-- Progress Bar -->
            <div style="display: flex; height: 16px; border-radius: var(--radius-pill); overflow: hidden; background: rgba(0,0,0,0.5); box-shadow: inset 0 2px 5px rgba(0,0,0,0.5);">
              <div style="width: 53%; background: var(--primary); box-shadow: 0 0 15px var(--primary); position: relative;">
                <div style="position: absolute; right: 0; top: 0; bottom: 0; width: 2px; background: #fff;"></div>
              </div>
              <div style="width: 47%; background: #FF4D4D; box-shadow: 0 0 15px #FF4D4D;"></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  `;
}
