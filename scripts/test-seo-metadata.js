/**
 * SEO Metadata Testing Script
 * Tests that language switching properly updates title and lang attributes
 */

const puppeteer = require('puppeteer');
require('dotenv').config({ path: '.env.local' });

async function testSEOMetadata() {
  console.log('🔍 Testing SEO Metadata Implementation...\n');
  
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  const locales = [
    { code: 'es', expectedLang: 'es-ES', expectedTitle: 'Ivan Tech Coach' },
    { code: 'en', expectedLang: 'en-US', expectedTitle: 'Ivan Tech Coach' },
    { code: 'ca', expectedLang: 'ca-ES', expectedTitle: 'Ivan Tech Coach' }
  ];
  
  const port = process.env.PORT || process.env.NEXT_PUBLIC_PORT || 3000;
  const baseUrl = `http://localhost:${port}`;
  
  for (const locale of locales) {
    console.log(`📱 Testing ${locale.code.toUpperCase()} locale...`);
    
    try {
      await page.goto(`${baseUrl}/${locale.code}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
      // Wait for head commit: title present and html[lang] set
      await page.waitForFunction(() => document.title.length > 0, { timeout: 60000 });
      await page.waitForFunction(() => document.documentElement.lang && document.documentElement.lang.length > 0, { timeout: 60000 });
      
      // Test HTML lang attribute
      const htmlLang = await page.evaluate(() => {
        return document.documentElement.lang;
      });
      
      // Test page title
      const pageTitle = await page.evaluate(() => {
        return document.title;
      });
      
      // Test meta description
      const metaDescription = await page.evaluate(() => {
        const meta = document.querySelector('meta[name="description"]');
        return meta ? meta.content : null;
      });
      
      // Test Open Graph title
      const ogTitle = await page.evaluate(() => {
        const meta = document.querySelector('meta[property="og:title"]');
        return meta ? meta.content : null;
      });
      
      // Test hreflang tags
      const hreflangTags = await page.evaluate(() => {
        const links = document.querySelectorAll('head link[rel="alternate"][hreflang]');
        return Array.from(links).map(link => ({
          hreflang: link.getAttribute('hreflang'),
          href: link.getAttribute('href')
        }));
      });
      
      // Results
      console.log(`  ✅ HTML lang: ${htmlLang} (expected: ${locale.expectedLang})`);
      console.log(`  ✅ Page title: ${pageTitle}`);
      console.log(`  ✅ Meta description: ${metaDescription ? 'Present' : 'Missing'}`);
      console.log(`  ✅ OG title: ${ogTitle ? 'Present' : 'Missing'}`);
      console.log(`  ✅ Hreflang tags: ${hreflangTags.length} found`);
      
      // Validation
      const langValid = htmlLang === locale.expectedLang;
      const titleValid = pageTitle.includes(locale.expectedTitle);
      const hreflangValid = hreflangTags.length >= 3; // es, en, ca
      
      if (langValid && titleValid && hreflangValid) {
        console.log(`  🎉 ${locale.code.toUpperCase()} locale: ALL TESTS PASSED\n`);
      } else {
        console.log(`  ❌ ${locale.code.toUpperCase()} locale: SOME TESTS FAILED\n`);
        if (!langValid) console.log(`    - HTML lang mismatch: got ${htmlLang}, expected ${locale.expectedLang}`);
        if (!titleValid) console.log(`    - Title mismatch: got "${pageTitle}", expected to contain "${locale.expectedTitle}"`);
        if (!hreflangValid) console.log(`    - Hreflang tags missing: got ${hreflangTags.length}, expected at least 3`);
      }
      
    } catch (error) {
      console.log(`  ❌ Error testing ${locale.code}: ${error.message}\n`);
    }
  }
  
  // Test language switcher functionality
  console.log('🔄 Testing language switcher...');
  try {
    await page.goto(`${baseUrl}/es`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    
    // Find and click language switcher (assuming it exists)
    const languageSwitcher = await page.$('[data-testid="language-switcher"]') || 
                            await page.$('.language-switcher') ||
                            await page.$('select[name="language"]');
    
    if (languageSwitcher) {
      console.log('  ✅ Language switcher found');
      
      // Test switching to English
      await page.select('select[name="language"]', 'en');
      await page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 60000 });
      
      const newUrl = page.url();
      const newLang = await page.evaluate(() => document.documentElement.lang);
      const newTitle = await page.evaluate(() => document.title);
      
      console.log(`  ✅ Switched to EN: ${newUrl}`);
      console.log(`  ✅ New lang: ${newLang}`);
      console.log(`  ✅ New title: ${newTitle}`);
      
      if (newUrl.includes('/en') && newLang === 'en-US') {
        console.log('  🎉 Language switching: PASSED\n');
      } else {
        console.log('  ❌ Language switching: FAILED\n');
      }
    } else {
      console.log('  ⚠️  Language switcher not found - manual testing required\n');
    }
  } catch (error) {
    console.log(`  ❌ Error testing language switcher: ${error.message}\n`);
  }
  
  // Test sitemap
  console.log('🗺️  Testing sitemap...');
  try {
    await page.goto(`${baseUrl}/sitemap.xml`, { waitUntil: 'networkidle0' });
    const sitemapContent = await page.content();
    
    if (sitemapContent.includes('<url>') && sitemapContent.includes('hreflang')) {
      console.log('  ✅ Sitemap with hreflang: PRESENT\n');
    } else {
      console.log('  ❌ Sitemap with hreflang: MISSING\n');
    }
  } catch (error) {
    console.log(`  ❌ Error testing sitemap: ${error.message}\n`);
  }
  
  await browser.close();
  
  console.log('🏁 SEO Metadata testing completed!');
  console.log('\n📋 Manual verification checklist:');
  console.log('  - Visit /es and verify title is in Spanish');
  console.log('  - Visit /en and verify title is in English');
  console.log('  - Visit /ca and verify title is in Catalan');
  console.log('  - Check that <html lang> changes with each locale');
  console.log('  - Verify hreflang tags are present in <head>');
  console.log('  - Test language switcher updates title and lang');
  console.log('  - Check /sitemap.xml includes all locales with hreflang');
}

// Run the test
if (require.main === module) {
  testSEOMetadata().catch(console.error);
}

module.exports = { testSEOMetadata };
