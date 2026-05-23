export function renderCoach() {
  const container = document.getElementById('view-coach');
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
      <h2 class="heading" style="font-size: 2rem; color: #fff;">Coach IA</h2>
      <div class="liquid-glass" style="padding: 6px 12px; border-radius: var(--radius-pill); display: flex; align-items: center; gap: 8px;">
        <div style="width: 8px; height: 8px; background: var(--primary); border-radius: 50%; box-shadow: 0 0 10px var(--primary);"></div>
        <span class="mono" style="font-size: 0.75rem; color: var(--primary); letter-spacing: 1px;">MÉTODO NORUEGO</span>
      </div>
    </div>
    
    <div style="display: flex; flex-direction: column; height: calc(100vh - 160px);">
      <!-- Chat Area -->
      <div id="chat-history" style="flex: 1; overflow-y: auto; padding: 12px 0; display: flex; flex-direction: column; gap: 24px;">
        
        <!-- AI Message -->
        <div style="display: flex; gap: 16px; align-items: flex-start; max-width: 85%;">
          <div class="liquid-glass" style="width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 0 15px rgba(110, 255, 192, 0.2);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </div>
          <div class="liquid-glass-strong" style="padding: 16px 20px; border-radius: 4px 24px 24px 24px; font-size: 0.95rem; color: rgba(255,255,255,0.9); line-height: 1.6;">
            ¡Buenos días! Analizando tu simulación de Hyrox reciente y tus datos de VFC, tu cuerpo está bien recuperado. ¿Te gustaría una sesión de umbral estilo noruego hoy o nos enfocamos en recuperación en Zona 2?
          </div>
        </div>
        
        <!-- User Message -->
        <div style="display: flex; justify-content: flex-end;">
          <div class="liquid-glass" style="padding: 16px 20px; border-radius: 24px 24px 4px 24px; background: rgba(110, 255, 192, 0.1); border: 1px solid rgba(110, 255, 192, 0.2); font-size: 0.95rem; max-width: 85%; color: #fff;">
            Vamos a hacer la sesión de umbral. Dame la estructura con los objetivos de frecuencia cardíaca.
          </div>
        </div>
        
        <!-- AI Message with Card -->
        <div style="display: flex; gap: 16px; align-items: flex-start; max-width: 95%;">
          <div class="liquid-glass" style="width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 0 15px rgba(110, 255, 192, 0.2);">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
            <div class="liquid-glass-strong" style="padding: 16px 20px; border-radius: 4px 24px 24px 24px; font-size: 0.95rem; color: rgba(255,255,255,0.9); line-height: 1.6;">
              Aquí tienes tu estructura de Doble Umbral Noruego (Sesión A). ¡Mantén tu FC estrictamente en Zona 3 (155-165 lpm) durante los intervalos! Evita picos en Zona 4.
            </div>
            
            <!-- Structured Plan Card -->
            <div class="liquid-glass" style="padding: 24px; border-radius: 1.5rem; border-left: 4px solid var(--primary);">
              <h4 class="heading" style="margin-bottom: 16px; font-size: 1.25rem; color: #fff;">Umbral 5x6min</h4>
              
              <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.95rem; align-items: center;">
                  <span style="color: rgba(255,255,255,0.6);">Calentamiento</span>
                  <span class="mono text-white">15:00 @ Z1/Z2</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.95rem; align-items: flex-start; padding: 12px 0; border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05);">
                  <span style="color: var(--primary); font-weight: bold;">5x Intervalos de Umbral</span>
                  <div style="text-align: right;">
                    <span class="mono text-white">6:00 @ 155-165 lpm</span>
                    <div style="font-size: 0.8rem; color: rgba(255,255,255,0.4); margin-top: 4px;">1:30 recup. trote</div>
                  </div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.95rem; align-items: center;">
                  <span style="color: rgba(255,255,255,0.6);">Enfriamiento</span>
                  <span class="mono text-white">10:00 @ Z1</span>
                </div>
              </div>
              <button style="width: 100%; margin-top: 24px; padding: 14px; background: var(--primary); color: #000; border-radius: var(--radius-pill); font-weight: bold; font-size: 1rem; border: none; cursor: pointer; transition: transform 0.2s; box-shadow: 0 0 20px rgba(110, 255, 192, 0.3);" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                Sincronizar con Reloj
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Input Area -->
      <div style="padding-top: 20px;">
        <div style="display: flex; gap: 12px; margin-bottom: 16px; overflow-x: auto; white-space: nowrap; padding-bottom: 8px;">
          <span class="liquid-glass" style="padding: 8px 16px; border-radius: var(--radius-pill); font-size: 0.85rem; cursor: pointer;">Planear semana</span>
          <span class="liquid-glass" style="padding: 8px 16px; border-radius: var(--radius-pill); font-size: 0.85rem; cursor: pointer;">Analizar última carrera</span>
          <span class="liquid-glass" style="padding: 8px 16px; border-radius: var(--radius-pill); font-size: 0.85rem; cursor: pointer;">Hoy me siento cansado</span>
        </div>
        <div class="liquid-glass" style="display: flex; gap: 8px; padding: 8px; border-radius: 999px;">
          <input type="text" id="coach-input" placeholder="Pregunta a tu coach..." style="flex: 1; background: transparent; border: none; padding: 0 16px; color: #fff; font-size: 0.95rem; outline: none; box-shadow: none;" />
          <button id="coach-send-btn" style="background: var(--primary); color: #000; border-radius: 50%; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#000"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;

  const input = document.getElementById('coach-input');
  const sendBtn = document.getElementById('coach-send-btn');
  const chatHistory = document.getElementById('chat-history');

  const sendMessage = () => {
    const text = input.value.trim();
    if (!text) return;

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.style.display = 'flex';
    userMsg.style.justifyContent = 'flex-end';
    userMsg.innerHTML = `
      <div class="liquid-glass" style="padding: 16px 20px; border-radius: 24px 24px 4px 24px; background: rgba(110, 255, 192, 0.1); border: 1px solid rgba(110, 255, 192, 0.2); font-size: 0.95rem; max-width: 85%; color: #fff;">
        ${text}
      </div>
    `;
    chatHistory.appendChild(userMsg);
    input.value = '';
    chatHistory.scrollTop = chatHistory.scrollHeight;

    // Simulate AI typing
    setTimeout(() => {
      const aiMsg = document.createElement('div');
      aiMsg.style.display = 'flex';
      aiMsg.style.gap = '16px';
      aiMsg.style.alignItems = 'flex-start';
      aiMsg.style.maxWidth = '85%';
      aiMsg.innerHTML = `
        <div class="liquid-glass" style="width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 0 15px rgba(110, 255, 192, 0.2);">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
        </div>
        <div class="liquid-glass-strong" style="padding: 16px 20px; border-radius: 4px 24px 24px 24px; font-size: 0.95rem; color: rgba(255,255,255,0.9); line-height: 1.6;">
          Entendido. Analizaré tu perfil y ajustaré el plan según tus indicaciones para optimizar tu rendimiento.
        </div>
      `;
      chatHistory.appendChild(aiMsg);
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }, 1000);
  };

  if (sendBtn && input) {
    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  }
}
