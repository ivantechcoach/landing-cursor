# Variables de Entorno - Ivan Tech Coach

## Configuración Requerida

Para que el sitio web funcione correctamente, configura las siguientes variables de entorno en tu archivo `.env.local`:

### Variables de Contacto (Opcionales)

```bash
# Email de contacto
NEXT_PUBLIC_CONTACT_EMAIL="tu-email@ejemplo.com"

# Teléfono de contacto
NEXT_PUBLIC_CONTACT_PHONE="+34 123 456 789"

# Dirección de contacto
NEXT_PUBLIC_CONTACT_ADDRESS="Barcelona, España"
```

### Comportamiento sin Variables

Si no configuras las variables de contacto:

- **Email**: Se muestra un CTA "Contáctame" que lleva a la sección de contacto
- **Teléfono**: Se muestra un mensaje indicando que se configure la variable
- **Dirección**: No se muestra nada

### Variables de Aplicación

```bash
# Nombre de la aplicación
NEXT_PUBLIC_APP_NAME="Ivan Tech Coach"

# URL de la aplicación
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Descripción de la aplicación
NEXT_PUBLIC_APP_DESCRIPTION="Coaching Tecnológico Profesional - Transforma tu carrera tecnológica con coaching personalizado"
```

### Variables de SEO

```bash
# Nombre del sitio
NEXT_PUBLIC_SITE_NAME="Ivan Tech Coach"

# Descripción del sitio
NEXT_PUBLIC_SITE_DESCRIPTION="Coaching Tecnológico Profesional - Transforma tu carrera tecnológica con coaching personalizado"

# Palabras clave
NEXT_PUBLIC_SITE_KEYWORDS="tech coach,coaching tecnológico,desarrollo profesional,carrera tecnológica,mentoring,programación,desarrollo web,devops,liderazgo técnico"
```

## Instalación

1. Copia el archivo `env.example` a `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Edita `.env.local` con tus valores reales

3. Reinicia el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

## Seguridad

- Las variables que empiezan con `NEXT_PUBLIC_` son visibles en el cliente
- No incluyas información sensible en estas variables
- Para datos sensibles, usa variables sin el prefijo `NEXT_PUBLIC_`
