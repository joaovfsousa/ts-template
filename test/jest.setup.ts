import { config } from 'dotenv';

config({ path: '.env' });
config({ path: '.env.test', override: true });
