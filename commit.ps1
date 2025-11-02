# Script PowerShell para hacer commit y push de los cambios

Write-Host "📦 Agregando archivos al staging..." -ForegroundColor Cyan
git add .

Write-Host "💾 Creando commit..." -ForegroundColor Cyan
git commit -m "feat: optimización completa del proyecto y soporte para navegador de Cursor AI" `
  -m "Esta actualización incluye optimizaciones significativas de rendimiento, mejoras en la experiencia de desarrollo y soporte completo para ejecutar el proyecto en el navegador interno de Cursor AI." `
  -m "### 🚀 Nuevas Características" `
  -m "- Scripts de desarrollo para Cursor AI (dev:cursor, dev:cursor:simple, dev:direct)" `
  -m "### ⚡ Optimizaciones de Rendimiento" `
  -m "- Next.js: Webpack optimizado, filesystem cache, split chunks mejorado" `
  -m "- TypeScript: Target ES2020, validaciones adicionales, mejor detección de errores" `
  -m "- Componentes: Optimización de memoización y dependencias" `
  -m "### 📚 Documentación" `
  -m "- GUIA_RAPIDA.md: Guía paso a paso para desarrollo" `
  -m "- OPTIMIZATION_REPORT.md: Reporte completo de optimizaciones" `
  -m "- RESUMEN_OPTIMIZACION.md: Resumen ejecutivo" `
  -m "- SOLUCION_PROBLEMAS.md: Guía de troubleshooting" `
  -m "### 🛠️ Mejoras Técnicas" `
  -m "- Configuración mejorada de Next.js y TypeScript" `
  -m "- Compatibilidad mejorada con Windows (npx.cmd)" `
  -m "- Mejor manejo de errores en scripts" `
  -m "- Validación de dependencias antes de iniciar servidor"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Commit realizado exitosamente" -ForegroundColor Green
    Write-Host "📤 Subiendo cambios a GitHub..." -ForegroundColor Cyan
    git push origin feat/lote-1-header-nav
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Cambios subidos exitosamente a GitHub" -ForegroundColor Green
    } else {
        Write-Host "❌ Error al subir cambios" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Error al crear commit" -ForegroundColor Red
}

