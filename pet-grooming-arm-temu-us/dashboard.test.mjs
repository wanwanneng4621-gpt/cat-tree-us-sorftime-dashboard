import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const html = await readFile(join(root, 'index.html'), 'utf8');

assert.match(html, /TEMU US 宠物美容臂与吊床选品决策看板/);
assert.match(html, /id="decision"/);
assert.match(html, /id="operations"/);
assert.match(html, /选品决策/);
assert.match(html, /运营打法/);
assert.match(html, /第三方估算/);
assert.match(html, /不是平台总容量/);
assert.match(html, /内部压力测试/);
assert.match(html, /USD975374/);
assert.match(html, /Google Trends/);
assert.doesNotMatch(html, /<script[^>]+src=/i);
assert.doesNotMatch(html, /<link[^>]+stylesheet/i);

const assets = [...html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(assets).size, 5, 'dashboard should reference exactly five local assets');
for (const relativePath of new Set(assets)) {
  await access(join(root, relativePath));
}

const requiredExternalSources = [
  'trends.google.com',
  'patents.justia.com/patent/D975374',
  'patents.justia.com/patent/12193409',
  'cpsc.gov/Regulations-Laws--Standards/Unregulated-Products',
  'temu.com/goods.html?goods_id=601102537092859'
];
for (const source of requiredExternalSources) {
  assert.ok(html.includes(source), `missing source link: ${source}`);
}

console.log('dashboard structural checks passed');
