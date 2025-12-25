
export function learn(invoice, db) {
  let mem = db.vendorMemory.find(v => v.vendor === invoice.vendor);
  if (!mem) {
    mem = {vendor: invoice.vendor, fieldMap: {}, confidence: 0.5};
    db.vendorMemory.push(mem);
  }
  mem.fieldMap["Leistungsdatum"] = "serviceDate";
  mem.confidence = Math.min(0.95, mem.confidence + 0.15);
}
