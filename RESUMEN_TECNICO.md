# Resumen Técnico - Landing Page

## ¿El sitio está hecho en Next.js? ¿Qué versión?

**Sí**, el sitio está desarrollado con **Next.js versión 14.2.5**.

- Framework: Next.js 14.2.5
- React: 18.3.1
- TypeScript: 5.5.3
- App Router: Sí (estructura basada en `app/` directory)

---

## ¿Qué librería usas para i18n?

**No se utiliza ninguna librería externa** para i18n (como `next-intl`, `next-i18next`, etc.). El proyecto implementa un **sistema de internacionalización personalizado (custom)**.

### Implementación Custom:

1. **`lib/i18n.ts`**: Utilidades para manejo de locales
   - Tipos: `Locale = 'ca' | 'es' | 'en'`
   - Funciones: `getLocaleFromPathname()`, `buildLocalizedPath()`, `getLocaleDisplayName()`, etc.

2. **`lib/translations.ts`**: Diccionarios centralizados de traducciones
   - Estructura tipada con TypeScript
   - Soporte para: Español (es), Inglés (en), Catalán (ca)

3. **`lib/hooks/useLocaleSwitcher.ts`**: Hook personalizado para cambio de idioma
   - Preserva path, hash y search params al cambiar idioma
   - Maneja la navegación con `next/navigation`

### Estrategia de Rutas:
- Sistema basado en prefijos de locale en la URL:
  - `/es/` - Español (idioma por defecto)
  - `/en/` - Inglés
  - `/ca/` - Catalán

---

## ¿Dónde está ubicado tu LanguageSwitcher?

El **LanguageSwitcher** está integrado en el componente **`Header.tsx`** (navbar), con dos implementaciones según el dispositivo:

### Desktop (Pantallas medianas y grandes):
- **Ubicación**: Barra de navegación superior, lado derecho
- **Tipo**: Dropdown compacto con botón y menú desplegable
- **Líneas de código**: `components/Header.tsx` (líneas 140-199)
- **Características**:
  - Botón con icono de idioma y código corto (ES, EN, CA)
  - Menú desplegable con nombres completos de idiomas
  - Indicador visual del idioma activo

### Mobile (Pantallas pequeñas):
- **Ubicación**: Dentro del menú móvil (overlay full-screen)
- **Tipo**: Botones horizontales en la parte inferior del menú
- **Líneas de código**: `components/Header.tsx` (líneas 283-315)
- **Características**:
  - Sección dedicada al final del menú móvil
  - Botones con código corto y nombre completo
  - Cierre automático del menú al seleccionar idioma

### Componente Principal:
```typescript
// components/Header.tsx
export default function Header(_props: HeaderProps = {}) {
  // ... lógica del LanguageSwitcher
}
```

### Hook Utilizado:
- `useLocaleSwitcher()` desde `lib/hooks/useLocaleSwitcher.ts`
- Funciones: `switchLocale()`, `getCurrentLocale()`

---

## Resumen de Arquitectura i18n

- ✅ **Sistema custom** sin dependencias externas
- ✅ **3 idiomas soportados**: Español, Inglés, Catalán
- ✅ **Rutas localizadas**: `/es/`, `/en/`, `/ca/`
- ✅ **LanguageSwitcher integrado** en el Header (navbar)
- ✅ **Responsive**: Diferentes UI para desktop y mobile
- ✅ **Type-safe**: Todo tipado con TypeScript
- ✅ **SEO-friendly**: Preserva URLs y metadatos por idioma

