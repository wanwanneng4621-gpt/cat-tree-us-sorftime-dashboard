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
assert.match(html, /内部验收建议/);
assert.match(html, /USD975374/);
assert.match(html, /US12193409B1/);
assert.match(html, /US20240188537A1/);
assert.match(html, /US10986815B2/);
assert.match(html, /Google Trends/);
assert.match(html, /3C竞争优势闭环/);
assert.match(html, /不做清单/);
assert.match(html, /mp\.weixin\.qq\.com\/s\/HOP5FL7UDbFhXxLq1F5d4A/);
assert.doesNotMatch(html, /<script[^>]+src=/i);
assert.doesNotMatch(html, /<link[^>]+stylesheet/i);

const assets = [...html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(assets).size, 24, 'dashboard should reference five product/competitor assets and nineteen patent sheets');
for (const relativePath of new Set(assets)) {
  await access(join(root, relativePath));
}

const patentAssets = new Set(assets.filter(path => path.startsWith('assets/patents/')));
assert.equal(patentAssets.size, 19, 'dashboard should expose all nineteen patent drawing sheets');
assert.doesNotMatch(html, /50件|100-150件|达到8%利润|利润与立项红线/);
assert.match(html, /利润、采购数量、补货数量和最终商业审批由项目团队人工完成/);

const requiredExternalSources = [
  'trends.google.com',
  'patents.google.com/patent/USD975374S1/en',
  'patents.google.com/patent/US12193409B1/en',
  'patents.google.com/patent/US20240188537A1/en',
  'patents.google.com/patent/US10986815B2/en',
  'cpsc.gov/Regulations-Laws--Standards/Unregulated-Products',
  'temu.com/goods.html?goods_id=601102537092859'
];
for (const source of requiredExternalSources) {
  assert.ok(html.includes(source), `missing source link: ${source}`);
}

console.log('dashboard structural checks passed');
