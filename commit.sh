#!/bin/bash
# Script para hacer commit y push de los cambios

git add .

git commit -m "feat: optimización completa del proyecto y soporte para navegador de Cursor AI" \
  -m "Esta actualización incluye optimizaciones significativas de rendimiento, mejoras en la experiencia de desarrollo y soporte completo para ejecutar el proyecto en el navegador interno de Cursor AI." \
  -m "### 🚀 Nuevas Características" \
  -m "- Scripts de desarrollo para Cursor AI (dev:cursor, dev:cursor:simple, dev:direct)" \
  -m "### ⚡ Optimizaciones de Rendimiento" \
  -m "- Next.js: Webpack optimizado, filesystem cache, split chunks mejorado" \
  -m "- TypeScript: Target ES2020, validaciones adicionales, mejor detección de errores" \
  -m "- Componentes: Optimización de memoización y dependencias" \
  -m "### 📚 Documentación" \
  -m "- GUIA_RAPIDA.md: Guía paso a paso para desarrollo" \
  -m "- OPTIMIZATION_REPORT.md: Reporte completo de optimizaciones" \
  -m "- RESUMEN_OPTIMIZACION.md: Resumen ejecutivo" \
  -m "- SOLUCION_PROBLEMAS.md: Guía de troubleshooting" \
  -m "### 🛠️ Mejoras Técnicas" \
  -m "- Configuración mejorada de Next.js y TypeScript" \
  -m "- Compatibilidad mejorada con Windows (npx.cmd)" \
  -m "- Mejor manejo de errores en scripts" \
  -m "- Validación de dependencias antes de iniciar servidor"

echo "✅ Commit realizado exitosamente"
echo "📤 Subiendo cambios a GitHub..."
git push origin feat/lote-1-header-nav

