import { PrismaClient } from '@prisma/client/edge';
import { PrismaD1 } from '@prisma/adapter-d1';

export default function create_db(client: Env['DB']) {
  const adapter = new PrismaD1(client);
  return new PrismaClient({ adapter });
}
