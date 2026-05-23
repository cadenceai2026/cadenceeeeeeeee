export function renderCoach() {
  const container = document.getElementById('view-coach');
  container.innerHTML = `
    <div class="header-row" style="margin-bottom: 12px;">
      <h2 class="heading">AI Coach</h2>
      <span class="chip" style="background: rgba(110, 255, 192, 0.1); border-color: var(--primary); color: var(--primary);">CadenceGPT-4</span>
    </div>
    
    <div style="display: flex; flex-direction: column; height: calc(100vh - 160px);">
      <!-- Chat Area -->
      <div id="chat-history" style="flex: 1; overflow-y: auto; padding: 12px 0; display: flex; flex-direction: column; gap: 20px;">
        
        <!-- AI Message -->
        <div style="display: flex; gap: 12px; align-items: flex-start; max-width: 85%;">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </div>
          <div class="surface-high" style="padding: 12px 16px; border-radius: 4px 16px 16px 16px; font-size: 0.95rem;">
            Good morning! Looking at your recent Hyrox simulation and HRV data, your body is well-recovered. Would you like a Norwegian-style threshold session today or focus on Zone 2 recovery?
          </div>
        </div>
        
        <!-- User Message -->
        <div style="display: flex; justify-content: flex-end;">
          <div style="padding: 12px 16px; border-radius: 16px 16px 4px 16px; background: rgba(110, 255, 192, 0.15); border: 1px solid rgba(110, 255, 192, 0.3); font-size: 0.95rem; max-width: 85%;">
            Let's do the threshold session. Give me the breakdown with heart rate targets.
          </div>
        </div>
        
        <!-- AI Message with Card -->
        <div style="display: flex; gap: 12px; align-items: flex-start; max-width: 95%;">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
            <div class="surface-high" style="padding: 12px 16px; border-radius: 4px 16px 16px 16px; font-size: 0.95rem;">
              Here is your Norwegian Double Threshold (Session A) structure. Keep your HR strictly in Zone 3 (155-165 bpm) during the intervals. Avoid spiking into Zone 4!
            </div>
            
            <!-- Structured Plan Card -->
            <div class="surface-card glass" style="padding: 16px; margin-top: 4px; border-left: 3px solid var(--primary);">
              <h4 class="heading" style="margin-bottom: 12px;">Threshold 5x6min</h4>
              
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
                  <span class="text-muted">Warm up</span>
                  <span class="mono">15:00 @ Z1/Z2</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.9rem; align-items: center;">
                  <span style="color: var(--primary); font-weight: bold;">5x Threshold Intervals</span>
                  <div style="text-align: right;">
                    <span class="mono">6:00 @ 155-165 bpm</span>
                    <div class="text-muted" style="font-size: 0.75rem;">1:30 jog recovery</div>
                  </div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
                  <span class="text-muted">Cool down</span>
                  <span class="mono">10:00 @ Z1</span>
                </div>
              </div>
              <button class="primary" style="width: 100%; margin-top: 16px; padding: 10px;">Load to Watch</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Input Area -->
      <div style="padding-top: 12px; border-top: 1px solid var(--outline); background: var(--background);">
        <div style="display: flex; gap: 8px; margin-bottom: 12px; overflow-x: auto; white-space: nowrap; padding-bottom: 4px;">
          <span class="chip hover-scale" style="cursor:pointer">Plan my week</span>
          <span class="chip hover-scale" style="cursor:pointer">Analyze last run</span>
          <span class="chip hover-scale" style="cursor:pointer">I'm tired today</span>
        </div>
        <div style="display: flex; gap: 8px;">
          <input type="text" placeholder="Ask your coach..." style="flex: 1;" />
          <button class="primary" style="border-radius: var(--radius-input); padding: 0 16px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#000"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
}
