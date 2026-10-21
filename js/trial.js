/* Baekho — trial class journey (prototype).
   In Wix: step 3 reads live availability from Wix Bookings and step 5 hands off to checkout.
   Edit PROGRAMS / SLOTS below until then. */
(function(){
'use strict';
var B = window.BAEKHO || {};
var $ = function(s,r){return (r||document).querySelector(s)};
var $$ = function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};

var PROGRAMS = [
  {id:'little-taeks',name:'Little Taeks',note:'Taekwondo',ages:['3-6'],locs:['eco-sanctuary','putra-heights']},
  {id:'rimba-stars',name:'Rimba Stars',note:'Taekwondo',ages:['7-12'],locs:['eco-sanctuary','putra-heights']},
  {id:'tiger-taeks',name:'Tiger Taeks',note:'Taekwondo for teens',ages:['13-17'],locs:['eco-sanctuary','putra-heights']},
  {id:'muay-thai',name:'Muay Thai',note:'Ages 5–17',ages:['3-6','7-12','13-17'],locs:['eco-sanctuary']},
  {id:'bjj',name:'Boa BJJ',note:'Brazilian Jiu-Jitsu · age to be confirmed',ages:['3-6','7-12','13-17'],locs:['eco-sanctuary']},
  {id:'mma',name:'Wolf MMA',note:'Kids MMA · age to be confirmed',ages:['3-6','7-12','13-17'],locs:['eco-sanctuary']},
  {id:'ufc-for-kids',name:'UFC for Kids',note:'BJJ + Muay Thai + MMA',ages:['7-12'],locs:['eco-sanctuary']},
  {id:'combat-lab',name:'Combat Lab',note:'Kyorugi sparring · age to be confirmed',ages:['7-12','13-17'],locs:['eco-sanctuary']},
  {id:'poomsae-clinic',name:'Poomsae Clinic',note:'Forms · age to be confirmed',ages:['7-12','13-17'],locs:['eco-sanctuary']}
];
var LOCS = {'eco-sanctuary':'Eco Sanctuary','putra-heights':'Putra Heights'};
/* DEMO ONLY: replace with live schedule */
function slotsFor(pid){
  if(pid==='combat-lab') return [{id:'cl-1',label:'Combat Lab session',sub:'Day to be confirmed · 1:30pm – 3:30pm'}];
  return [
    {id:'demo-a',label:'Demo slot A',sub:'Day and time to be confirmed'},
    {id:'demo-b',label:'Demo slot B',sub:'Day and time to be confirmed'},
    {id:'demo-c',label:'Demo slot C',sub:'Day and time to be confirmed'}
  ];
}

var form = $('#trial-form'); if(!form) return;
var steps = $$('.wstep[data-step]'), bars = $$('.progress i'), cur = 1;
var state = {age:'',program:'',location:'',slot:''};
var progWrap = $('#prog-wrap'), progOpts = $('#prog-opts');

/* icons in the sidebar */
if(B.icon){ $('#i-phone').innerHTML=B.icon.phone; $('#i-mail').innerHTML=B.icon.mail; $('#i-ig').innerHTML=B.icon.ig; $('#i-fb').innerHTML=B.icon.fb; }

function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}

function show(n, focus){
  cur = n;
  steps.forEach(function(s){ s.classList.toggle('active', +s.dataset.step===n); });
  $('#done').classList.remove('active'); $('#failed').classList.remove('active');
  form.hidden = false;
  bars.forEach(function(b,i){ b.className = i+1<n?'done':(i+1===n?'now':''); });
  if(n===5) renderSummary($('#summary'));
  if(focus!==false){
    var h = $('.wstep.active h3'); if(h){ h.setAttribute('tabindex','-1'); h.focus({preventScroll:true}); }
    $('#wizard').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  }
}

function renderPrograms(){
  var list = PROGRAMS.filter(function(p){return p.ages.indexOf(state.age)>-1});
  progOpts.innerHTML = list.map(function(p,i){
    return '<div class="opt"><input type="radio" name="program" id="p-'+p.id+'" value="'+p.id+'"'+(state.program===p.id?' checked':'')+'><label for="p-'+p.id+'"><b>'+esc(p.name)+'</b><span>'+esc(p.note)+'</span></label></div>';
  }).join('');
  progWrap.hidden = false;
}
function renderLocations(){
  var p = PROGRAMS.filter(function(x){return x.id===state.program})[0];
  $$('input[name="location"]').forEach(function(i){
    var ok = !p || p.locs.indexOf(i.value)>-1;
    i.disabled = !ok;
    var sp = i.nextElementSibling.querySelector('span');
    if(!sp.dataset.o) sp.dataset.o = sp.textContent;
    sp.textContent = ok ? sp.dataset.o : 'Not available for ' + p.name;
    if(!ok && i.checked){ i.checked=false; state.location=''; }
  });
}
function renderSlots(){
  var list = slotsFor(state.program);
  $('#slot-opts').innerHTML = list.map(function(s){
    return '<div class="opt"><input type="radio" name="slot" id="s-'+s.id+'" value="'+s.id+'"'+(state.slot===s.id?' checked':'')+'><label for="s-'+s.id+'"><b>'+esc(s.label)+'</b><span>'+esc(s.sub)+'</span></label></div>';
  }).join('');
}
function renderSummary(el){
  var p = PROGRAMS.filter(function(x){return x.id===state.program})[0]||{};
  var slot = slotsFor(state.program).filter(function(s){return s.id===state.slot})[0]||{};
  var rows = [
    ['Child', esc(form.child.value)+(form.childage.value?', age '+esc(form.childage.value):'')],
    ['Program', esc(p.name||'')],
    ['Location', esc(LOCS[state.location]||'')],
    ['Class', esc(slot.label||'')+' <small style="color:var(--muted)">('+esc(slot.sub||'')+')</small>'],
    ['Parent', esc(form.parent.value)],
    ['Trial price','<span class="tbc">RM TBC</span>']
  ];
  el.innerHTML = rows.map(function(r){return '<div><span>'+r[0]+'</span><b>'+r[1]+'</b></div>'}).join('');
}

/* state wiring */
form.addEventListener('change',function(e){
  var t = e.target;
  if(t.name==='age'){ state.age=t.value; if(state.program && !PROGRAMS.some(function(p){return p.id===state.program && p.ages.indexOf(state.age)>-1})) state.program=''; renderPrograms(); }
  if(t.name==='program'){ state.program=t.value; state.slot=''; renderLocations(); }
  if(t.name==='location'){ state.location=t.value; state.slot=''; }
  if(t.name==='slot'){ state.slot=t.value; }
});

/* validation */
function setErr(id,msg){ var e=$('#'+id); if(e) e.textContent = msg||''; }
function validate(n){
  if(n===1){
    if(!state.age){ setErr('err1','Please choose your child’s age group.'); return false; }
    if(!state.program){ setErr('err1','Please choose a program.'); return false; }
    setErr('err1',''); return true;
  }
  if(n===2){
    if(!state.location){ setErr('err2','Please choose a location.'); return false; }
    setErr('err2',''); return true;
  }
  if(n===3){
    if(!state.slot){ setErr('err3','Please pick a trial class.'); return false; }
    setErr('err3',''); return true;
  }
  if(n===4){
    var ok = true, f = form.elements;
    function bad(name,msg){ var el=f[name]; el.setAttribute('aria-invalid','true'); var s=$('[data-for="'+name+'"]'); if(s) s.textContent=msg; if(ok){ el.focus(); } ok=false; }
    function good(name){ var el=f[name]; el.removeAttribute('aria-invalid'); var s=$('[data-for="'+name+'"]'); if(s) s.textContent=''; }
    ['parent','phone','email','child','childage'].forEach(good);
    if(f.parent.value.trim().length<2) bad('parent','Please enter your name.');
    if(!/^\+?[0-9][0-9\s\-]{7,14}$/.test(f.phone.value.trim())) bad('phone','Enter a phone number we can WhatsApp, e.g. +60 12-345 6789.');
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.value.trim())) bad('email','Enter a valid email address.');
    if(f.child.value.trim().length<1) bad('child','Please enter your child’s name.');
    var a = +f.childage.value; if(!a || a<3 || a>17) bad('childage','Age should be between 3 and 17.');
    return ok;
  }
  return true;
}

$$('[data-next]').forEach(function(b){ b.addEventListener('click',function(){
  if(!validate(cur)) return;
  if(cur===1) renderLocations();
  if(cur===2) renderSlots();
  show(cur+1);
});});
$$('[data-prev]').forEach(function(b){ b.addEventListener('click',function(){ show(cur-1); });});

/* submit (simulated) */
form.addEventListener('submit',function(e){
  e.preventDefault();
  if(!$('#agree').checked){ setErr('err5','Please tick the box to continue.'); return; }
  setErr('err5','');
  var btn = $('#pay'); btn.disabled = true; btn.textContent = 'Booking…';
  setTimeout(function(){
    btn.disabled = false; btn.innerHTML = 'Pay &amp; book trial <span class="arr">→</span>';
    if(/simulate=fail/.test(location.search)){ finish(false); return; }
    finish(true);
  },900);
});
function finish(ok){
  steps.forEach(function(s){s.classList.remove('active')});
  form.hidden = true;
  bars.forEach(function(b){ b.className = ok?'done':'now'; });
  var box = ok? $('#done') : $('#failed');
  box.classList.add('active');
  if(ok){
    var ref = 'BKH-' + Math.random().toString(36).slice(2,8).toUpperCase();
    $('#ref').textContent = ref; $('#done-email').textContent = form.email.value;
    renderSummary($('#done-summary'));
    var p = PROGRAMS.filter(function(x){return x.id===state.program})[0]||{};
    $('#wa-confirm').href = 'https://wa.me/60125138813?text=' + encodeURIComponent('Hi Baekho! I just booked a trial ('+ref+') for '+form.child.value+' — '+p.name+' at '+LOCS[state.location]+'.');
    window.dataLayer = window.dataLayer||[]; window.dataLayer.push({event:'trial_purchase',program:state.program,location:state.location});
  }
  box.focus(); $('#wizard').scrollIntoView({behavior:'smooth',block:'start'});
}
$('#retry').addEventListener('click',function(){ $('#failed').classList.remove('active'); form.hidden=false; show(5); });

/* prefill from ?program=…&location=… */
(function(){
  var q = new URLSearchParams(location.search), pid = q.get('program'), loc = q.get('location');
  var p = PROGRAMS.filter(function(x){return x.id===pid})[0];
  if(p){
    state.age = p.ages[0]; state.program = p.id;
    var r = $('input[name="age"][value="'+state.age+'"]'); if(r) r.checked = true;
    renderPrograms();
  }
  if(loc && LOCS[loc]){ state.location = loc; var l = $('input[name="location"][value="'+loc+'"]'); if(l) l.checked = true; }
  show(1,false);
})();
})();
