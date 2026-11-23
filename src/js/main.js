/**
 * ============================================================================
 * Dulce Café · JavaScript Interactivo y Motor de Experiencia Web
 * Arquitectura modular, accesibilidad WCAG AA, motor i18n y gestión de estado
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Diccionario Multidioma (i18n Engine: ES / EN / FR)
  // --------------------------------------------------------------------------
  const translations = {
    es: {
      top_contact: "Contacto:",
      top_hours: "Horario: Lun-Dom 07:30 - 21:00 hrs",
      top_status: "Granos frescos tostados hoy",
      nav_home: "Inicio",
      nav_menu: "Carta de Postres & Café",
      nav_about: "Nuestro Café",
      nav_booking: "Reservar Mesa",
      nav_contact: "Contacto",
      hero_title: "Momentos dulces empiezan aquí.",
      hero_subtitle: "Café de especialidad recién molido y repostería artesanal horneada cada mañana. Pasa por una taza y quédate por la conversación.",
      btn_view_menu: "Ver la Carta",
      btn_book_table: "Reservar Mesa",
      stat_origin: "Granos de Origen",
      stat_recipes: "Recetas Propias",
      stat_satisfaction: "Satisfacción",
      quick_open_title: "Abierto todos los días",
      quick_open_desc: "07:30 a 21:00 hrs · Sin reserva requerida",
      quick_origin_title: "Granos de especialidad",
      quick_origin_desc: "Villa Rica, Cusco y Puno · Tostado artesanal",
      quick_bakery_title: "Horneado diario",
      quick_bakery_desc: "En pequeños lotes con ingredientes naturales",
      sec_desserts_eyebrow: "Nuestros postres",
      sec_desserts_title: "Algo dulce para cada taza",
      sec_desserts_note: "Elaboramos en pequeñas tandas para que cada porción llegue con su textura y aroma intactos a tu mesa.",
      sec_coffee_eyebrow: "Del grano a la taza",
      sec_coffee_title: "Nuestro café",
      sec_coffee_p1: "Seleccionamos minuciosamente micro-lotes de caficultores peruanos y calibramos la molienda al instante según el método elegido.",
      sec_coffee_p2: "Disfruta un espresso vibrante, un pour-over V60 aromático o un capuchino con arte latte. Cada bebida se sirve con dedicación y calidez.",
      btn_explore_methods: "Conocer Métodos y Orígenes",
      footer_about: "Café de especialidad y repostería de autor en un ambiente cálido para desconectar y compartir.",
      footer_visit: "Visítanos",
      footer_hours: "Horarios",
      footer_follow: "Síguenos",
      search_placeholder: "Buscar café, postres o tartas...",
      search_no_results: "No se encontraron delicias para esa búsqueda.",
      toast_reserved: "¡Reserva confirmada con éxito! Redirigiendo...",
      toast_search_open: "Buscador activado"
    },
    en: {
      top_contact: "Contact:",
      top_hours: "Hours: Mon-Sun 07:30 AM - 09:00 PM",
      top_status: "Fresh beans roasted today",
      nav_home: "Home",
      nav_menu: "Menu & Coffee",
      nav_about: "Our Coffee",
      nav_booking: "Book a Table",
      nav_contact: "Contact",
      hero_title: "Sweet moments start right here.",
      hero_subtitle: "Freshly ground specialty coffee and artisanal pastries baked every morning. Stop by for a cup and stay for the conversation.",
      btn_view_menu: "Explore Menu",
      btn_book_table: "Book a Table",
      stat_origin: "Single Origins",
      stat_recipes: "Signature Treats",
      stat_satisfaction: "Happiness Rate",
      quick_open_title: "Open Every Day",
      quick_open_desc: "07:30 AM to 09:00 PM · Walk-ins welcome",
      quick_origin_title: "Specialty Beans",
      quick_origin_desc: "Villa Rica, Cusco & Puno · Small batch roast",
      quick_bakery_title: "Daily Baking",
      quick_bakery_desc: "Baked in small batches with all-natural ingredients",
      sec_desserts_eyebrow: "Our signature pastries",
      sec_desserts_title: "Something sweet for every cup",
      sec_desserts_note: "Baked in small batches so every single slice reaches your table with fresh aroma and velvety texture.",
      sec_coffee_eyebrow: "From bean to cup",
      sec_coffee_title: "Our specialty coffee",
      sec_coffee_p1: "We curate micro-lots from Peruvian artisan growers and calibrate grinder burrs fresh for each brew method.",
      sec_coffee_p2: "Indulge in a crisp espresso, a fruity pour-over V60, or a velvety flat white with delicate latte art.",
      btn_explore_methods: "Explore Brew Methods",
      footer_about: "Specialty single-origin coffee and artisan bakery in a cozy place to unwind and share great memories.",
      footer_visit: "Visit Us",
      footer_hours: "Hours",
      footer_follow: "Follow Us",
      search_placeholder: "Search coffee, pastry, or cake...",
      search_no_results: "No delicious items found matching your query.",
      toast_reserved: "Reservation successfully confirmed! Redirecting...",
      toast_search_open: "Search modal opened"
    },
    fr: {
      top_contact: "Contact :",
      top_hours: "Horaires : Lun-Dim 07:30 - 21:00",
      top_status: "Grains frais torréfiés ce matin",
      nav_home: "Accueil",
      nav_menu: "Carte & Cafés",
      nav_about: "Notre Café",
      nav_booking: "Réserver une table",
      nav_contact: "Contact",
      hero_title: "Les doux moments commencent ici.",
      hero_subtitle: "Café de spécialité fraîchement moulu et pâtisserie artisanale préparée chaque matin. Venez pour une tasse, restez pour le plaisir.",
      btn_view_menu: "Découvrir la carte",
      btn_book_table: "Réserver une table",
      stat_origin: "Origines uniques",
      stat_recipes: "Recettes maison",
      stat_satisfaction: "Satisfaction",
      quick_open_title: "Ouvert tous les jours",
      quick_open_desc: "07:30 à 21:00 · Sans réservation requise",
      quick_origin_title: "Grains d'exception",
      quick_origin_desc: "Villa Rica, Cusco et Puno · Torréfaction douce",
      quick_bakery_title: "Fournée du jour",
      quick_bakery_desc: "Fait maison avec des ingrédients purs et naturels",
      sec_desserts_eyebrow: "Nos douceurs artisanales",
      sec_desserts_title: "Une douceur pour chaque tasse",
      sec_desserts_note: "Cuit en petites fournées afin que chaque part arrive à votre table avec une fraîcheur et une texture impeccables.",
      sec_coffee_eyebrow: "Du grain à la tasse",
      sec_coffee_title: "Notre café",
      sec_coffee_p1: "Nous sélectionnons avec soin des micro-lots de producteurs péruviens pour vous offrir un profil aromatique remarquable.",
      sec_coffee_p2: "Savourez un espresso vibrant, une extraction douce V60 ou un cappuccino onctueux avec un latte art délicat.",
      btn_explore_methods: "Découvrir nos méthodes",
      footer_about: "Café de spécialité et haute pâtisserie artisanale dans un cadre chaleureux et bienveillant.",
      footer_visit: "Nous trouver",
      footer_hours: "Horaires",
      footer_follow: "Nous suivre",
      search_placeholder: "Rechercher un café, gâteau ou dessert...",
      search_no_results: "Aucun résultat trouvé pour votre recherche.",
      toast_reserved: "Réservation confirmée avec succès ! Redirection...",
      toast_search_open: "Recherche activée"
    }
  };

  // --------------------------------------------------------------------------
  // 2. Base de Datos de Productos para Buscador y Catálogo
  // --------------------------------------------------------------------------
  const catalogDatabase = [
    {
      id: "tarta-frambuesa",
      nombre: "Tarta de frambuesa",
      categoria: "postres",
      precio: "S/. 18.50",
      desc: "Bizcocho de vainilla, crema de mascarpone y capas de chocolate belga.",
      tag: "Cremoso",
      script: "de la casa",
      img: "postre-tarta-frambuesa.svg",
      destacado: true
    },
    {
      id: "brownie-corazon",
      nombre: "Brownie corazón",
      categoria: "postres",
      precio: "S/. 14.00",
      desc: "Chocolate intenso al 70% sobre una base de bizcocho dorado.",
      tag: "Chocolate",
      script: "con cariño",
      img: "postre-brownie-corazon.svg",
      destacado: true
    },
    {
      id: "bizcocho-lavanda",
      nombre: "Bizcocho de lavanda",
      categoria: "postres",
      precio: "S/. 16.00",
      desc: "Migas de cacao crujiente y un delicado toque floral de lavanda.",
      tag: "Floral",
      script: "hecho hoy",
      img: "postre-bizcocho-lavanda.svg",
      destacado: true
    },
    {
      id: "espresso-doble",
      nombre: "Espresso Doble Villa Rica",
      categoria: "cafe",
      precio: "S/. 9.50",
      desc: "Extracción pura a 9 bares. Notas a chocolate amargo y avellanas tostadas.",
      tag: "Intenso",
      script: "origen único",
      img: "cafe-latte-corazon.svg",
      destacado: false
    },
    {
      id: "latte-corazon",
      nombre: "Café Latte con Arte Latte",
      categoria: "cafe",
      precio: "S/. 13.50",
      desc: "Espresso de Cusco con leche cremada a 65°C y diseño floral en espuma.",
      tag: "Suave",
      script: "calidez",
      img: "cafe-latte-corazon.svg",
      destacado: true
    },
    {
      id: "cold-brew-citrico",
      nombre: "Cold Brew Cítrico 16 Horas",
      categoria: "frio",
      precio: "S/. 15.00",
      desc: "Macerado en frío por 16 horas con rodaja de naranja deshidratada.",
      tag: "Refrescante",
      script: "artesanal",
      img: "hero-taza-crema.svg",
      destacado: false
    },
    {
      id: "cheesecake-arandanos",
      nombre: "Cheesecake de Arándanos",
      categoria: "postres",
      precio: "S/. 19.00",
      desc: "Base crujiente de galleta de mantequilla, queso crema suave y coulis fresco.",
      tag: "Frutal",
      script: "favorito",
      img: "postre-tarta-frambuesa.svg",
      destacado: false
    },
    {
      id: "croissant-almendras",
      nombre: "Croissant de Almendras",
      categoria: "postres",
      precio: "S/. 13.00",
      desc: "Masa hojaldrada francesa con crema frangipane y láminas tostadas.",
      tag: "Crujiente",
      script: "tradicional",
      img: "postre-brownie-corazon.svg",
      destacado: false
    },
    {
      id: "v60-filtrado",
      nombre: "Filtrado V60 Geisha Puno",
      categoria: "cafe",
      precio: "S/. 17.00",
      desc: "Método de goteo manual que resalta notas florales de jazmín y durazno.",
      tag: "Especialidad",
      script: "cata 88 pts",
      img: "cafe-latte-corazon.svg",
      destacado: false
    },
    {
      id: "galleta-avena-vegana",
      nombre: "Galleta de Avena & Chía (Vegana)",
      categoria: "sin-gluten",
      precio: "S/. 8.50",
      desc: "Endulzada con panela orgánica, harina de almendras y chips de cacao.",
      tag: "Saludable",
      script: "sin culpa",
      img: "postre-bizcocho-lavanda.svg",
      destacado: false
    }
  ];

  // --------------------------------------------------------------------------
  // 3. Inicialización General al Cargar el DOM
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initYear();
    initLanguageEngine();
    initSearchModal();
    initCategoryFilters();
    initBookingForm();
    initFaqAccordion();
  });

  // --------------------------------------------------------------------------
  // 4. Navegación Móvil y Accesibilidad
  // --------------------------------------------------------------------------
  function initNavigation() {
    var toggleBtn = document.querySelector('.menu-toggle');
    var nav = document.getElementById('menu-principal');

    if (toggleBtn && nav) {
      toggleBtn.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('is-open');
        toggleBtn.setAttribute('aria-expanded', String(isOpen));
        toggleBtn.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
      });

      // Cerrar al pulsar un enlace
      nav.addEventListener('click', function (e) {
        if (e.target.closest('a')) {
          nav.classList.remove('is-open');
          toggleBtn.setAttribute('aria-expanded', 'false');
          toggleBtn.setAttribute('aria-label', 'Abrir menú');
        }
      });

      // Cerrar al pulsar fuera del menú
      document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !toggleBtn.contains(e.target) && nav.classList.contains('is-open')) {
          nav.classList.remove('is-open');
          toggleBtn.setAttribute('aria-expanded', 'false');
          toggleBtn.setAttribute('aria-label', 'Abrir menú');
        }
      });
    }
  }

  // --------------------------------------------------------------------------
  // 5. Actualizador Automático de Año
  // --------------------------------------------------------------------------
  function initYear() {
    var yearEl = document.getElementById('anio');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // --------------------------------------------------------------------------
  // 6. Motor Multidioma (i18n)
  // --------------------------------------------------------------------------
  function initLanguageEngine() {
    var savedLang = localStorage.getItem('dulce_cafe_lang') || 'es';
    applyLanguage(savedLang);

    var langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        if (lang && translations[lang]) {
          localStorage.setItem('dulce_cafe_lang', lang);
          applyLanguage(lang);
          showToast('Idioma cambiado a: ' + lang.toUpperCase());
        }
      });
    });
  }

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    var t = translations[lang];

    // Actualizar botones de selector
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Traducir todos los elementos marcados con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Actualizar placeholders
    var searchInput = document.getElementById('search-input');
    if (searchInput && t.search_placeholder) {
      searchInput.setAttribute('placeholder', t.search_placeholder);
    }
  }

  // --------------------------------------------------------------------------
  // 7. Buscador Interactivo en Tiempo Real
  // --------------------------------------------------------------------------
  function initSearchModal() {
    var searchTriggers = document.querySelectorAll('[data-action="open-search"], .icon-btn[aria-label="Buscar"]');
    var modal = document.getElementById('search-modal');
    var closeBtn = document.getElementById('search-close');
    var searchInput = document.getElementById('search-input');
    var resultsContainer = document.getElementById('search-results');

    if (!modal) return;

    function openModal() {
      modal.classList.add('open');
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
        renderResults('');
      }
    }

    function closeModal() {
      modal.classList.remove('open');
    }

    searchTriggers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });

    if (searchInput && resultsContainer) {
      searchInput.addEventListener('input', function () {
        renderResults(this.value.trim().toLowerCase());
      });
    }

    function renderResults(query) {
      if (!resultsContainer) return;

      var filtered = catalogDatabase.filter(function (item) {
        if (!query) return true;
        return item.nombre.toLowerCase().includes(query) ||
               item.desc.toLowerCase().includes(query) ||
               item.tag.toLowerCase().includes(query);
      });

      if (filtered.length === 0) {
        resultsContainer.innerHTML = '<p style="padding: 24px; text-align: center; color: #7A5C58;">No se encontraron resultados para "' + query + '".</p>';
        return;
      }

      var html = '';
      var basePath = window.location.pathname.includes('/pages/') ? '../assets/' : 'assets/';

      filtered.slice(0, 5).forEach(function (item) {
        var linkUrl = window.location.pathname.includes('/pages/') ? 'detalle-producto.html' : 'pages/detalle-producto.html';
        html += '<a href="' + linkUrl + '" class="search-result-item">' +
                '<img src="' + basePath + item.img + '" alt="' + item.nombre + '" class="search-result-thumb">' +
                '<div>' +
                '<h4 style="font-size: 1.05rem; margin-bottom: 2px;">' + item.nombre + '</h4>' +
                '<p style="font-size: 0.8rem; color: #5E3F3B;">' + item.desc.slice(0, 60) + '... | <strong>' + item.precio + '</strong></p>' +
                '</div>' +
                '</a>';
      });

      resultsContainer.innerHTML = html;
    }
  }

  // --------------------------------------------------------------------------
  // 8. Filtro de Categorías en Catálogo (carta.html)
  // --------------------------------------------------------------------------
  function initCategoryFilters() {
    var filterBtns = document.querySelectorAll('.filter-btn');
    var cards = document.querySelectorAll('.catalog-card');

    if (filterBtns.length === 0 || cards.length === 0) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        var filter = this.getAttribute('data-filter');

        cards.forEach(function (card) {
          var cardCategory = card.getAttribute('data-category');
          if (filter === 'all' || cardCategory === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 9. Sistema de Reserva con Validación y Persistencia
  // --------------------------------------------------------------------------
  function initBookingForm() {
    var form = document.getElementById('booking-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nombre = document.getElementById('book-name').value.trim();
      var email = document.getElementById('book-email').value.trim();
      var personas = document.getElementById('book-people').value;
      var fecha = document.getElementById('book-date').value;
      var hora = document.getElementById('book-time').value;
      var mesa = document.getElementById('book-table') ? document.getElementById('book-table').value : 'Salón íntimo';

      if (!nombre || !email || !fecha || !hora) {
        showToast('Por favor completa todos los campos requeridos.');
        return;
      }

      var bookingData = {
        codigo: 'DC-' + Math.floor(1000 + Math.random() * 9000),
        nombre: nombre,
        email: email,
        personas: personas,
        fecha: fecha,
        hora: hora,
        mesa: mesa,
        timestamp: new Date().toISOString()
      };

      localStorage.setItem('dulce_cafe_ultima_reserva', JSON.stringify(bookingData));
      showToast('¡Reserva registrada con éxito!');

      setTimeout(function () {
        var target = window.location.pathname.includes('/pages/') ? 'confirmacion.html' : 'pages/confirmacion.html';
        window.location.href = target;
      }, 1200);
    });
  }

  // --------------------------------------------------------------------------
  // 10. Preguntas Frecuentes (FAQ Accordion)
  // --------------------------------------------------------------------------
  function initFaqAccordion() {
    var faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = this.closest('.faq-item');
        if (item) {
          item.classList.toggle('open');
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 11. Sistema de Notificaciones Flotantes (Toasts)
  // --------------------------------------------------------------------------
  window.showToast = function (message) {
    var container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '☕ <span>' + message + '</span>';
    container.appendChild(toast);

    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(function () {
        toast.remove();
      }, 300);
    }, 3200);
  };

})();
