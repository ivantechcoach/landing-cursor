# QA Testing - Navegación por Teclado del Header

## Tests Manuales Requeridos

### 1. **Skip Link Testing**
- [ ] **Test**: Presionar Tab al cargar la página
  - **Esperado**: Skip link aparece en la parte superior y es visible
  - **Resultado**: ✅/❌

- [ ] **Test**: Presionar Enter en skip link
  - **Esperado**: Navega al main content (h1 de la página)
  - **Resultado**: ✅/❌

- [ ] **Test**: Presionar Tab después del skip link
  - **Esperado**: Skip link desaparece y focus va al logo
  - **Resultado**: ✅/❌

### 2. **Orden de Tab - Desktop**
- [ ] **Test**: Navegación completa con Tab
  - **Esperado**: Skip link (1) → Logo (2) → Nav links (3) → Language switcher (4) → Mobile menu (5)
  - **Resultado**: ✅/❌

- [ ] **Test**: Navegación con Shift+Tab (reversa)
  - **Esperado**: Orden inverso correcto
  - **Resultado**: ✅/❌

- [ ] **Test**: Presionar Enter en cada elemento
  - **Esperado**: Navegación funciona correctamente
  - **Resultado**: ✅/❌

### 3. **Orden de Tab - Móvil**
- [ ] **Test**: Navegación con menú cerrado
  - **Esperado**: Skip link (1) → Logo (2) → Mobile menu button (5)
  - **Resultado**: ✅/❌

- [ ] **Test**: Abrir menú móvil con Enter/Space
  - **Esperado**: Menú se abre y focus va al primer enlace
  - **Resultado**: ✅/❌

- [ ] **Test**: Navegación en menú abierto
  - **Esperado**: Nav links (6) → Language switcher (7)
  - **Resultado**: ✅/❌

- [ ] **Test**: Cerrar menú con Escape
  - **Esperado**: Menú se cierra y focus vuelve al botón
  - **Resultado**: ✅/❌

### 4. **Focus Visible Testing**
- [ ] **Test**: Focus en logo
  - **Esperado**: Ring azul visible alrededor del logo
  - **Resultado**: ✅/❌

- [ ] **Test**: Focus en enlaces de navegación
  - **Esperado**: Ring azul + fondo azul claro + texto azul oscuro
  - **Resultado**: ✅/❌

- [ ] **Test**: Focus en botones de idioma
  - **Esperado**: Ring azul + fondo azul + texto blanco (si activo)
  - **Resultado**: ✅/❌

- [ ] **Test**: Focus en botón de menú móvil
  - **Esperado**: Ring azul visible
  - **Resultado**: ✅/❌

### 5. **Contraste Testing**
- [ ] **Test**: Contraste en estados hover
  - **Esperado**: ≥ 3:1 ratio de contraste
  - **Resultado**: ✅/❌

- [ ] **Test**: Contraste en estados focus
  - **Esperado**: ≥ 3:1 ratio de contraste
  - **Resultado**: ✅/❌

- [ ] **Test**: Contraste en estados active
  - **Esperado**: ≥ 3:1 ratio de contraste
  - **Resultado**: ✅/❌

### 6. **Screen Reader Testing**
- [ ] **Test**: Con NVDA/JAWS, navegar por Tab
  - **Esperado**: Anuncia "Saltar al contenido, enlace" → "Inicio — Ivan Tech Coach, enlace" → etc.
  - **Resultado**: ✅/❌

- [ ] **Test**: Con screen reader, activar skip link
  - **Esperado**: Navega al main content y anuncia el h1
  - **Resultado**: ✅/❌

- [ ] **Test**: Con screen reader, navegar por menú móvil
  - **Esperado**: Anuncia "Toggle menu, botón" → "Inicio, enlace" → etc.
  - **Resultado**: ✅/❌

### 7. **Edge Cases**
- [ ] **Test**: Cambiar idioma con teclado
  - **Esperado**: Focus se mueve al h1 después del cambio
  - **Resultado**: ✅/❌

- [ ] **Test**: Navegación con JavaScript deshabilitado
  - **Esperado**: Skip link y navegación básica funcionan
  - **Resultado**: ✅/❌

- [ ] **Test**: Zoom 200%
  - **Esperado**: Focus visible en todos los elementos
  - **Resultado**: ✅/❌

- [ ] **Test**: Alto contraste
  - **Esperado**: Focus ring más grueso y visible
  - **Resultado**: ✅/❌

## Criterios de Aceptación

- [ ] Focus visible en todos los elementos interactivos del Header
- [ ] Skip-link funciona y lleva al <main>
- [ ] Orden de tab correcto: skip-link → logo → nav → switcher → mobile menu
- [ ] Contraste ≥ 3:1 en todos los estados
- [ ] Sin trampas de foco
- [ ] Screen reader anuncia elementos correctamente

## Configuración de Testing

### DevTools - Keyboard Navigation
1. Abrir DevTools (F12)
2. Ir a "Accessibility" tab
3. Activar "Focus visible" para ver focus rings
4. Usar Tab/Shift+Tab para navegar

### Screen Reader Testing
1. **NVDA (Windows)**: Descargar e instalar NVDA
2. **JAWS (Windows)**: Versión de prueba disponible
3. **VoiceOver (macOS)**: Cmd+F5 para activar

### Contraste Testing
1. Usar herramientas como WebAIM Contrast Checker
2. Verificar colores:
   - Focus ring: #2563eb (blue-600)
   - Focus background: #dbeafe (blue-50)
   - Focus text: #1d4ed8 (blue-700)

## Orden de Tab Detallado

### Desktop
1. **Skip Link** (tabIndex=1) - "Saltar al contenido"
2. **Logo** (tabIndex=2) - "Inicio — Ivan Tech Coach"
3. **Nav Links** (tabIndex=3) - "Inicio", "Acerca de", "Servicios", etc.
4. **Language Switcher** (tabIndex=4) - "ES", "EN", "CAT"
5. **Mobile Menu Button** (tabIndex=5) - Solo visible en móvil

### Móvil (menú cerrado)
1. **Skip Link** (tabIndex=1)
2. **Logo** (tabIndex=2)
3. **Mobile Menu Button** (tabIndex=5)

### Móvil (menú abierto)
1. **Skip Link** (tabIndex=1)
2. **Logo** (tabIndex=2)
3. **Mobile Menu Button** (tabIndex=5)
4. **Nav Links** (tabIndex=6) - Solo cuando menú abierto
5. **Language Switcher** (tabIndex=7) - Solo cuando menú abierto

## Notas de Testing

- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Desktop, Tablet, Mobile
- **Configuraciones**: Normal, High contrast, Reduced motion
- **Herramientas**: DevTools, Screen readers, Contrast checkers

## Rollback Plan

Si hay problemas críticos:
1. Revertir `components/Header.tsx` a versión anterior
2. Revertir estilos en `app/globals.css`
3. Revertir `app/layout.tsx`
4. Commit: `revert: header focus improvements due to navigation issues`
