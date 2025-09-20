# QA Checklist - Selector de Idioma

## Tests Manuales Requeridos

### 1. Preservación de Path y Hash
- [ ] **Test**: Desde `/es/#servicios`, cambiar a EN
  - **Esperado**: Permanecer en `/#servicios` con texto traducido
  - **Resultado**: ✅/❌

- [ ] **Test**: Desde `/en/about`, cambiar a CAT
  - **Esperado**: Permanecer en `/about` con texto traducido
  - **Resultado**: ✅/❌

- [ ] **Test**: Desde `/cat/portfolio?tab=web`, cambiar a ES
  - **Esperado**: Permanecer en `/portfolio?tab=web` con texto traducido
  - **Resultado**: ✅/❌

### 2. Navegación con Teclado
- [ ] **Test**: Navegar con Tab hasta el selector de idioma
  - **Esperado**: Focus visible en botones de idioma
  - **Resultado**: ✅/❌

- [ ] **Test**: Presionar Enter/Espacio en idioma inactivo
  - **Esperado**: Cambiar idioma y mantener path/hash
  - **Resultado**: ✅/❌

- [ ] **Test**: Presionar Enter/Espacio en idioma activo
  - **Esperado**: No hacer nada (ya está activo)
  - **Resultado**: ✅/❌

### 3. Accesibilidad y Screen Reader
- [ ] **Test**: Con NVDA/JAWS, navegar al selector
  - **Esperado**: Anunciar "Seleccionar idioma, grupo de botones"
  - **Resultado**: ✅/❌

- [ ] **Test**: Con screen reader, navegar entre idiomas
  - **Esperado**: Anunciar "Cambiar a [idioma], botón, presionado" para activo
  - **Resultado**: ✅/❌

- [ ] **Test**: Con screen reader, cambiar idioma
  - **Esperado**: Focus se mueve al h1 principal después del cambio
  - **Resultado**: ✅/❌

### 4. Estados Visuales
- [ ] **Test**: Estados hover en idiomas inactivos
  - **Esperado**: Color azul suave en hover
  - **Resultado**: ✅/❌

- [ ] **Test**: Estado activo del idioma actual
  - **Esperado**: Fondo azul oscuro, texto blanco
  - **Resultado**: ✅/❌

- [ ] **Test**: Focus visible en todos los estados
  - **Esperado**: Ring azul visible al hacer focus
  - **Resultado**: ✅/❌

### 5. Responsive Design
- [ ] **Test**: En móvil, abrir menú y probar selector
  - **Esperado**: Mismo comportamiento que desktop
  - **Resultado**: ✅/❌

- [ ] **Test**: En móvil, cambiar idioma cierra menú
  - **Esperado**: Menú se cierra automáticamente
  - **Resultado**: ✅/❌

### 6. Casos Edge
- [ ] **Test**: Cambiar al mismo idioma actual
  - **Esperado**: No hacer nada, no recargar página
  - **Resultado**: ✅/❌

- [ ] **Test**: Con prefers-reduced-motion
  - **Esperado**: Transiciones suaves pero no excesivas
  - **Resultado**: ✅/❌

- [ ] **Test**: Con prefers-contrast: high
  - **Esperado**: Focus ring más grueso y visible
  - **Resultado**: ✅/❌

## Criterios de Aceptación

- [ ] El foco deja de quedarse estático en ES
- [ ] La URL mantiene path y hash al cambiar idioma
- [ ] Teclado y screen reader anuncian el idioma activo
- [ ] Sin regresiones en navegación
- [ ] Focus visible en todos los estados
- [ ] Funciona correctamente en móvil y desktop

## Notas de Testing

- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Screen Readers**: NVDA (Windows), JAWS (Windows), VoiceOver (macOS)
- **Dispositivos**: Desktop, Tablet, Mobile
- **Configuraciones**: Motion reduced, High contrast, Dark mode

## Rollback Plan

Si hay problemas críticos:
1. Revertir `components/Header.tsx` a versión anterior
2. Eliminar archivos `lib/i18n.ts` y `lib/hooks/useLocaleSwitcher.ts`
3. Revertir cambios en `app/globals.css`
4. Commit: `revert: locale switcher changes due to critical issues`
