(function(){
var d=document,root=d.documentElement;
var drawer=d.getElementById('mob-drawer'),ov=d.getElementById('mob-overlay'),tg=d.getElementById('nav-toggle'),cl=d.getElementById('mob-close');
function openM(){drawer.classList.add('open');ov.classList.add('open');drawer.setAttribute('aria-hidden','false');tg.setAttribute('aria-expanded','true');root.style.overflow='hidden';}
function closeM(){drawer.classList.remove('open');ov.classList.remove('open');drawer.setAttribute('aria-hidden','true');tg.setAttribute('aria-expanded','false');root.style.overflow='';}
if(tg&&drawer){tg.addEventListener('click',openM);cl.addEventListener('click',closeM);ov.addEventListener('click',closeM);
d.addEventListener('keydown',function(e){if(e.key==='Escape')closeM();});
var mq=window.matchMedia('(min-width:901px)');var f=function(){if(mq.matches)closeM();};if(mq.addEventListener){mq.addEventListener('change',f);}else{mq.addListener(f);}
drawer.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeM);});}
d.querySelectorAll('.faq-q').forEach(function(b){b.addEventListener('click',function(){
var a=d.getElementById(b.getAttribute('aria-controls')),o=b.getAttribute('aria-expanded')==='true';
b.setAttribute('aria-expanded',o?'false':'true');a.style.maxHeight=o?'0px':a.scrollHeight+'px';});});
})();