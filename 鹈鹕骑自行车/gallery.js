"use strict";
const results = window.PELICAN_RESULTS;
const $ = selector => document.querySelector(selector);
const collator = new Intl.Collator('en', {numeric:true, sensitivity:'base'});
const harnesses = [...new Set(results.map(item => item.harness))].sort(collator.compare);
const efforts = [...new Set(results.map(item => item.effort))];
for (const [selector, values] of [['#harness', harnesses], ['#effort', efforts]]) {
  for (const value of values) $(selector).add(new Option(value, value));
}
$('#summary').textContent = `${results.length} 件作品 / ${harnesses.length} 个 Harness`;
function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}
function openArtwork(item) {
  const title = `${item.model} · ${item.effort} / ${item.harness}`;
  $('#viewer-title').textContent = title;
  $('#large').src = encodeURI(item.file);
  $('#large').alt = `${title}：鹈鹕骑自行车`;
  $('#original').href = encodeURI(item.file);
  $('#filename').textContent = item.file;
  $('#viewer').showModal();
}
function render() {
  const query = $('#search').value.trim().toLowerCase();
  const harness = $('#harness').value;
  const effort = $('#effort').value;
  const selected = results.filter(item => item.model.toLowerCase().includes(query) && (!harness || item.harness === harness) && (!effort || item.effort === effort));
  const columns = harness ? [harness] : harnesses;
  const groups = new Map();
  for (const item of selected) {
    const key = `${item.model}\u0000${item.effort}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }
  const row = element('tr');
  for (const label of ['模型 / 思考强度', ...columns]) {
    const th = element('th', label); th.scope = 'col'; row.append(th);
  }
  $('#head').replaceChildren(row);
  const rows = [...groups.values()].sort((a,b) => collator.compare(a[0].model,b[0].model) || collator.compare(a[0].effort,b[0].effort));
  const fragment = document.createDocumentFragment();
  for (const group of rows) {
    const tr = element('tr');
    const th = element('th'); th.scope = 'row';
    th.append(element('span',group[0].model,'model'),element('span',group[0].effort,'effort'));
    tr.append(th);
    for (const column of columns) {
      const td = element('td');
      const items = group.filter(item => item.harness === column);
      if (!items.length) {td.textContent = '—';td.className = 'missing';td.setAttribute('aria-label','尚无产物');}
      for (const item of items) {
        const button = element('button',undefined,'artwork');
        button.type = 'button';
        button.setAttribute('aria-label',`放大 ${item.model} ${item.effort} ${item.harness}`);
        button.title = item.file;
        const img = element('img'); img.src = encodeURI(item.file); img.alt = `${item.model} · ${item.effort} 的鹈鹕骑自行车`;img.loading = 'lazy';
        button.append(img);button.addEventListener('click',()=>openArtwork(item));td.append(button);
      }
      tr.append(td);
    }
    fragment.append(tr);
  }
  $('#body').replaceChildren(fragment);
  $('#empty').hidden = selected.length > 0;
  $('#count').textContent = `显示 ${selected.length} / ${results.length} 件作品 · ${rows.length} 行`;
}
$('#search').addEventListener('input',render);
$('#harness').addEventListener('change',render);
$('#effort').addEventListener('change',render);
$('.toolbar').addEventListener('reset',()=>setTimeout(render,0));
$('#close').addEventListener('click',()=>$('#viewer').close());
$('#viewer').addEventListener('click',event=>{if(event.target === $('#viewer')) {const rect = event.target.getBoundingClientRect();if(event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.target.close();}});
render();
