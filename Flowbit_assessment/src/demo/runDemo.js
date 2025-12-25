
import {loadDB, saveDB} from '../utils.js';
import {recall} from '../engine/recall.js';
import {applyMemory} from '../engine/apply.js';
import {decide} from '../engine/decide.js';
import {learn} from '../engine/learn.js';
import {invoices} from './invoices.js';

console.log("=== DEMO START ===");
let db = loadDB();

// Invoice 1
let audit = [];
let mem = recall(invoices[0], db);
let applied = applyMemory(invoices[0], mem, audit);
let decision = decide(applied.corrections);
console.log("Invoice 1 Decision:", decision);

// Human approves correction
console.log("Human correction applied → learning memory");
learn(invoices[0], db);
saveDB(db);

// Invoice 2
audit = [];
mem = recall(invoices[1], db);
applied = applyMemory(invoices[1], mem, audit);
decision = decide(applied.corrections);

console.log("Invoice 2 Decision:", decision);
console.log("Corrections:", applied.corrections);
console.log("=== DEMO END ===");
