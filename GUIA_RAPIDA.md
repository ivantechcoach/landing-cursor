# 🚀 Guía Rápida - Ejecutar el Proyecto

## ⚡ Inicio Rápido

### Opción más simple (si tienes problemas):
```bash
pnpm dev:direct
```

### Opción recomendada:
```bash
pnpm dev:cursor:simple
```

### Opción completa:
```bash
pnpm dev:cursor
```

---

## 📝 Pasos Detallados

1. **Abre la terminal** en la carpeta del proyecto

2. **Ejecuta uno de estos comandos**:
   ```bash
   # Más simple
   pnpm dev:direct
   
   # O
   pnpm dev:cursor:simple
   ```

3. **Espera a ver "Ready"** en la consola

4. **Copia la URL**: `http://localhost:3000`

5. **Abre el navegador de Cursor AI**:
   - Presiona `Ctrl+Shift+P` (o `Cmd+Shift+P` en Mac)
   - Busca "Cursor: Open Browser"
   - Pega la URL: `http://localhost:3000/es`

---

## 🔧 Si algo no funciona

### Error: "Cannot find module"
```bash
pnpm install
```

### Error: Puerto en uso
```bash
# El script detecta automáticamente otro puerto
# O puedes usar:
pnpm dev:direct --port 3001
```

### El servidor no inicia
```bash
# Prueba con el comando más simple:
pnpm dev:direct
```

---

## 📚 Más Información

- **Problemas comunes**: Ver `SOLUCION_PROBLEMAS.md`
- **Optimizaciones**: Ver `OPTIMIZATION_REPORT.md`
- **Documentación completa**: Ver `README.md`

---

## ✅ Verificación

Si todo funciona correctamente, deberías ver:
- ✅ Mensaje "Ready" en la consola
- ✅ URL disponible: `http://localhost:3000`
- ✅ Página cargando en el navegador

---

**¡Listo para desarrollar! 🎉**

