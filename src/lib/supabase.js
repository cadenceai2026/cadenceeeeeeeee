import { createClient } from '@supabase/supabase-js'

// You'll need to provide these variables in Vercel as Environment Variables
// For local dev, create a .env.local file with these keys.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Example Database Structure functions for Cadence AI

export async function getUserProfile(userId) {
  const { data, error } = await supabase
    .from('users')
    .select('display_name, current_xp, level')
    .eq('id', userId)
    .single()
  
  if (error) console.error('Error fetching profile:', error)
  return data
}

export async function getActivities(userId) {
  const { data, error } = await supabase
    .from('activities')
    .select('*')
    .eq('user_id', userId)
    .order('timestamp', { ascending: false })
    
  if (error) console.error('Error fetching activities:', error)
  return data
}
