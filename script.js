const WHATSAPP = "https://wa.me/08132357153";

const categories = [
  {label:"Cooking Gas",icon:"fas fa-fire",img:".vscode/images/gas.jpg"},
  {label:"Gas Cylinders",icon:"fas fa-cylinder",img:".vscode/images/gas3kg.jpg"},
  {label:"Gas Burners",icon:"fas fa-fire-flame-curved",img:".vscode/images/burner.jpg"},
  {label:"Gas Accessories",icon:"fas fa-wrench",img:".vscode/images/ring-2.jpg"},
  {label:"Kitchen Utensils",icon:"fas fa-utensils",img:".vscode/images/plates-on-gas.jpg"},
  {label:"Kitchen Utensils",icon:"fas fa-utensils",img:".vscode/images/plates.jpg"},
  {label:"Kitchen Utensils",icon:"fas fa-utensils",img:".vscode/images/plates1.jpg"},
  {label:"Cookware",icon:"fas fa-pot-food",img:".vscode/images/stuffs.png"},
  {label:"gas cylinders",icon:"fas fa-wheat-awn",img:".vscode/images/stuff-1.jpg"},
  {label:"Provisions",icon:"fas fa-box-open",img:".vscode/images/stuff-2.jpg"},
];

const products = [
  {id:1,cat:"gas",badge:"Best Seller",title:"3kg Gas Cylinder",desc:"Compact and portable 3kg LPG cylinder. Perfect for small homes and offices.",price:"₦17,000",img:".vscode/images/gas3kg.jpg"},
  {id:2,cat:"gas",badge:"Popular",title:"6kg Gas Cylinder",desc:"Standard 6kg LPG cylinder for average household use. Refillable.",price:"₦25,000",img:".vscode/images/gas-3.jpg"},
  {id:5,cat:"gas",badge:"",title:"12.5kg Gas Cylinder",desc:"Large household cylinder. Long-lasting supply for big families and businesses.",price:"₦26,500",img:".vscode/images/gas12.5.png"},
  {id:4,cat:"gas",badge:"New",title:"Single Burner Gas Cooker",desc:"Portable tabletop gas burner. Ideal for small kitchens and outdoor cooking.",price:"₦12,000",img:".vscode/images/burner.jpg"},
  {id:5.1,cat:"gas",badge:"",title:"Table cooker",desc:"High-quality pressure regulator with safety valve. Fits all standard cylinders.",price:"₦280,000",img:".vscode/images/table-cooker.jpg"},
  {id:6,cat:"gas",badge:"",title:"Electric-Gas",desc:"High-quality pressure regulator with safety valve. Fits all standard cylinders.",price:"₦3,500",img:".vscode/images/electric2.jpg"},
   {id:3,cat:"gas",badge:"",title:"Oven cooker",desc:"Large household cylinder. Long-lasting supply for big families and businesses.",price:"₦45,000",img:".vscode/images/coal-gas.jpg"},
  {id:6,cat:"kitchen",badge:"Popular",title:"Non-Stick Cooking Pot Set",desc:"5-piece non-stick pot set with tempered glass lids. Dishwasher safe.",price:"₦18,500",img:".vscode/images/spoons.jpg"},
  {id:7,cat:"kitchen",badge:"",title:"Stainless Steel Frying Pan",desc:"Premium stainless frying pan with anti-scorch base. Even heat distribution.",price:"₦7,200",img:".vscode/images/plates2.jpg"},
  {id:8,cat:"kitchen",badge:"New",title:"Kitchen Utensil Set (12pc)",desc:"Complete 12-piece kitchen tool set: ladles, turners, spatulas and more.",price:"₦5,500",img:".vscode/images/plates1.jpg"},
  {id:9,cat:"food",badge:"",title:"Premium Basmati Rice (5kg)",desc:"Fragrant, long-grain basmati rice. Imported quality, parboiled and clean.",price:"₦9,800",img:".vscode/images/rice-bags.jpg"},
  {id:9,cat:"food",badge:"",title:"Premium Basmati Rice (5kg)",desc:"Fragrant, long-grain basmati rice. Imported quality, parboiled and clean.",price:"₦9,800",img:".vscode/images/rice.jpg"},
  {id:9,cat:"food",badge:"",title:"Premium Basmati Rice (5kg)",desc:"Fragrant, long-grain basmati rice. Imported quality, parboiled and clean.",price:"₦9,800",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=75"},
  {id:10,cat:"food",badge:"Popular",title:"Semolina (5kg)",desc:"Fine quality semolina for swallow and baking. Smooth texture, great taste.",price:"₦4,500",img:"https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=75"},
  {id:11,cat:"food",badge:"",title:"Assorted Provisions Bundle",desc:"Bundle of everyday household provisions: tomato paste, seasoning, pasta & more.",price:"₦22,000",img:"https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=75"},
  {id:12,cat:"kitchen",badge:"Hot",title:"Pressure Cooker 7L",desc:"Heavy-duty 7-litre pressure cooker. Saves time and energy in the kitchen.",price:"₦15,000",img:"https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&q=75"},
];

const testimonials = [
  {name:"Adaeze Okonkwo",loc:"Lekki, Lagos",stars:5,text:"Dunamisoe has been my go-to for gas refills for 3 years. Always on time, fair pricing, and the staff are so professional. Highly recommended!"},
  {name:"Chukwuemeka Nwosu",loc:"Abuja, FCT",stars:5,text:"I bought a full kitchen set and cooking gas from them. Everything arrived in perfect condition. Great quality and very affordable. Will definitely order again."},
  {name:"Blessing Adeola",loc:"Ibadan, Oyo",stars:5,text:"Their customer service is exceptional. I called via WhatsApp and got a response within minutes. My provisions were delivered the same day!"},
  {name:"Tunde Fashola",loc:"Port Harcourt",stars:5,text:"Best gas supplier in Lagos. I've been using them for my restaurant for over 2 years now. Bulk orders are handled efficiently and pricing is very competitive."},
  {name:"Grace Eze",loc:"Enugu State",stars:5,text:"The non-stick pots I got are amazing — still look brand new after months of daily use. Very impressed with the product quality from Dunamisoe Energies."},
  {name:"Musa Abubakar",loc:"Kano State",stars:4,text:"Quick delivery, great packaging, and the gas regulator works perfectly. Solid business with genuine products. I trust them completely."},
];

/* ── BUILD HERO DOTS ──────────────────────────────────── */
const slides = document.querySelectorAll('.hero-slide');
const dotsContainer = document.getElementById('heroDots');
let currentSlide = 0;

slides.forEach((_,i)=>{
  const dot = document.createElement('div');
  dot.className = 'hero-dot' + (i===0?' active':'');
  dot.addEventListener('click',()=>goToSlide(i));
  dotsContainer.appendChild(dot);
});

function goToSlide(n){
  slides[currentSlide].classList.remove('active');
  dotsContainer.children[currentSlide].classList.remove('active');
  currentSlide = n;
  slides[currentSlide].classList.add('active');
  dotsContainer.children[currentSlide].classList.add('active');
}

setInterval(()=>goToSlide((currentSlide+1)%slides.length),5000);

/* ── BUILD CATEGORY SLIDER ────────────────────────────── */
const track = document.getElementById('sliderTrack');
const doubled = [...categories,...categories]; // duplicate for infinite effect
doubled.forEach(c=>{
  track.innerHTML += `
  <div class="cat-card">
    <img src="${c.img}" alt="${c.label}" loading="lazy"/>
    <div class="cat-card-overlay">
      <div>
        <div class="cat-card-icon"><i class="${c.icon}"></i></div>
        <div class="cat-card-label">${c.label}</div>
      </div>
    </div>
  </div>`;
});

/* ── BUILD PRODUCTS ───────────────────────────────────── */
function renderProducts(filter='all'){
  const grid = document.getElementById('productsGrid');
  const filtered = filter==='all' ? products : products.filter(p=>p.cat===filter);
  grid.innerHTML = filtered.map(p=>`
  <div class="product-card">
    <div class="product-img-wrap">
      <img src="${p.img}" alt="${p.title}" loading="lazy" class = "prod-img prod-img-${p.cat}"
       id = "prod-img-${p.id}"/>
      ${p.badge?`<div class="product-badge">${p.badge}</div>`:''}
      <div class="product-fav"><i class="far fa-heart"></i></div>
    </div>
    <div class="product-body">
      <div class="product-cat">${p.cat==='gas'?'Gas & Cylinders':p.cat==='kitchen'?'Kitchen':'Foodstuff'}</div>
      <div class="product-title">${p.title}</div>
      <div class="product-desc">${p.desc}</div>
      <div class="product-footer">
        <div class="product-price">${p.price} <span>/ unit</span></div>
        <a href="${WHATSAPP}?text=Hi%2C%20I%20want%20to%20order%3A%20${encodeURIComponent(p.title)}" target="_blank" class="btn-whatsapp"><i class="fab fa-whatsapp"></i> Order</a>
      </div>
    </div>
  </div>`).join('');
}
renderProducts();

document.querySelectorAll('.filter-tab').forEach(tab=>{
  tab.addEventListener('click',function(){
    document.querySelectorAll('.filter-tab').forEach(t=>t.classList.remove('active'));
    this.classList.add('active');
    renderProducts(this.dataset.filter);
    observeFadeUp();
  });
});

/* ── BUILD TESTIMONIALS ───────────────────────────────── */
const testGrid = document.getElementById('testGrid');
testimonials.forEach(t=>{
  testGrid.innerHTML += `
  <div class="test-card fade-up">
    <div class="test-quote-icon">"</div>
    <div class="test-stars">${'<i class="fas fa-star"></i>'.repeat(t.stars)}${t.stars<5?'<i class="far fa-star"></i>':''}</div>
    <p class="test-text">${t.text}</p>
    <div class="test-author">
      <div class="test-avatar">${t.name.charAt(0)}</div>
      <div><div class="test-name">${t.name}</div><div class="test-loc"><i class="fas fa-location-dot" style="color:var(--orange);font-size:.75rem;margin-right:4px"></i>${t.loc}</div></div>
    </div>
  </div>`;
});

/* ── NAVBAR SCROLL ────────────────────────────────────── */
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll',()=>{
  navbar.classList.toggle('scrolled',window.scrollY>60);
  scrollTopBtn.classList.toggle('show',window.scrollY>300);
});

/* ── MOBILE MENU ──────────────────────────────────────── */
function toggleMenu(){
  const m=document.getElementById('mobileMenu');
  const h=document.getElementById('hamburger');
  m.classList.toggle('active');
  h.classList.toggle('open');
}
function closeMenu(){
  document.getElementById('mobileMenu').classList.remove('active');
  document.getElementById('hamburger').classList.remove('open');
}

/* ── FADE-UP OBSERVER ─────────────────────────────────── */
function observeFadeUp(){
  const els = document.querySelectorAll('.fade-up:not(.visible)');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
  },{threshold:.12});
  els.forEach(el=>obs.observe(el));
}
observeFadeUp();

/* ── COUNTER ANIMATION ────────────────────────────────── */
const counters = document.querySelectorAll('[data-target]');
const counterObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    const el = e.target;
    const target = +el.dataset.target;
    const dur = 1600;
    const step = target/dur*16;
    let cur=0;
    const timer=setInterval(()=>{
      cur=Math.min(cur+step,target);
      el.textContent = cur>=1000 ? Math.floor(cur).toLocaleString()+'+' : Math.floor(cur)+(target===100?'%':target===9?'+':'+');
      if(cur>=target)clearInterval(timer);
    },16);
    counterObs.unobserve(el);
  });
},{threshold:.5});
counters.forEach(c=>counterObs.observe(c));

/* ── FORM SUBMIT ──────────────────────────────────────── */
function submitForm(e){
  e.preventDefault();
  const btn = e.target;
  btn.innerHTML='<i class="fas fa-check"></i> Message Sent!';
  btn.style.background='#25D366';
  setTimeout(()=>{btn.innerHTML='<i class="fas fa-paper-plane"></i> Send Message';btn.style.background='';},3000);
}

/* ── HEART TOGGLE ─────────────────────────────────────── */
document.addEventListener('click',e=>{
  if(e.target.classList.contains('fa-heart')||e.target.parentElement.classList.contains('product-fav')){
    const icon = e.target.closest('.product-fav').querySelector('i');
    icon.classList.toggle('fas');
    icon.classList.toggle('far');
    icon.style.color = icon.classList.contains('fas') ? 'var(--orange)' : '';
  }
});