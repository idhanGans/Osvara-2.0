# Supabase Setup & Management Guide

## What is Supabase?

Supabase is an open-source PostgreSQL database platform with a clean UI, built-in REST API, and real-time subscriptions. Perfect for your e-commerce app.

---

## Getting Started with Supabase

### 1. Create Account & Project

1. Go to https://supabase.com
2. Click "Start your project"
3. Sign in with GitHub (recommended)
4. Click "New project"
5. Fill in:
   - **Name:** `osvara` (or your preference)
   - **Database Password:** Create strong password (save for later!)
   - **Region:** Choose closest to your users
   - **Pricing Plan:** Free (to start)
6. Click "Create new project" and wait 2-3 minutes

---

## 2. Access Your Database

### Get Connection Information

Once project is created:

1. Click "Project Settings" (gear icon, bottom left)
2. Go to "Database" tab
3. Under "Connection String", copy the URI:

   ```
   postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT_ID.supabase.co:5432/postgres
   ```

4. Replace `YOUR_PASSWORD` with the password you created
5. This is your `DATABASE_URL` for the backend

### Connection URLs by Use Case

**For Vercel Backend:**

```
postgresql://postgres:PASSWORD@db.YOUR_PROJECT_ID.supabase.co:5432/postgres
```

**For Local Development (Prisma):**

```
postgresql://postgres:PASSWORD@db.YOUR_PROJECT_ID.supabase.co:5432/postgres
```

---

## 3. Configure Supabase Client (Optional)

If you want to use Supabase's REST API directly (without going through your backend):

### Get API Keys

1. Go back to Project Settings
2. Click "API"
3. Copy:
   - **Project URL:** `https://YOUR_PROJECT_ID.supabase.co`
   - **anon (public) key:** `eyJhbGc...` (safe for frontend)
   - **service_role (secret) key:** `eyJhbGc...` (keep secret, backend only)

---

## 4. Database Migrations with Prisma

Your app uses Prisma to manage database schema.

### Initial Setup

```bash
# From backend directory
cd backend

# Create .env.local with DATABASE_URL
echo "DATABASE_URL=postgresql://postgres:PASSWORD@db.PROJECTID.supabase.co:5432/postgres" > .env.local

# Install dependencies
npm install

# Push schema to database (no migration files needed)
npx prisma migrate deploy
```

### View Database Tables

After running migrations:

1. Go to Supabase dashboard
2. Click "SQL Editor" (left menu)
3. Click "New query"
4. Run:
   ```sql
   SELECT * FROM information_schema.tables
   WHERE table_schema = 'public';
   ```

You should see: `Product`, `Order`, `OrderItem`

### Manage Data

1. Go to "Table Editor" in Supabase dashboard
2. Browse tables and manage data:
   - **Products:** Add/edit/delete products
   - **Orders:** View customer orders
   - **OrderItems:** View order line items

---

## 5. Backup & Recovery

Supabase automatically backs up your database.

### Enable Backups

1. Go to Project Settings
2. Click "Backups"
3. Free tier: Daily backups (30-day retention)
4. Pro tier: Hourly backups (90-day retention)

### How to Restore

Contact Supabase support to restore from backup.

---

## 6. Database Monitoring

### Check Database Health

In Supabase Dashboard:

1. Click "Database" (main menu)
2. View:
   - **Realtime** - Active connections
   - **Logs** - Query logs
   - **Performance** - Query performance

### Monitor Query Performance

```sql
-- View slow queries
SELECT query, calls, mean_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;
```

---

## 7. Seed Initial Data (Optional)

If you have `prisma/seed.ts`:

```bash
cd backend
npx prisma db seed
```

This runs your seed script to populate initial data (products, etc).

---

## 8. Security & Access Control

### Network Security

1. Go to Project Settings → "Database"
2. By default: All IPs allowed (fine for testing)
3. For production: Whitelist specific IPs

### Row-Level Security (RLS)

Optional advanced feature to control who can see what rows:

1. Go to "Authentication" in Supabase
2. Click "Users"
3. Set up policies as needed

For your MVP, you probably don't need this yet.

---

## 9. Real-time Subscriptions (Advanced)

Supabase includes real-time subscriptions via WebSockets.

Example - Get notified when new order created:

Backend:

```typescript
import { RealtimeClient } from "@supabase/realtime-js";

const realtime = new RealtimeClient(process.env.SUPABASE_URL!, {
  auth: { token: process.env.SUPABASE_ANON_KEY! },
});

const subscription = realtime
  .channel("public:Order")
  .on("INSERT", (payload) => {
    console.log("New order:", payload.new);
  })
  .subscribe();
```

**For MVP:** Keep it simple, you don't need this yet.

---

## 10. Troubleshooting Supabase

### Can't Connect to Database

```
Error: ECONNREFUSED server address doesn't match [...]
```

**Solutions:**

1. Check password is correct in DATABASE_URL
2. Verify project ID is correct
3. Check database is running (Supabase dashboard)
4. For local dev: you might need to set up local PostgreSQL instead

### Database Locked

```
Error: current transaction is aborted, commands ignored [...]
```

**Solution:** Supabase automatically recovers. Retry in 30 seconds.

### Out of Connections

```
Error: remaining connection slots are reserved for non-replication superuser connections
```

**Solution:**

- Free tier: 10 concurrent connections (limit)
- Upgrade to Pro plan for more connections
- Or optimize backend connection pool

### Migrations Failed

```
Error: Migration "XXXXXX" failed [...]
```

**Solutions:**

```bash
# Reset database (careful! deletes all data)
npx prisma migrate reset

# Or resolve manually in Supabase SQL Editor
# Then retry: npx prisma migrate deploy
```

---

## Comparison: Local vs Cloud Database

| Feature          | Local PostgreSQL | Supabase            |
| ---------------- | ---------------- | ------------------- |
| Setup Time       | 20+ minutes      | 2 minutes           |
| Cost             | Free (local)     | Free tier available |
| Backups          | Manual           | Automatic           |
| Accessible From  | Local only       | Anywhere            |
| No DevOps        | ✅ Yes           | ✅ Yes              |
| Production Ready | ✅ Yes           | ✅ Yes              |

**Recommendation:** Use Supabase for production and testing.

---

## Key Supabase URLs

| Resource      | URL                                     |
| ------------- | --------------------------------------- |
| Dashboard     | https://app.supabase.com                |
| Documentation | https://supabase.com/docs               |
| API Reference | https://supabase.com/docs/reference/api |
| Community     | https://discord.supabase.com            |

---

## Next Steps

1. ✅ Create Supabase project
2. ✅ Get DATABASE_URL
3. ✅ Run migrations: `npx prisma migrate deploy`
4. ✅ Verify tables created
5. ✅ Add sample products via Table Editor
6. ✅ Deploy backend to Vercel
7. ✅ Deploy frontend to Vercel

---

## Quick Commands Reference

```bash
# Validate schema
npx prisma validate

# Generate Prisma client
npx prisma generate

# Push schema changes
npx prisma migrate deploy

# Seed database with initial data
npx prisma db seed

# Open Prisma Studio (GUI for database)
npx prisma studio

# Reset database (WARNING: deletes all data)
npx prisma migrate reset
```

---

**Questions?** Check:

- Supabase Docs: https://supabase.com/docs
- Prisma Docs: https://www.prisma.io/docs
- GitHub Issues: https://github.com/supabase/supabase/issues
