# 🔧 Solución: El proyecto no levanta en localhost

## 🔍 Problema Identificado

El puerto 3000 está ocupado por procesos Node.js existentes. Esto impide que el servidor de desarrollo se inicie.

## ✅ Soluciones Rápidas

### Opción 1: Matar procesos Node.js (Recomendado)

```bash
# Ejecuta el script de diagnóstico primero
pnpm diagnose

# Luego mata los procesos Node.js
pnpm kill-node
```

O manualmente en Windows:
```powershell
# Ver procesos Node.js
tasklist /FI "IMAGENAME eq node.exe"

# Matar todos los procesos Node.js
taskkill /F /IM node.exe
```

### Opción 2: Usar otro puerto

```bash
# Usa el puerto 3001
pnpm dev:direct -- -p 3001
```

O modifica temporalmente el script en `package.json`:
```json
"dev:direct": "next dev --port 3001"
```

### Opción 3: Limpiar y reiniciar

```bash
# Limpia build y reinicia
pnpm dev:clean
```

## 📋 Pasos Detallados

### Paso 1: Diagnóstico

Ejecuta el script de diagnóstico para ver el estado actual:

```bash
pnpm diagnose
```

Este script te mostrará:
- ✅ Versión de Node.js y pnpm
- ✅ Si las dependencias están instaladas
- ✅ Si el puerto 3000 está disponible
- ✅ Procesos Node.js corriendo
- ✅ Recomendaciones específicas

### Paso 2: Limpiar procesos

Si hay procesos Node.js corriendo:

```bash
pnpm kill-node
```

Este script:
- 🔍 Busca todos los procesos Node.js
- 📋 Te muestra cuáles están corriendo
- ❓ Te pregunta si quieres matarlos
- 🛑 Termina los procesos de forma segura

### Paso 3: Iniciar el servidor

Una vez liberado el puerto, inicia el servidor:

```bash
# Opción más simple
pnpm dev:direct

# O para Cursor AI
pnpm dev:cursor:simple

# O el script completo
pnpm dev
```

## 🚨 Problemas Comunes

### Error: "Port 3000 is already in use"

**Causa**: Hay un servidor ya corriendo o procesos huérfanos.

**Solución**:
1. Ejecuta `pnpm kill-node` para matar procesos
2. O usa otro puerto: `pnpm dev:direct -- -p 3001`

### Error: "Cannot find module 'next'"

**Causa**: Las dependencias no están instaladas.

**Solución**:
```bash
pnpm install
```

### Error: "node_modules not found"

**Causa**: Las dependencias no están instaladas.

**Solución**:
```bash
pnpm install
```

### El servidor inicia pero no carga la página

**Causa**: Puede ser un problema de caché o build corrupto.

**Solución**:
```bash
# Limpia el build
pnpm dev:clean

# O manualmente
Remove-Item -Recurse -Force .next
pnpm dev:direct
```

## 🛠️ Scripts Útiles

### Diagnóstico
```bash
pnpm diagnose
```
Muestra el estado completo del proyecto y posibles problemas.

### Matar procesos Node.js
```bash
pnpm kill-node
```
Termina todos los procesos Node.js de forma segura.

### Limpiar y reiniciar
```bash
pnpm dev:clean
```
Limpia el build y reinicia el servidor.

### Desarrollo simple
```bash
pnpm dev:direct
```
Inicia el servidor directamente sin scripts adicionales.

## 📝 Checklist de Verificación

Antes de iniciar el servidor, verifica:

- [ ] Node.js 18+ instalado (`node --version`)
- [ ] pnpm instalado (`pnpm --version`)
- [ ] Dependencias instaladas (`pnpm install`)
- [ ] Puerto 3000 disponible (o usar otro puerto)
- [ ] No hay procesos Node.js corriendo (o matarlos)
- [ ] No hay errores de TypeScript (`pnpm type-check`)

## 💡 Consejos

1. **Usa `pnpm diagnose`** primero para identificar problemas
2. **Mata procesos Node.js** antes de iniciar si hay conflictos
3. **Usa `dev:direct`** si los scripts complejos fallan
4. **Limpia el build** si hay errores extraños: `pnpm dev:clean`
5. **Revisa la consola** para ver mensajes de error específicos

## 🆘 Si nada funciona

1. **Reinstala dependencias**:
   ```bash
   Remove-Item -Recurse -Force node_modules
   Remove-Item pnpm-lock.yaml
   pnpm install
   ```

2. **Limpia todo**:
   ```bash
   Remove-Item -Recurse -Force .next
   Remove-Item -Recurse -Force node_modules
   pnpm install
   pnpm dev:direct
   ```

3. **Verifica la versión de Node.js**:
   ```bash
   node --version  # Debe ser 18+
   ```

4. **Revisa los logs** en la consola cuando ejecutas `pnpm dev:direct`

---

**Nota**: El problema más común es que el puerto 3000 está ocupado. Usa `pnpm kill-node` para resolverlo rápidamente.





