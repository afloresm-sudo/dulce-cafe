# ☕ Dulce Café · Café de Especialidad & Repostería Artesanal

> **Sitio Web Integral de Cafetería de Especialidad y Repostería de Autor**  
> Desarrollado con base en el mockup y prototipo interactivo concebido en Figma, adaptando una identidad visual cálida, sofisticada y apetitosa con borde de papel rasgado, paleta crema-malva y café de micro-lotes peruanos (Villa Rica, Cusco y Puno).

![Vista Previa del Proyecto](design/reference-layout.png)

---

## 🎓 Información Académica

- **Curso:** Diseño Web
- **Semana:** 12
- **Tema:** Organización de archivos y recursos para la implementación web
- **Actividad Práctica:** Preparación y estructuración de recursos gráficos, estilos CSS, interactividad JavaScript y documentación técnica previa a la implementación web.

---

## 📁 Ubicación del Proyecto

El proyecto se encuentra organizado y listo para su ejecución en:
- **Ruta XAMPP (Entorno de Desarrollo Web):**  
  `c:\xampp\htdocs\DiseñoInterfaz\CAFETERIA\dulce-cafe-web\`
- **URL Local en Servidor Apache:**  
  `http://localhost/DiseñoInterfaz/CAFETERIA/dulce-cafe-web/`

---

## 🎯 1. Objetivo del Proyecto

Organizar la estructura jerárquica de carpetas y archivos de un proyecto web profesional, preparando los recursos gráficos optimizados (SVG y raster), las fuentes tipográficas locales, los estilos modulares y la documentación técnica necesarios para implementar fielmente la página web diseñada previamente en Figma, garantizando compatibilidad multi-dispositivo y soporte offline.

---

## 👥 2. Público Objetivo (Target Audience)

1. **Jóvenes y Profesionales (20 a 45 años):** Personas que buscan un ambiente acogedor, tranquilo y con wifi veloz para teletrabajar, estudiar o sostener reuniones distendidas mientras degustan café de especialidad de origen.
2. **Aficionados al Café de Especialidad y Barismo:** Clientes que valoran la trazabilidad del grano, los métodos de extracción manual (V60, Cold Brew, Prensa Francesa) y la calibración del espresso.
3. **Amantes de la Repostería Fina y Repostería Saludable:** Visitantes interesados en postres recién horneados, así como personas que requieren alternativas veganas o sin gluten.
4. **Usuarios Móviles:** Clientes que ingresan desde su smartphone para consultar rápidamente la carta, verificar la ubicación en Miraflores y reservar una mesa en línea.

---

## 🌟 3. Mejoras y Funcionalidades Implementadas

1. **Estructura Multi-Página Completa y Modular:**
   - `index.html`: Portada principal con secciones Hero, Datos Rápidos, Postres Destacados, Historia de Origen, Métodos de Barismo, Reseñas y Footer.
   - `pages/carta.html`: Catálogo interactivo completo con filtros por categoría (Postres, Cafés, Bebidas Frías, Sin Gluten).
   - `pages/detalle-producto.html`: Ficha técnica de la Tarta de Frambuesa con notas de cata sensorial, maridaje sugerido y selector de porciones.
   - `pages/reserva.html`: Formulario interactivo para agendar mesa por ambiente (Terraza, Salón o Barra Barista) con cálculo dinámico.
   - `pages/confirmacion.html`: Comprobante digital de reserva con código único `#DC-XXXX`, botón para imprimir ticket y persistencia de datos.
   - `pages/contacto.html`: Datos de atención, mapa de acceso, formulario de consultas y preguntas frecuentes (FAQ) en acordeón interactivo.

2. **Selector y Motor de Traducción Multidioma en Tiempo Real (i18n):**
   - Selector en la barra de navegación:
     - 🇪🇸 **ES (Español)**
     - 🇬🇧 **EN (English)**
     - 🇫🇷 **FR (Français)**
   - Traducción instantánea de textos de navegación, llamados de acción, estadísticas y notas de postres.
   - Persistencia del idioma seleccionado mediante `localStorage`.

3. **Buscador Interactivo en Vivo:**
   - Modal flotante con atajo de teclado (`Esc` para cerrar) y búsqueda reactiva al teclear.
   - Permite filtrar postres y cafés al instante con previsualización de precio y enlace directo al detalle.

4. **Soporte 100% Offline con Tipografías Locales:**
   - Inclusión de archivos de fuentes TTF en `assets/fonts/` (`Cormorant Garamond`, `DM Sans` y `Parisienne`).
   - Declaración de reglas `@font-face` con respaldo automático a Google Fonts CDN.

5. **Diseño Responsive con Borde Rasgado (Torn Paper):**
   - Adaptación fluida y visualmente idéntica al prototipo de Figma para **Escritorio (1440px)**, **Tableta (768px)** y **Móvil (375px)**.
   - Menú hamburguesa accesible con atributos ARIA y cierre al hacer clic fuera.

---

## 📁 4. Estructura Oficial del Proyecto

```text
dulce-cafe-web/
│
├── assets/                          # Recursos estáticos y gráficos optimizados
│   ├── fonts/                       # Fuentes tipográficas para funcionamiento offline
│   │   ├── static/                  # Formatos estáticos individuales
│   │   │   ├── CormorantGaramond-Medium.ttf
│   │   │   ├── CormorantGaramond-SemiBold.ttf
│   │   │   ├── CormorantGaramond-Bold.ttf
│   │   │   ├── DMSans-Regular.ttf
│   │   │   ├── DMSans-Medium.ttf
│   │   │   └── DMSans-SemiBold.ttf
│   │   ├── CormorantGaramond-VariableFont_wght.ttf
│   │   ├── DMSans-VariableFont_wght.ttf
│   │   ├── Parisienne-Regular.ttf
│   │   ├── OFL.txt                  # Licencia Open Font License
│   │   └── README.txt               # Documentación técnica de tipografías
│   ├── images/                      # Directorio organizado de iconos y recursos
│   │   ├── logo.svg                 # Logotipo institucional Dulce Café
│   │   ├── favicon.svg              # Favicon vectorial con taza y corazón
│   │   ├── favicon-32x32.png        # Favicon estándar para navegadores
│   │   ├── hero-taza-crema.svg      # Ilustración de portada con taza y crema
│   │   ├── cafe-latte-corazon.svg   # Ilustración de arte latte en taza
│   │   ├── postre-tarta-frambuesa.svg # Ilustración de la tarta de frambuesa
│   │   ├── postre-brownie-corazon.svg # Ilustración del brownie de chocolate
│   │   ├── postre-bizcocho-lavanda.svg# Ilustración del bizcocho de lavanda
│   │   ├── borde-rasgado-crema.svg  # Separador decorativo superior
│   │   ├── borde-rasgado-malva.svg  # Separador decorativo inferior
│   │   ├── icon-buscar.svg          # Icono de búsqueda
│   │   ├── icon-menu.svg            # Icono hamburguesa
│   │   ├── icon-taza.svg            # Icono de datos rápidos
│   │   ├── icon-granos.svg          # Icono de granos de café
│   │   ├── icon-reloj.svg           # Icono de horarios
│   │   ├── icon-ubicacion.svg       # Icono de dirección
│   │   ├── icon-telefono.svg        # Icono de llamadas
│   │   ├── icon-email.svg           # Icono de correo
│   │   ├── icon-estrella.svg        # Icono de valoración
│   │   ├── icon-corazon.svg         # Icono de favoritos
│   │   ├── icon-check.svg           # Icono de confirmación
│   │   └── icon-carrito.svg         # Icono de pedidos
│   └── (archivos sincronizados en la raíz de assets/ para máxima compatibilidad)
│
├── design/                          # Mockups y prototipos de Figma
│   ├── reference-layout.png         # Captura de referencia general de Figma
│   ├── referencia-mockup-cafeteria.png # Arte conceptual de referencia
│   ├── desktop-design.png           # Vista completa de escritorio (1440px)
│   ├── tablet-design.png            # Vista adaptada para tableta (768px)
│   ├── mobile-design.png            # Vista adaptada para móvil (375px)
│   ├── LEEME.md                     # Guía de exportación y resoluciones de Figma
│   └── figma_pages/                 # Capturas individuales de cada pantalla
│       ├── PAG01_Carta.png          # Pantalla de la carta de especialidad
│       ├── PAG01_Carta_Desktop.png  # Carta en resolución 1440px
│       ├── PAG02_Detalle.png        # Ficha técnica del producto
│       ├── PAG03_Home_Desktop.png   # Portada Home en escritorio
│       ├── PAG03_Home_Mobile.png    # Portada Home en móvil
│       ├── PAG04_Reserva.png        # Formulario de reserva de mesa
│       ├── PAG05_Confirmacion.png   # Ticket y confirmación de reserva
│       └── PAG06_Contacto.png       # Pantalla de contacto y preguntas frecuentes
│
├── pages/                           # Páginas secundarias del sitio web
│   ├── carta.html                   # Catálogo con filtros por categoría
│   ├── detalle-producto.html        # Ficha técnica, ingredientes y maridaje
│   ├── reserva.html                 # Formulario de reserva con ambientes
│   ├── contacto.html                # Canales de atención y preguntas frecuentes
│   └── confirmacion.html            # Comprobante digital y resumen de reserva
│
├── src/                             # Código fuente de estilos y lógica
│   ├── css/
│   │   └── styles.css               # Hoja de estilos principal con tokens CSS
│   ├── style/
│   │   └── style.css                # Espejo de compatibilidad para estilos
│   └── js/
│       └── main.js                  # Lógica interactiva, motor i18n, buscador y reservas
│
├── index.html                       # Estructura semántica principal HTML5
├── README.md                        # Documentación técnica general del proyecto
└── style-guide.md                   # Guía oficial de estilos, colores, fuentes y medidas
```

---

## 🚀 5. Cómo Ejecutar el Proyecto

Puedes abrir y visualizar el proyecto de dos formas sencillas:

### Opción A: Ejecución Directa en el Navegador (Sin servidor)
1. Navega hasta la carpeta del proyecto:  
   `c:\xampp\htdocs\DiseñoInterfaz\CAFETERIA\dulce-cafe-web\`
2. Haz doble clic en el archivo `index.html` (o clic derecho > *Abrir con* > Google Chrome / Microsoft Edge / Firefox).
3. Todas las páginas, imágenes y tipografías se visualizarán correctamente de forma instantánea.

### Opción B: A través de XAMPP (Servidor Local Apache)
1. Abre el **XAMPP Control Panel** e inicia el módulo **Apache**.
2. Abre tu navegador web e ingresa la siguiente URL:  
   `http://localhost/DiseñoInterfaz/CAFETERIA/dulce-cafe-web/`

---

## 🛠️ 6. Tecnologías Empleadas

- **HTML5:** Estructuración semántica con elementos de accesibilidad (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<dialog>`, atributos `aria-*`).
- **CSS3 Moderno:** Variables nativas (`:root`), diseño fluido mediante **CSS Grid** y **Flexbox**, media queries responsive y soporte `prefers-reduced-motion`.
- **JavaScript ES6:** Programación modular e inmutable (IIFE), motor multidioma reactivo, validación de formularios, persistencia en `localStorage` y modales dinámicos.
- **Gráficos SVG Vectoriales:** Iconografía nítida e ilustraciones escalables sin pérdida de resolución.
- **Tipografías SIL OFL:** Cormorant Garamond, DM Sans y Parisienne disponibles localmente.

---

## ✅ 7. Verificación de Cumplimiento de la Consigna (Semana 12)

| Requisito de la Actividad Práctica | Estado | Detalle de Implementación |
|---|:---:|---|
| **Carpeta principal con el nombre del proyecto web** | ✅ Cumplido | Directorio `dulce-cafe-web` en XAMPP |
| **Estructura obligatoria de carpetas y archivos** | ✅ Cumplido | `assets/`, `design/`, `src/`, `pages/`, `index.html`, `README.md`, `style-guide.md` |
| **Recursos gráficos preparados y optimizados** | ✅ Cumplido | Iconos SVG, logotipos, favicon y gráficos vectoriales organizados |
| **Mockups y prototipos exportados de Figma** | ✅ Cumplido | `design/` con capturas de escritorio, tableta, móvil y suite `figma_pages/` |
| **Archivo `style-guide.md` documentado** | ✅ Cumplido | Colores HEX/HSL, tipografías, escala, espaciados y elevaciones |
| **Archivo `README.md` completado** | ✅ Cumplido | Descripción, público objetivo, funcionalidades e instrucciones |
| **Archivo `index.html` con estructura semántica** | ✅ Cumplido | HTML5 profesional con todas las secciones del diseño |
| **Archivos CSS y JavaScript dentro de `src/`** | ✅ Cumplido | `src/css/styles.css` y `src/js/main.js` operativos |
| **Entregable en archivo comprimido `.zip`** | ✅ Cumplido | Generado como `dulce-cafe-web.zip` |
