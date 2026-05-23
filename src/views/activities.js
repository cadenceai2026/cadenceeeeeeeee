export function renderActivities() {
  const container = document.getElementById('view-activities');
  container.innerHTML = `
    <div class="header-row">
      <h2 class="heading">Activities</h2>
    </div>
    
    <!-- Filter Chips -->
    <div style="display: flex; gap: 8px; margin-bottom: 24px; overflow-x: auto; padding-bottom: 8px; white-space: nowrap;">
      <span class="chip active">All</span>
      <span class="chip">Runs</span>
      <span class="chip">Hyrox / Hybrid</span>
      <span class="chip">Thresholds</span>
    </div>
    
    <!-- Activity Feed -->
    <div style="display: flex; flex-direction: column; gap: 16px;">
      
      <!-- Hybrid Activity Card -->
      <div class="surface-card hover-scale" style="padding: 16px; cursor: pointer;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(207, 189, 255, 0.15); display: flex; align-items: center; justify-content: center;">
              <!-- Hybrid/Strength icon -->
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--secondary)"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/></svg>
            </div>
            <div>
              <h4 class="heading" style="font-size: 1.1rem; margin:0;">Hyrox Simulation</h4>
              <p class="text-muted" style="font-size: 0.85rem; margin:0;">Today at 6:30 AM</p>
            </div>
          </div>
          <span class="chip" style="height: fit-content; background: rgba(110, 255, 192, 0.1); border-color: var(--primary); color: var(--primary); font-weight: bold;">+350 XP</span>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; border-top: 1px solid var(--outline); padding-top: 12px;">
          <div>
            <div class="text-muted" style="font-size: 0.75rem;">Duration</div>
            <div class="mono">1h 15m</div>
          </div>
          <div>
            <div class="text-muted" style="font-size: 0.75rem;">Avg HR (Zone 4)</div>
            <div class="mono" style="color: var(--error);">168 bpm</div>
          </div>
          <div>
            <div class="text-muted" style="font-size: 0.75rem;">Run Volume</div>
            <div class="mono">8.0 km</div>
          </div>
        </div>
      </div>

      <!-- Norwegian Run Card -->
      <div class="surface-card hover-scale" style="padding: 16px; cursor: pointer;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(110, 255, 192, 0.1); display: flex; align-items: center; justify-content: center;">
              <!-- Run icon -->
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary)"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/></svg>
            </div>
            <div>
              <h4 class="heading" style="font-size: 1.1rem; margin:0;">Morning Z2 Base</h4>
              <p class="text-muted" style="font-size: 0.85rem; margin:0;">Yesterday at 7:00 AM</p>
            </div>
          </div>
          <span class="chip" style="height: fit-content; background: rgba(110, 255, 192, 0.1); border-color: var(--primary); color: var(--primary); font-weight: bold;">+200 XP</span>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; border-top: 1px solid var(--outline); padding-top: 12px;">
          <div>
            <div class="text-muted" style="font-size: 0.75rem;">Distance</div>
            <div class="mono">10.2 km</div>
          </div>
          <div>
            <div class="text-muted" style="font-size: 0.75rem;">Pace</div>
            <div class="mono">5:30 /km</div>
          </div>
          <div>
            <div class="text-muted" style="font-size: 0.75rem;">Avg HR (Zone 2)</div>
            <div class="mono" style="color: var(--primary);">135 bpm</div>
          </div>
        </div>
      </div>
      
    </div>
  `;
}
