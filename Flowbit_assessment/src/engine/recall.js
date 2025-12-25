
export function recall(invoice, db) {
  return db.vendorMemory.filter(v => v.vendor === invoice.vendor);
}
