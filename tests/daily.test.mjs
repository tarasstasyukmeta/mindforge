import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
function extract(name) { const m = html.match(new RegExp(`(const ${name}=[\\s\\S]*?;|function ${name}\\([\\s\\S]*?\\n\\})`)); return m?.[0]; }

test('daily order is math>pattern>know>focus>writing', () => {
  const src = extract('DAILY_ORDER'); assert.ok(src, 'DAILY_ORDER missing');
  const order = eval(src.replace('const DAILY_ORDER=', ''));
  assert.deepEqual(order, ['math', 'pattern', 'know', 'focus', 'writing']);
});
test('dailySummary aggregates score/total/accuracy', () => {
  const src = extract('dailySummary'); assert.ok(src, 'dailySummary missing');
  const fn = eval(`(${src.replace(/^function dailySummary/, 'function')})`);
  const s = fn([{ cat: 'math', score: 3, total: 4 }, { cat: 'know', score: 5, total: 5 }]);
  assert.equal(s.score, 8); assert.equal(s.total, 9); assert.equal(s.acc, 89); // round(8/9*100)
});
test('chained daily: no alert stub, has summary+share', () => {
  assert.ok(!/function startDaily\(\)\{[^}]*alert\(/.test(html), 'startDaily still alert stub');
  assert.ok(html.includes('function showDailySummary'), 'showDailySummary missing');
  assert.ok(html.includes('function shareCard'), 'shareCard missing');
  assert.ok(html.includes('Daily step'), 'step indicator missing');
});
test('PWA collateral present', () => {
  assert.ok(html.includes('manifest.webmanifest'), 'manifest link missing');
  assert.ok(html.includes('serviceWorker'), 'SW registration missing');
  assert.ok(existsSync(new URL('../manifest.webmanifest', import.meta.url)));
  assert.ok(existsSync(new URL('../sw.js', import.meta.url)));
});
