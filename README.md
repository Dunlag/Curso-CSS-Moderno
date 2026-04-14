# Portfolio de CSS Moderno

Coleccion de proyectos y demos de CSS moderno reorganizada como portfolio. El repositorio ya no esta ordenado por sesiones del curso, sino por tipos de piezas para acceder rapido a ejemplos reutilizables y proyectos visuales.

## Punto de entrada

- Landing visual: [`index.html`](./index.html)
- Estilos principales de la landing: [`styles.css`](./styles.css)
- Script de animaciones ligeras: [`script.js`](./script.js)

Si publicas este repositorio con GitHub Pages, `index.html` puede funcionar como portada publica del portfolio.

## Publicacion con GitHub Pages

1. Sube el repositorio a GitHub.
2. Entra en `Settings > Pages`.
3. En `Build and deployment`, elige `Deploy from a branch`.
4. Selecciona la rama principal y la carpeta `/ (root)`.
5. Guarda la configuracion y espera a que GitHub genere la URL publica.

Como la landing esta hecha con HTML, CSS y JavaScript estatico, no necesita build ni dependencias para publicarse.

## Estructura actual

### 01-proyectos-destacados

Piezas mas completas o mas vendibles para enseñar el portfolio.

- `hero-responsive`
- `formulario-moderno`
- `dialog-ui`
- `popover-ui`
- `layout-aside-editorial`
- `card-animada`

### 02-componentes-y-patrones

Componentes concretos de interfaz y patrones reutilizables.

- `input-floating-label`
- `formulario-visual-alt`
- `boton-toggle`
- `menu-animado-css`
- `faq-accordion`
- `loader-css`
- `menus-y-patrones-con-has`

Subdemos dentro de `menus-y-patrones-con-has`:

- `filtro-has`
- `galeria-filtrable`
- `menu dropdown animado`
- `menu-animado`
- `menu-animado-alternativo`
- `menu-dropdown`
- `menu-dropdown-animado`

### 03-layouts-y-responsive

Demos tecnicas centradas en composicion y responsive moderno.

- `container-queries-demo`
- `nesting-css-demo`
- `subgrid-demo`

### 04-animaciones-e-interacciones

Ejemplos donde el foco esta en movimiento, feedback visual e interaccion.

- `background-motion`
- `custom-properties-demo`
- `message-animation`
- `icon-animation`

### 90-recursos

Recursos visuales y assets de apoyo.

- `recursos-curso`

### 99-archivo-curso

Material antiguo que se conserva como contexto del curso original.

- `sesion-3-contexto`
- `sesion-5-contexto`
- `sesion-6-contexto`

## Criterio de organizacion

- La raiz muestra solo las carpetas principales del portfolio.
- Los proyectos mas fuertes estan separados de las demos tecnicas.
- Las variantes o experimentos agrupados viven dentro de una coleccion, no como carpetas sueltas en raiz.
- Los recursos y el contexto historico estan apartados para no mezclar material de apoyo con piezas de muestra.

## Uso recomendado

- Si quieres enseñar el repo, empieza por la landing `index.html` o por `01-proyectos-destacados`.
- Si buscas piezas concretas para reutilizar, entra en `02-componentes-y-patrones`.
- Si quieres revisar tecnicas modernas de layout, entra en `03-layouts-y-responsive`.
- Si quieres ejemplos de movimiento o microinteraccion, entra en `04-animaciones-e-interacciones`.


