import { Prisma } from '@prisma/client';

/** Checks whether returned error is unique constraint error from Prisma */
export function is_unique_constraint(e: unknown) {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    if (e.code === 'P2002') {
      return true;
    }
  }

  return false;
}
