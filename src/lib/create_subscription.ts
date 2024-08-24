import { type PrismaClient } from '@prisma/client';
import { is_unique_constraint } from './prisma_errors';
import { type Nullable } from '@lib/util';

export enum CreateSubscriptionStatus {
  ok = 'ok',
  already_exists = 'already_exists'
}

export type CreateSubscriptionOutput =
  | { status: CreateSubscriptionStatus.ok; user_id: string }
  | {
      status: CreateSubscriptionStatus.already_exists;
      is_email_verified: boolean;
    };

export default async function create_subscription(
  db: PrismaClient,
  data: {
    email: string;
    name?: Nullable<string>;
  }
): Promise<CreateSubscriptionOutput> {
  try {
    const user = await db.subscribedUser.create({
      data,
      select: { id: true }
    });

    return {
      status: CreateSubscriptionStatus.ok,
      user_id: user.id
    };
  } catch (e) {
    if (is_unique_constraint(e)) {
      const user = await db.subscribedUser.findUnique({
        where: {
          email: data.email
        },
        select: {
          is_email_verified: true
        }
      });

      return {
        status: CreateSubscriptionStatus.already_exists,
        is_email_verified: user?.is_email_verified ?? false
      };
    }

    throw e;
  }
}
