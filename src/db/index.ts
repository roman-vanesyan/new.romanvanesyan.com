import { PrismaClient } from '@prisma/client';
import { PrismaD1 } from '@prisma/adapter-d1';

export default function create_db(client: any) {
  const adapter = new PrismaD1(client);
  return new PrismaClient({ adapter });
}
