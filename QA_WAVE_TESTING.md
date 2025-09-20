# QA Testing - Wave Decoration

## Tests Manuales Requeridos

### 1. **Visual Testing - Desktop**
- [ ] **Test**: Abrir en desktop (1920x1080)
  - **Esperado**: Wave visible en la parte inferior del Hero, sin parpadeos
  - **Resultado**: ✅/❌

- [ ] **Test**: Redimensionar ventana (1200px, 768px, 480px)
  - **Esperado**: Wave mantiene altura de 80px y se adapta al ancho
  - **Resultado**: ✅/❌

- [ ] **Test**: Verificar z-index (wave no tapa Header)
  - **Esperado**: Header visible por encima de la wave
  - **Resultado**: ✅/❌

### 2. **Visual Testing - Móvil**
- [ ] **Test**: Abrir en móvil (375px, 414px)
  - **Esperado**: Wave visible sin cortar el Hero
  - **Resultado**: ✅/❌

- [ ] **Test**: Rotar dispositivo (portrait/landscape)
  - **Esperado**: Wave se adapta correctamente
  - **Resultado**: ✅/❌

### 3. **Animación Testing**
- [ ] **Test**: Animación normal (prefers-reduced-motion: no-preference)
  - **Esperado**: Movimiento suave de 3s, sutil pero visible
  - **Resultado**: ✅/❌

- [ ] **Test**: Animación reducida (prefers-reduced-motion: reduce)
  - **Esperado**: Movimiento muy sutil de 6s o desactivado
  - **Resultado**: ✅/❌

- [ ] **Test**: Cambiar preferencia de movimiento en DevTools
  - **Esperado**: Animación se adapta inmediatamente
  - **Resultado**: ✅/❌

### 4. **Performance Testing**
- [ ] **Test**: Lighthouse CLS Score
  - **Esperado**: CLS < 0.1 (bueno)
  - **Resultado**: ✅/❌

- [ ] **Test**: Lighthouse Performance Score
  - **Esperado**: Performance > 90
  - **Resultado**: ✅/❌

- [ ] **Test**: CPU usage durante animación
  - **Esperado**: Uso de CPU bajo y estable
  - **Resultado**: ✅/❌

### 5. **Cross-Browser Testing**
- [ ] **Test**: Chrome (última versión)
  - **Esperado**: Wave visible y animada correctamente
  - **Resultado**: ✅/❌

- [ ] **Test**: Firefox (última versión)
  - **Esperado**: Wave visible y animada correctamente
  - **Resultado**: ✅/❌

- [ ] **Test**: Safari (última versión)
  - **Esperado**: Wave visible y animada correctamente
  - **Resultado**: ✅/❌

- [ ] **Test**: Edge (última versión)
  - **Esperado**: Wave visible y animada correctamente
  - **Resultado**: ✅/❌

### 6. **Accessibility Testing**
- [ ] **Test**: Con screen reader (NVDA/JAWS)
  - **Esperado**: Wave no interfiere con la navegación
  - **Resultado**: ✅/❌

- [ ] **Test**: Navegación por teclado
  - **Esperado**: Focus no se ve afectado por la wave
  - **Resultado**: ✅/❌

- [ ] **Test**: Alto contraste
  - **Esperado**: Wave visible en modo alto contraste
  - **Resultado**: ✅/❌

### 7. **Edge Cases**
- [ ] **Test**: Zoom 200%
  - **Esperado**: Wave se mantiene proporcional
  - **Resultado**: ✅/❌

- [ ] **Test**: Conexión lenta (3G)
  - **Esperado**: Wave aparece sin layout shift
  - **Resultado**: ✅/❌

- [ ] **Test**: JavaScript deshabilitado
  - **Esperado**: Wave visible (CSS puro)
  - **Resultado**: ✅/❌

## Criterios de Aceptación

- [ ] Wave visible sin parpadeos en desktop y móvil
- [ ] Sin desplazar hero/header (z-index correcto)
- [ ] Respeta prefers-reduced-motion
- [ ] Lighthouse CLS < 0.1
- [ ] Animación suave y no intrusiva
- [ ] Performance optimizada (sin filtros pesados)

## Configuración de Testing

### DevTools - Prefers Reduced Motion
1. Abrir DevTools (F12)
2. Ir a "Rendering" tab
3. Buscar "Emulate CSS media feature prefers-reduced-motion"
4. Alternar entre "no-preference" y "reduce"

### Lighthouse Testing
1. Abrir DevTools (F12)
2. Ir a "Lighthouse" tab
3. Seleccionar "Performance" y "Accessibility"
4. Ejecutar audit
5. Verificar CLS score

### Responsive Testing
1. Abrir DevTools (F12)
2. Activar "Device Toolbar" (Ctrl+Shift+M)
3. Probar diferentes dispositivos:
   - iPhone SE (375x667)
   - iPhone 12 Pro (390x844)
   - iPad (768x1024)
   - Desktop (1920x1080)

## Notas de Testing

- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Desktop, Tablet, Mobile
- **Configuraciones**: Normal motion, Reduced motion, High contrast
- **Conexiones**: Fast 3G, Slow 3G, Offline

## Rollback Plan

Si hay problemas críticos:
1. Revertir `components/Hero.tsx` a versión anterior
2. Revertir estilos en `app/globals.css`
3. Commit: `revert: wave decoration fixes due to visual issues`
