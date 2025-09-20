# Personal Branding Portfolio

Un portfolio personal multilingüe construido con Next.js 14, TypeScript y Tailwind CSS. Este proyecto utiliza el App Router de Next.js y soporta tres idiomas: español, inglés y catalán.

## 🚀 Características

- **Multilingüe**: Soporte para español (ES), inglés (EN) y catalán (CAT)
- **App Router**: Utiliza el nuevo sistema de enrutamiento de Next.js 14
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Estilos modernos y responsivos
- **SEO Optimizado**: Meta tags y estructura optimizada para motores de búsqueda
- **Accesibilidad**: Componentes accesibles y semánticamente correctos
- **Performance**: Optimizado para velocidad y Core Web Vitals

## 📁 Estructura del Proyecto

```
├── app/
│   ├── (es)/                 # Rutas en español
│   │   ├── page.tsx         # Página de inicio
│   │   ├── about/           # Acerca de
│   │   ├── services/        # Servicios
│   │   ├── portfolio/       # Portfolio
│   │   ├── blog/           # Blog
│   │   └── contact/        # Contacto
│   ├── (en)/                 # Rutas en inglés
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── blog/
│   │   └── contact/
│   ├── (cat)/                # Rutas en catalán
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── blog/
│   │   └── contact/
│   ├── globals.css          # Estilos globales
│   └── layout.tsx           # Layout principal
├── components/
│   ├── Header.tsx           # Componente de navegación
│   └── Footer.tsx           # Componente de pie de página
├── public/                  # Archivos estáticos
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework de React con App Router
- **React 18**: Biblioteca de interfaz de usuario
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework de CSS utilitario
- **ESLint**: Linter para JavaScript/TypeScript
- **PostCSS**: Procesador de CSS

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18.0.0 o superior
- npm, yarn o pnpm

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd personal-branding-portfolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abre tu navegador**
   Navega a [http://localhost:3000](http://localhost:3000)

## 🌐 Rutas Disponibles

### Español (ES)
- `/es` - Página de inicio
- `/es/about` - Acerca de
- `/es/services` - Servicios
- `/es/portfolio` - Portfolio
- `/es/blog` - Blog
- `/es/contact` - Contacto

### Inglés (EN)
- `/en` - Home page
- `/en/about` - About
- `/en/services` - Services
- `/en/portfolio` - Portfolio
- `/en/blog` - Blog
- `/en/contact` - Contact

### Catalán (CAT)
- `/cat` - Pàgina d'inici
- `/cat/about` - Sobre mi
- `/cat/services` - Serveis
- `/cat/portfolio` - Portfolio
- `/cat/blog` - Blog
- `/cat/contact` - Contacte

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Tus colores personalizados
      }
    }
  }
}
```

### Contenido
- Edita los archivos de página en `app/(idioma)/`
- Modifica los componentes en `components/`
- Actualiza los metadatos en `app/layout.tsx`

### Estilos
- Estilos globales en `app/globals.css`
- Componentes personalizados usando clases de Tailwind
- Animaciones personalizadas definidas en CSS

## 📱 Responsive Design

El proyecto está optimizado para todos los dispositivos:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Iniciar servidor de producción
npm run start

# Linting
npm run lint

# Verificación de tipos
npm run type-check
```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Otras plataformas
- **Netlify**: Compatible con Next.js
- **AWS Amplify**: Soporte completo
- **Docker**: Incluye Dockerfile si es necesario

## 📈 SEO y Performance

- Meta tags optimizados para cada página
- Open Graph y Twitter Cards
- Sitemap automático
- Optimización de imágenes
- Lazy loading
- Core Web Vitals optimizados

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: Configura NEXT_PUBLIC_CONTACT_EMAIL en .env.local
- **LinkedIn**: [Tu perfil de LinkedIn](https://linkedin.com/in/tu-perfil)
- **GitHub**: [Tu perfil de GitHub](https://github.com/tu-usuario)

---

¡Gracias por usar este template! Si te gusta, considera darle una ⭐ en GitHub.
