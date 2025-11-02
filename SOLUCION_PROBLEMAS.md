# 🔧 Solución de Problemas - Servidor de Desarrollo

## Si el comando `pnpm dev:cursor` no funciona

### Opción 1: Usar la versión simple (Recomendado)
```bash
pnpm dev:cursor:simple
```

### Opción 2: Usar el comando estándar
```bash
pnpm dev
```
Luego copia la URL `http://localhost:3000` y ábrela en el navegador de Cursor.

### Opción 3: Ejecutar directamente con Next.js
```bash
npx next dev --port 3000
```

## Verificar que todo esté instalado

```bash
# Verificar que las dependencias estén instaladas
pnpm install

# Verificar que Next.js esté disponible
npx next --version
```

## Problemas comunes

### Error: "Cannot find module 'next'"
**Solución**: Ejecuta `pnpm install`

### Error: Puerto 3000 en uso
**Solución**: 
1. El script detecta automáticamente un puerto disponible
2. O mata el proceso que usa el puerto:
   ```powershell
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

### El servidor inicia pero no puedo acceder
**Solución**:
1. Verifica que veas "Ready" en la consola
2. Asegúrate de usar la URL correcta: `http://localhost:3000/es`
3. Prueba abrir en el navegador de Cursor manualmente

## Comandos útiles

```bash
# Desarrollo estándar
pnpm dev

# Desarrollo limpio (con limpieza previa)
pnpm dev:fresh

# Desarrollo para Cursor (versión completa)
pnpm dev:cursor

# Desarrollo para Cursor (versión simple)
pnpm dev:cursor:simple
```

## Contacto

Si sigues teniendo problemas, verifica:
1. ✅ Node.js está instalado (v18+)
2. ✅ pnpm está instalado
3. ✅ Las dependencias están instaladas (`pnpm install`)
4. ✅ No hay errores de sintaxis en `next.config.js`

