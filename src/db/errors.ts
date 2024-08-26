/** Checks whether returned error is unique constraint error from drizzle */
export function is_unique_constraint(e: unknown) {
  const msg = (e as Error)?.message;
  return msg?.includes('UNIQUE constraint failed');
}
