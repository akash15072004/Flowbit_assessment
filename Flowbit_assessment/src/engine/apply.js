
export function applyMemory(invoice, memories, audit) {
  let corrections = [];
  let normalized = {...invoice};

  memories.forEach(m => {
    if (m.confidence >= 0.6 && m.fieldMap) {
      Object.entries(m.fieldMap).forEach(([from, to]) => {
        if (invoice.rawText.includes(from)) {
          normalized[to] = invoice.rawText.match(/\d{4}-\d{2}-\d{2}/)?.[0];
          corrections.push(`Mapped ${from} → ${to} (confidence ${m.confidence})`);
          audit.push({step:"apply", details:`Applied ${from} using learned memory`});
        }
      });
    }
  });

  return {normalized, corrections};
}
