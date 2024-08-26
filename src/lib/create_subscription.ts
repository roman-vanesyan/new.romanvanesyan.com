import { users } from '@root/db/schema';
import { is_unique_constraint } from '@root/db/errors';
import { type Nullable } from '@lib/util';
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { eq } from 'drizzle-orm';

export enum CreateSubscriptionStatus {
  ok = 'ok',
  already_exists = 'already_exists'
}

export type CreateSubscriptionOutput =
  | { status: CreateSubscriptionStatus.ok; user_id: number }
  | {
      status: CreateSubscriptionStatus.already_exists;
      is_email_verified: boolean;
    };

export default async function create_subscription(
  db: DrizzleD1Database,
  data: {
    email: string;
    name?: Nullable<string>;
  }
): Promise<CreateSubscriptionOutput> {
  try {
    const [user] = await db
      .insert(users)
      .values({
        email: data.email,
        name: data.name
      })
      .returning({ inserted_id: users.id });

    return {
      status: CreateSubscriptionStatus.ok,
      user_id: user.inserted_id
    };
  } catch (e) {
    if (is_unique_constraint(e)) {
      const [user] = await db
        .select({ email: users.email, is_verified: users.is_email_verified })
        .from(users)
        .where(eq(users.email, data.email))
        .limit(1);

      return {
        status: CreateSubscriptionStatus.already_exists,
        is_email_verified: user?.is_verified ?? false
      };
    }

    throw e;
  }
}
