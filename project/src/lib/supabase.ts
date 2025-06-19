import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string
          avatar_url: string | null
          role: 'admin' | 'manager' | 'employee' | 'client'
          department: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name: string
          avatar_url?: string | null
          role?: 'admin' | 'manager' | 'employee' | 'client'
          department?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          avatar_url?: string | null
          role?: 'admin' | 'manager' | 'employee' | 'client'
          department?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          name: string
          description: string | null
          status: 'planning' | 'active' | 'on_hold' | 'completed' | 'cancelled'
          type: 'web' | 'mobile' | 'ai' | 'hybrid'
          client_id: string
          manager_id: string
          budget: number | null
          start_date: string
          end_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          status?: 'planning' | 'active' | 'on_hold' | 'completed' | 'cancelled'
          type: 'web' | 'mobile' | 'ai' | 'hybrid'
          client_id: string
          manager_id: string
          budget?: number | null
          start_date: string
          end_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          status?: 'planning' | 'active' | 'on_hold' | 'completed' | 'cancelled'
          type?: 'web' | 'mobile' | 'ai' | 'hybrid'
          client_id?: string
          manager_id?: string
          budget?: number | null
          start_date?: string
          end_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}