const menuData = {
  desi: [
    {
      name: "Karahi Gosht",
      desc: "Slow-cooked tender mutton in a rich tomato and spice base, finished in the karahi.",
      price: "PKR 1,800",
      badge: "Best Seller",
      img: "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&q=80"
    },
    {
      name: "Daal Makhani",
      desc: "Creamy black lentils simmered overnight with butter, garlic, and aromatic spices.",
      price: "PKR 450",
      badge: "Vegetarian",
      img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80"
    },
    {
      name: "Nihari",
      desc: "A classic slow-cooked beef stew with bone marrow, ginger and special spices.",
      price: "PKR 950",
      badge: "Signature",
      img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80"
    }
  ],
  bbq: [
    {
      name: "Seekh Kabab",
      desc: "Hand-minced beef kababs seasoned with herbs and grilled over live charcoal.",
      price: "PKR 850",
      badge: "Must Try",
      img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80"
    },
    {
      name: "Tandoori Chicken",
      desc: "Marinated whole chicken roasted in our traditional clay tandoor oven.",
      price: "PKR 1,400",
      badge: "Classic",
      img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80"
    },
    {
      name: "Boti Kabab",
      desc: "Tender lamb cubes marinated in yogurt and spices, skewered and charcoal-grilled.",
      price: "PKR 1,200",
      badge: "Popular",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80"
    }
  ],
  chinese: [
    {
      name: "Chicken Manchurian",
      desc: "Crispy chicken tossed in a sweet and spicy Manchurian sauce with spring onions.",
      price: "PKR 950",
      badge: "Spicy",
      img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80"
    },
    {
      name: "Fried Rice Special",
      desc: "Wok-tossed egg fried rice with vegetables, chicken, and soy sauce.",
      price: "PKR 650",
      badge: "Popular",
      img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80"
    },
    {
      name: "Beef Chow Mein",
      desc: "Stir-fried noodles with tender beef strips, vegetables and savory sauces.",
      price: "PKR 800",
      badge: "Chef's Pick",
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80"
    }
  ],
  continental: [
    {
      name: "Grilled Chicken Steak",
      desc: "Juicy grilled chicken breast with mushroom sauce, mashed potatoes and grilled veggies.",
      price: "PKR 1,600",
      badge: "Premium",
      img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80"
    },
    {
      name: "Creamy Pasta",
      desc: "Penne pasta in a creamy white sauce with grilled chicken and fresh herbs.",
      price: "PKR 900",
      badge: "Creamy",
      img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80"
    },
    {
      name: "Club Sandwich",
      desc: "Triple-decker sandwich with chicken, egg, lettuce, tomato and mayo on toasted bread.",
      price: "PKR 650",
      badge: "Light Meal",
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80"
    }
  ]
};

 
// RENDER MENU
function renderMenu(category) {
  const grid = document.getElementById('menuGrid');
  const items = menuData[category];
  grid.innerHTML = '';
  grid.style.opacity = '0';

  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="menu-card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy"/>
        <span class="menu-badge">${item.badge}</span>
      </div>
      <div class="menu-card-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="menu-card-footer">
          <span class="price">${item.price}</span>
          <button class="add-btn" title="Add to Order" onclick="handleAddOrder('${item.name}')">+</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  setTimeout(() => { grid.style.opacity = '1'; grid.style.transition = 'opacity 0.4s ease'; }, 50);
}

 
// MENU TABS
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.tab);
  });
});
renderMenu('desi'); // Default

 
// ADD TO ORDER TOAST
function handleAddOrder(itemName) {
  showToast(`✅ "${itemName}" added to your inquiry!`);
}

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 90px;
    right: 30px;
    background: #1a1a1a;
    color: #fff;
    padding: 14px 22px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    z-index: 9999;
    border-left: 4px solid #D4A017;
    animation: toastIn 0.3s ease;
    max-width: 300px;
  `;
  document.body.appendChild(toast);

  const style = document.createElement('style');
  style.textContent = `@keyframes toastIn { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }`;
  document.head.appendChild(style);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

 
// NAVBAR SCROLL
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

 
// HAMBURGER MENU FOR MOBILE BRO
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  }
});

 
// SCROLL ANIMATIONS
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 0.08}s`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// BACK TO TOP BUTTON
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ACTIVE NAV LINK ON SCROLL
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
        link.style.color = '#D4A017';
      }
    }
  });
});

 
// CONTACT FORM SUBMIT
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  showToast('🎉 Message sent! We\'ll contact you shortly.');
  this.reset();
});

 
// SMOOTH ANCHOR SCROLL OFFSET
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

 
// COUNTER ANIMATION (ABOUT STATS) 
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current + suffix;
  }, 25);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const stats = entry.target.querySelectorAll('.stat h3');
      const values = [30, 5, 50, 100];
      const suffixes = ['+', '+', 'K+', '+'];
      stats.forEach((stat, i) => {
        animateCounter(stat, values[i], suffixes[i]);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) statsObserver.observe(statsSection);

//THE END BRO ;-)