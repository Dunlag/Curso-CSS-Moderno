---
name: css-modern-pages
description: Crea paginas y componentes web con enfoque CSS-first, comentarios por secciones, formato limpio y responsive para movil, tablet y desktop 1080+. Usa JS solo cuando sea estrictamente necesario.
---

# CSS Modern Pages

## Objetivo
Construir interfaces web modernas con estilo profesional y mantenible, priorizando CSS sobre JavaScript siempre que sea posible.

## Reglas principales
1. Enfoque CSS-first: resolver estructura visual, estados e interacciones con CSS antes de considerar JS.
2. HTML semantico y accesible: usar etiquetas correctas y atributos esenciales (`alt`, `label`, `aria-*` cuando aplique).
3. Codigo limpio: estructura clara, indentacion consistente y nombres de clases coherentes.
4. Comentarios por secciones en CSS para facilitar lectura y mantenimiento.
5. Responsive obligatorio en 3 niveles: movil, tablet y desktop 1080+.

## Estructura recomendada
- `index.html`
- `estilos.css`
- `app.js` solo si hace falta

## Organizacion de CSS
Orden sugerido:
- Base y reset
- Variables globales
- Layout principal
- Componentes
- Estados e interacciones
- Responsive

Comentarios sugeridos:
- `/* Base y reset */`
- `/* Variables */`
- `/* Layout principal */`
- `/* Componente: ... */`
- `/* Estados e interacciones */`
- `/* Responsive: tablet */`
- `/* Responsive: desktop grande */`

## Responsive (mobile-first)
- Base movil sin media query.
- Tablet: `@media (min-width: 768px)`.
- Desktop grande: `@media (min-width: 1080px)`.

Recomendado:
- `clamp()` para tipografia y espacios fluidos.
- `min()`, `max()` para contenedores y escalado.

## Priorizar CSS moderno
Usar cuando aporte valor:
- `:has()`, `:is()`, `:where()`, `:not()`
- Grid, Flex, Subgrid, Container Queries
- Custom properties y `@property`
- `dialog`, `popover`

## Uso de JavaScript
Agregar JS solo si la solucion no se puede resolver de forma robusta con CSS/HTML nativo.
Si se usa JS:
- Mantenerlo pequeno y centrado en comportamiento.
- Evitar usar JS para estilos que CSS cubre.

## Criterios de calidad
- Semantica correcta.
- Accesibilidad basica cubierta.
- CSS modular y comentado.
- Buen comportamiento en movil, tablet y desktop 1080+.
- Estilo visual consistente.
