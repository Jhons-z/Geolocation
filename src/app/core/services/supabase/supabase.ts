import { Service } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../../environments/environment';

@Service()
export class Supabase {
    public client: SupabaseClient;

  constructor() {
    this.client = createClient(environment.supabase.url, environment.supabase.key);
  }
}
