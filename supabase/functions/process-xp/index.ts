import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

console.log("Process XP Edge Function starting up...")

serve(async (req) => {
  try {
    const payload = await req.json();
    
    // Validate request...
    const { user_id, activity_type, duration_seconds, distance_meters, avg_heartrate } = payload;
    
    // Logic: Calculate XP
    // +150 for volume base, +50 for hitting HR zones perfectly
    let xp_earned = 150;
    
    if (avg_heartrate > 140 && avg_heartrate < 165) {
       xp_earned += 50; // HR Zone Bonus
    }
    
    // Setup Supabase Client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Update user current_xp and check for Level up
    const { data: userData, error: fetchError } = await supabase
      .from('user_stats')
      .select('current_xp, level')
      .eq('user_id', user_id)
      .single();
      
    if (fetchError) throw fetchError;
    
    const newXp = userData.current_xp + xp_earned;
    let newLevel = userData.level;
    
    // Simple level threshold (e.g. 1000 XP per level)
    if (newXp >= (newLevel * 1000)) {
      newLevel += 1;
    }
    
    const { error: updateError } = await supabase
      .from('user_stats')
      .update({ current_xp: newXp, level: newLevel })
      .eq('user_id', user_id);
      
    if (updateError) throw updateError;
    
    // Dispatch realtime event for app.html to listen and trigger the Misión Completada Animation
    await supabase.channel('xp-updates').send({
      type: 'broadcast',
      event: 'xp-dropped',
      payload: { user_id, xp_earned, newLevel }
    });

    return new Response(
      JSON.stringify({ success: true, xp_earned, newLevel }),
      { headers: { "Content-Type": "application/json" } },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { "Content-Type": "application/json" }, status: 400 },
    )
  }
})
