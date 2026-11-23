# Dulce Café · Front-end Style Guide

> **Guía de estilos visuales, arquitectura de componentes, tipografía, paleta de colores, diseño responsivo y lineamientos de implementación web para la cafetería de especialidad y repostería artesanal "Dulce Café".**  
> Proyecto desarrollado para la Semana 12 del curso de **Diseño Web**: *Organización y preparación de recursos para la implementación web*.

---

## 1. Diseño Responsivo y Breakpoints

Los componentes y páginas fueron maquetados conforme a las especificaciones estándar de pantalla y a los mockups diseñados en Figma:

- **Móvil (Mobile):** `320px` – `639px` (Viewport de referencia en Figma: `375px` / `390px`)
- **Tableta (Tablet):** `640px` – `1023px` (Viewport de referencia en Figma: `768px` / `834px`)
- **Escritorio (Desktop):** `1024px` – `1440px` (Viewport de referencia en Figma: `1440px`)
- **Pantallas Panorámicas (Ultrawide):** `1440px` en adelante con ancho máximo de contenedor (`max-width: 1280px`) centrado con margen automático.

> 💡 **Accesibilidad y Fluidez:** Toda la interfaz es elástica y adaptativa a resoluciones intermedias, cumpliendo con los estándares de accesibilidad **WCAG 2.1 AA** (ratio de contraste superior a 4.5:1 para texto normal y soporte para usuarios con `prefers-reduced-motion`).

---

## 2. Paleta de Colores (Color Palette)

La paleta cromática transmite calidez, confort, sofisticación artesanal y apetitosidad, reflejando el aroma del café de altura y el glaseado de postres recién horneados.

### Colores Principales de Marca (Brand Colors)
| Nombre | Valor HEX | Valor HSL | Variable CSS | Aplicación en la Interfaz |
|---|---|---|---|---|
| **Crema Base** | `#F6EEDC` | `hsl(41, 62%, 91%)` | `--color-crema` | Fondo general del sitio web y contraste cálido |
| **Crema Claro** | `#FBF6EA` | `hsl(42, 69%, 95%)` | `--color-crema-claro` | Fondo de menús móviles, tarjetas de método y citas |
| **Malva Tostado** | `#85605D` | `hsl(4, 18%, 44%)` | `--color-malva` | Fondo de la portada Hero y fondo del pie de página |
| **Malva Oscuro** | `#6D4D4A` | `hsl(4, 19%, 36%)` | `--color-malva-dark` | Gradientes de cabeceras secundarias (Page Hero) |
| **Chocolate Amargo** | `#4A2A27` | `hsl(5, 31%, 22%)` | `--color-chocolate` | Texto principal, botones principales y bordes |
| **Tinta Café Profundo** | `#2E1816` | `hsl(5, 34%, 13%)` | `--color-tinta` | Títulos principales (H1, H2), top bar corporativa y hover |
| **Texto Suave** | `#5E3F3B` | `hsl(5, 23%, 30%)` | `--color-texto-suave` | Párrafos secundarios, notas de cata y descripciones |
| **Frambuesa Silvestre** | `#7A2540` | `hsl(341, 53%, 31%)` | `--color-frambuesa` | Eyebrows, precios destacados, acentos y script |

### Colores de Tarjetas y Acentos Visuales
| Nombre | Valor HEX | Uso Específico |
|---|---|---|
| **Rosa Pastel** | `#F2D0D1` | Tarjeta de la Tarta de frambuesa y fondo multimedia |
| **Durazno Cálido** | `#F3DDCC` | Tarjeta del Brownie corazón |
| **Lila Lavanda** | `#CFB6C6` | Tarjeta del Bizcocho de lavanda |
| **Círculo de Iconos** | `#F0DCCB` | Fondo circular para iconos de datos rápidos y barismo |
| **Botón Secundario Rosa** | `#F3D6D6` / Borde `#C6707F` | Botones de acento "Conocer más" y llamadas de acción |

### Colores de Estado del Sistema
- **Éxito / Confirmado:** `#2E7D32` (fondo `#E8F5E9`) — Check de reserva confirmada y disponibilidad de mesas.
- **Atención / Valoración:** `#E5A823` — Estrellas de reseña (5/5) y micro-lotes especiales de cata.
- **En Línea / Activo:** `#4CAF50` — Indicador pulsante de estado de tueste y horneado fresco.

> **Verificación de Contraste:**  
> - Crema (`#F6EEDC`) sobre Malva (`#85605D`): Ratio de **4.8:1** (Pasa WCAG AA).  
> - Chocolate (`#4A2A27`) sobre Crema (`#F6EEDC`): Ratio de **8.9:1** (Pasa WCAG AAA).

---

## 3. Tipografía y Escala Tipográfica

El proyecto utiliza tres familias tipográficas combinadas armoniosamente:

1. **Cormorant Garamond:** Tipografía Serif de estilo clásico y refinado inspirada en los tipos garaldos. Se emplea en títulos principales, titulares de tarjetas y logotipo.
2. **DM Sans:** Tipografía Sans-Serif moderna con proporciones geométricas y excelente legibilidad para cuerpos de texto, datos técnicos, botones y campos de formulario.
3. **Parisienne:** Tipografía caligráfica Cursive con trazos libres que añade un sello artesanal humano en las etiquetas de los postres y frases de autor.

### Pesos Tipográficos Utilizados
- **Cormorant Garamond:** Medium (`500`), SemiBold (`600`), Bold (`700`).
- **DM Sans:** Regular (`400`), Medium (`500`), SemiBold (`600`), Bold (`700`).
- **Parisienne:** Regular (`400`).

### Escala Tipográfica Modular
| Jerarquía | Elemento HTML / Clase | Escritorio (1440px) | Tableta (768px) | Móvil (375px) | Interlineado | Peso |
|---|---|---|---|---|---|---|
| **Display / H1** | `.hero h1` | `74 px (4.6rem)` | `56 px (3.5rem)` | `46 px (2.85rem)` | `1.02` | 600 / SemiBold |
| **Script Hero** | `.highlight-script` | `84 px (5.2rem)` | `64 px (4.0rem)` | `52 px (3.2rem)` | `1.0` | 400 (Parisienne) |
| **H2 Sección** | `.section h2`, `.coffee h2` | `54 px (3.375rem)` | `42 px (2.625rem)` | `37 px (2.3rem)` | `1.05` | 600 / SemiBold |
| **H3 Tarjeta** | `.card h3`, `.catalog-card h3` | `34 px (2.15rem)` | `28 px (1.75rem)` | `30 px (1.85rem)` | `1.1` | 600 / SemiBold |
| **H4 Subtítulo** | `.method-card h4` | `22 px (1.375rem)` | `20 px` | `19 px` | `1.2` | 700 / Bold |
| **Párrafo Hero** | `.hero__copy p` | `18 px (1.125rem)` | `17 px` | `16 px (1rem)` | `1.65` | 400 / Regular |
| **Cuerpo General** | `body, p` | `16 px (1rem)` | `16 px (1rem)` | `16 px (1rem)` | `1.6` | 400 / Regular |
| **Eyebrow / Badge** | `.eyebrow` | `13 px (0.8125rem)` | `13 px` | `12 px` | `1.2` | 700 (Tracking: 0.16em) |
| **Botones** | `.btn` | `13 px (0.8125rem)` | `13 px` | `13 px` | `1.0` | 600 (Tracking: 0.10em) |
| **Script Postres** | `.script` | `29 px (1.85rem)` | `25 px` | `28 px` | `1.0` | 400 (Parisienne) |

---

## 4. Componentes Visuales y Elevación

### 4.1. Botones (Buttons)
- **Botón Primario (`.btn`):** Fondo Chocolate (`#4A2A27`), texto Crema (`#F6EEDC`), borde sutil `#E9D9C2`, forma de píldora (`border-radius: 999px`). Al hover se oscurece a `#2E1816` y se eleva `-2px`.
- **Botón Secundario Rosa (`.btn--pink`):** Fondo `#F3D6D6`, texto Frambuesa (`#7A2540`), borde `#C6707F`. Al hover fondo `#E8C1C3`.
- **Botón Outline (`.btn--outline`):** Fondo transparente, borde de 1.5px en color Crema o Chocolate.
- **Botón de Icono (`.icon-btn`):** Círculo de 42px con borde de 1.5px y efecto de pulsación accesible.

### 4.2. Tarjetas de Postres (`.card`)
- Forma con esquinas muy redondeadas (`border-radius: 32px`).
- Fondo temático de color (Rosa, Durazno, Lila).
- Ilustración centrada con sombra proyectada difusa (`filter: drop-shadow`).
- Separador inferior sutil (`border-top: 1px solid rgba(74,42,39,0.2)`).
- Elevación dinámica al pasar el ratón: `transform: translateY(-8px)` con sombra profunda.

### 4.3. Borde de Papel Rasgado (`.torn`)
- Recurso visual distintivo que conecta y separa la portada (`.hero`) y el pie de página (`.site-footer`) del resto del sitio.
- Implementado vectorialmente mediante `assets/images/borde-rasgado-crema.svg` y `assets/images/borde-rasgado-malva.svg`.

### 4.4. Sombras y Elevaciones (Box Shadows)
- **Base / Tarjeta:** `0 4px 14px rgba(74, 42, 39, 0.08)`
- **Hover / Interacción:** `0 16px 32px rgba(74, 42, 39, 0.16)`
- **Modal / Diálogo:** `0 24px 60px rgba(46, 24, 22, 0.28)`
- **Navegación Sticky:** `0 4px 20px rgba(74, 42, 39, 0.06)`

---

## 5. Sistema de Espaciado y Grilla (Spacing & Layout Grid)

El sistema de espaciado se basa en una escala modular con múltiplo de **8px**:

| Token CSS | Valor | Uso Típico |
|---|---|---|
| `--espacio-1` | `8px` | Espaciado entre iconos y etiquetas, gap mínimo |
| `--espacio-2` | `16px` | Padding interno de items, márgenes de texto |
| `--espacio-3` | `24px` | Separación entre columnas de formulario y botones |
| `--espacio-4` | `32px` | Padding de tarjetas y separación de cabeceras |
| `--espacio-5` | `56px` | Padding de secciones y margen lateral en escritorio |
| `--espacio-6` | `80px` | Espaciado entre bloques mayores y módulos temáticos |
| `--espacio-7` | `110px` | Relleno superior de pie de página y portada |

---

## 6. Arquitectura de Recursos y Medios

Todos los recursos se encuentran organizados rigurosamente:

- **Fuentes Tipográficas TTF (100% Offline):** `assets/fonts/` y `assets/fonts/static/`
- **Imágenes, Favicons e Iconos Vectoriales SVG:** `assets/images/` y `assets/`
- **Mockups de Pantalla y Prototipos de Figma:** `design/` y `design/figma_pages/`
- **Código Fuente Modular:** `src/css/styles.css` (estilos) y `src/js/main.js` (comportamiento e i18n).
