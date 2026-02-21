"use server";

import { createClient } from "@supabase/supabase-js";

export async function joinWaitlist(email: string) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      console.warn("Supabase env vars missing. Simulating success for local dev.");
      return { success: true, simulated: true };
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const { error } = await supabase.from("waitlist").insert([{ email, created_at: new Date().toISOString() }]);
    
    if (error) {
      console.error("Supabase Error:", error);
      return { success: false, error: error.message };
    }
    
    return { success: true };
  } catch (err: any) {
    console.error("Action Error:", err);
    return { success: false, error: err.message };
  }
}