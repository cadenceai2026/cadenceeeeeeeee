import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

console.log("Strava Webhook Edge Function starting up...")

serve(async (req) => {
  // Strava Webhook Verification (GET request)
  if (req.method === 'GET') {
    const url = new URL(req.url);
    const challenge = url.searchParams.get('hub.challenge');
    if (challenge) {
      return new Response(
        JSON.stringify({ "hub.challenge": challenge }),
        { headers: { "Content-Type": "application/json" } },
      );
    }
  }

  // Strava Webhook Event (POST request)
  if (req.method === 'POST') {
    try {
      const payload = await req.json();
      console.log('Received Strava Event:', payload);

      // Example payload from Strava
      // {
      //   "aspect_type": "create",
      //   "event_time": 1516126040,
      //   "object_id": 1360128428,
      //   "object_type": "activity",
      //   "owner_id": 134815,
      //   "subscription_id": 120475
      // }

      if (payload.object_type === 'activity' && payload.aspect_type === 'create') {
        const strava_user_id = payload.owner_id;
        const activity_id = payload.object_id;

        // In a real scenario, you would:
        // 1. Map strava_user_id to your Supabase auth user_id
        // 2. Fetch the full activity details from Strava API using the user's stored access_token
        // 3. Insert the activity into your `activities` table
        // 4. Trigger the process-xp function

        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
        const supabase = createClient(supabaseUrl, supabaseKey);

        // Simulated trigger for the Process XP Function
        // Assuming we fetched the user_id and activity details
        const mock_user_id = "user-id-placeholder";
        
        await fetch(`${supabaseUrl}/functions/v1/process-xp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${supabaseKey}`
            },
            body: JSON.stringify({
                user_id: mock_user_id,
                activity_type: 'Run',
                duration_seconds: 3600,
                distance_meters: 10000,
                avg_heartrate: 150
            })
        });
      }

      return new Response("OK", { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }

  return new Response("Method not allowed", { status: 405 });
})
