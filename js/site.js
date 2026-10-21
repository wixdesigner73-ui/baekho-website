/* Baekho — shared header/footer, waves, reveals, accordion, tabs, parallax */
(function(){
'use strict';

/* ----- single source of truth for contact info (from baekho.my) ----- */
var B = window.BAEKHO = {
  wa:'https://wa.me/60125138813',
  waText:'?text=' + encodeURIComponent('Hi Baekho! I’d like to know more about a trial class.'),
  phone:'+6012-513-8813', phoneHref:'tel:+60125138813',
  email:'admin@baekho.my',
  ig:'https://www.instagram.com/baekho.my', fb:'https://www.facebook.com/baekho.my',
  locs:{
    eco:{name:'Eco Sanctuary', area:'Bandar Rimbayu', addr:'15-1 Jalan Eco Sanctuary 8/1B, Telok Panglima Garang, 42500 Selangor'},
    putra:{name:'Putra Heights', area:'Subang Jaya', addr:'18-2, Jalan Putra Mahkota 7/8E, Putra Heights, 47650 Subang Jaya, Selangor'}
  }
};
var ICON = {
  wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2a9.9 9.9 0 0 0-8.46 15.04L2 22l5.1-1.5A9.94 9.94 0 1 0 12.04 2Zm5.8 14.1c-.25.7-1.45 1.33-2 1.4-.52.07-1.17.1-1.9-.12a17 17 0 0 1-1.72-.64c-3.03-1.3-5-4.35-5.15-4.55-.15-.2-1.22-1.62-1.22-3.1 0-1.47.77-2.2 1.04-2.5.27-.3.6-.37.8-.37h.58c.19 0 .44-.07.68.52.25.6.85 2.08.93 2.23.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.3-.13.6.17.3.77 1.27 1.65 2.05 1.13 1 2.08 1.31 2.38 1.46.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.07.12.07.72-.18 1.4Z"/></svg>',
  ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor"/></svg>',
  fb:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.5V6.9c0-.7.2-1.1 1.2-1.1H17V3h-2.6C11.7 3 10.5 4.600 10.500 6.600v1.900H8.500V11.500h2V21h3.500v-9.500h2.600l.4-3H14Z"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.500 19.500 0 0 1-6-6A19.800 19.800 0 0 1 2.100 4.200 2 2 0 0 1 4.100 2h3a2 2 0 0 1 2 1.700c.1 1 .4 1.900.7 2.800a2 2 0 0 1-.5 2.100L8.100 9.900a16 16 0 0 0 6 6l1.300-1.300a2 2 0 0 1 2.100-.4c.9.3 1.800.6 2.800.7a2 2 0 0 1 1.700 2Z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-10 6L2 7"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
};
B.icon = ICON;

var pages = [
  ['index.html','Home'],['programs.html','Programs'],['locations.html','Locations'],
  ['about.html','About'],['achievements.html','Achievements'],['parents-hub.html','Parents Hub'],['nx4t.html','NX4T']
];
var here = (location.pathname.split('/').pop() || 'index.html');

/* ----- header ----- */
var h = document.getElementById('site-header');
if(h){
  var links = pages.map(function(p){
    return '<a class="link'+(p[0]==='nx4t.html'?' nx':'')+'" href="'+p[0]+'"'+(p[0]===here?' aria-current="page"':'')+'>'+p[1]+'</a>';
  }).join('');
  h.className = 'site-header';
  h.innerHTML = '<div class="wrap bar"><a class="brand" href="index.html" aria-label="Baekho Martial Arts home"><img src="img/logo.webp" alt="" width="58" height="53"><span>BAEKHO<small>Martial Arts</small></span></a>'+
    '<nav class="nav" id="nav" aria-label="Main">'+links+'<a class="btn sm" href="trial.html">Book a trial <span class="arr">→</span></a></nav>'+
    '<button class="menu-btn" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span></button></div>';
  var btn = h.querySelector('.menu-btn');
  btn.addEventListener('click',function(){
    var o = document.body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded',o);
  });
  h.querySelectorAll('.nav a').forEach(function(a){a.addEventListener('click',function(){document.body.classList.remove('menu-open')})});
  var lastY = 0;
  window.addEventListener('scroll',function(){
    var y = window.scrollY;
    h.classList.toggle('scrolled',y>30);
    h.classList.toggle('hide',y>lastY && y>420 && !document.body.classList.contains('menu-open'));
    lastY = y;
  },{passive:true});
}

/* ----- footer + floating WhatsApp ----- */
var f = document.getElementById('site-footer');
if(f){
  f.className = 'footer';
  f.innerHTML = '<i class="wave top" data-c="'+(f.dataset.c||'#FFF7EA')+'" data-v="2"></i><div class="wrap"><div class="fgrid">'+
    '<div class="fbrand"><img src="img/logo.webp" alt="Baekho Martial Arts" width="110" height="100"><p>Serious coaching, delivered through fun. Taekwondo, Muay Thai, BJJ and more for kids and teens in the Klang Valley.</p><p><b style="color:#fff">Respect All. Fear None.</b></p>'+
      '<div class="social"><a href="'+B.wa+'" aria-label="WhatsApp" data-track="whatsapp_click">'+ICON.wa+'</a><a href="'+B.ig+'" aria-label="Instagram">'+ICON.ig+'</a><a href="'+B.fb+'" aria-label="Facebook">'+ICON.fb+'</a></div></div>'+
    '<div><h4>Explore</h4><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About Baekho</a></li><li><a href="achievements.html">Achievements</a></li><li><a href="parents-hub.html">Parents Hub</a></li><li><a href="nx4t.html">NX4T Personal Training</a></li></ul></div>'+
    '<div><h4>Train</h4><ul><li><a href="programs.html#little-taeks">Little Taeks</a></li><li><a href="programs.html#rimba-stars">Rimba Stars</a></li><li><a href="programs.html#martial-arts">Muay Thai, BJJ, MMA &amp; Capoeira</a></li><li><a href="programs.html#fitness">Functional fitness</a></li><li><a href="programs.html#specialist">UFC for Kids, Combat Lab &amp; Poomsae</a></li><li><a href="locations.html">Locations &amp; schedules</a></li></ul></div>'+
    '<div><h4>Say hi</h4><ul><li><a href="'+B.phoneHref+'">'+B.phone+'</a></li><li><a href="mailto:'+B.email+'">'+B.email+'</a></li><li>'+B.locs.putra.name+', '+B.locs.putra.area+'</li><li>'+B.locs.eco.name+' ('+B.locs.eco.area+')</li><li>Alam Impian <span class="tbc" style="font-size:.6rem">status TBC</span></li><li><a class="btn sm" style="margin-top:8px;color:var(--ink)" href="trial.html">Book a trial →</a></li></ul></div>'+
    '</div><div class="fbottom"><span>© '+new Date().getFullYear()+' Baekho Martial Arts. All rights reserved.</span><span>Respect All. Fear None.</span></div></div>';
  var fab = document.createElement('a');
  fab.className='wa-fab'; fab.href=B.wa+B.waText; fab.setAttribute('data-track','whatsapp_click'); fab.target='_blank'; fab.rel='noopener';
  fab.setAttribute('aria-label','Chat on WhatsApp'); fab.innerHTML = ICON.wa+'<span>Chat with us</span>';
  document.body.appendChild(fab);
}

/* ----- wave dividers: <i class="wave top" data-c="#hex|var(--x)" data-v="1|2|3"> ----- */
var WAVES = [
 'M0,0H1440V30C1250,110 1060,0 800,40C540,80 300,120 0,50Z',
 'M0,0H1440V70C1180,10 980,110 720,70C460,30 220,0 0,80Z',
 'M0,0H1440V50C1300,100 1150,20 960,45C700,85 520,115 300,70C190,48 90,40 0,70Z'
];
/* the wave takes the colour of the section above it, so recolouring a section never leaves a seam */
function prevColour(w){
  var host = w.parentElement, prev = host && host.previousElementSibling;
  if(prev && prev.tagName==='MAIN') prev = prev.lastElementChild;
  if(!prev) return null;
  var bg = getComputedStyle(prev).backgroundColor;
  return (bg && bg!=='transparent' && bg!=='rgba(0, 0, 0, 0)') ? bg : null;
}
var firstSec = document.querySelector('main > section');
if(firstSec && /\b(hero|phero|nx-hero)\b/.test(firstSec.className)) document.body.classList.add('dark-top');
document.querySelectorAll('.wave').forEach(function(w){
  var v = (parseInt(w.dataset.v,10)||1)-1, c = prevColour(w) || w.dataset.c || 'var(--cream)';
  w.innerHTML = '<svg viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="'+WAVES[v]+'" fill="'+c+'"/></svg>';
});

/* ----- scroll reveal ----- */
var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var items = document.querySelectorAll('.rv,.mask-reveal');
if('IntersectionObserver' in window && !reduce){
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  items.forEach(function(el){io.observe(el)});
}else{ items.forEach(function(el){el.classList.add('in')}); }

/* ----- subtle parallax ----- */
var px = document.querySelectorAll('[data-speed]');
if(px.length && !reduce){
  var tick = false;
  var run = function(){
    var vh = window.innerHeight;
    px.forEach(function(el){
      var r = el.parentElement.getBoundingClientRect();
      if(r.bottom<-200||r.top>vh+200) return;
      var s = parseFloat(el.dataset.speed)||.1;
      el.style.transform = 'translate3d(0,'+((r.top+r.height/2-vh/2)*s*-1).toFixed(1)+'px,0)';
    });
    tick=false;
  };
  window.addEventListener('scroll',function(){ if(!tick){tick=true;requestAnimationFrame(run);} },{passive:true});
  run();
}

/* ----- tabs ----- */
document.querySelectorAll('[data-tabs]').forEach(function(root){
  var tabs = root.querySelectorAll('[role="tab"]'), panels = root.querySelectorAll('.panel');
  function select(t){
    tabs.forEach(function(x){x.setAttribute('aria-selected',x===t)});
    panels.forEach(function(p){p.hidden = p.id !== t.getAttribute('aria-controls')});
  }
  var hashTab = location.hash && root.querySelector('#tab-' + location.hash.slice(1));
  if(hashTab) select(hashTab);
  tabs.forEach(function(t){
    t.addEventListener('click',function(){select(t)});
    t.addEventListener('keydown',function(e){
      var i = Array.prototype.indexOf.call(tabs,t), n = e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:null;
      if(n!==null){ var x = tabs[(n+tabs.length)%tabs.length]; x.focus(); select(x); }
    });
  });
});

/* ----- accordion: one open at a time, smooth via grid rows ----- */
document.querySelectorAll('.acc details').forEach(function(d){
  d.querySelector('summary').addEventListener('click',function(){
    if(!d.open){ d.parentElement.querySelectorAll('details[open]').forEach(function(o){ if(o!==d) o.open=false; }); }
  });
});

/* ----- lightweight conversion events (hook up to GA4 / Wix Analytics) ----- */
document.addEventListener('click',function(e){
  var t = e.target.closest('[data-track]');
  if(t){ window.dataLayer = window.dataLayer||[]; window.dataLayer.push({event:t.getAttribute('data-track'),page:here}); }
});
})();
