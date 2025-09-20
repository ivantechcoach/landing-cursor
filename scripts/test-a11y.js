/**
 * Accessibility Testing Script
 * Tests keyboard navigation and focus management
 */

const { chromium } = require('playwright');

async function testAccessibility() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  console.log('🧪 Testing Accessibility Features...\n');
  
  try {
    // Navigate to the homepage
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    console.log('✅ Page loaded successfully');
    
    // Test 1: Skip link functionality
    console.log('\n🔍 Testing Skip Link...');
    await page.keyboard.press('Tab');
    const skipLink = await page.locator('.skip-link');
    const isSkipLinkVisible = await skipLink.isVisible();
    console.log(`Skip link visible: ${isSkipLinkVisible ? '✅' : '❌'}`);
    
    if (isSkipLinkVisible) {
      await page.keyboard.press('Enter');
      await page.waitForTimeout(500);
      console.log('✅ Skip link activated');
    }
    
    // Test 2: Navigation focus states
    console.log('\n🔍 Testing Navigation Focus...');
    await page.keyboard.press('Tab'); // Logo
    await page.keyboard.press('Tab'); // First nav item
    
    const navItems = await page.locator('nav a').count();
    console.log(`Navigation items found: ${navItems}`);
    
    // Test focus visibility
    for (let i = 0; i < navItems; i++) {
      const navItem = page.locator('nav a').nth(i);
      const hasFocusRing = await navItem.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return styles.outline !== 'none' || styles.boxShadow !== 'none';
      });
      console.log(`Nav item ${i + 1} focus ring: ${hasFocusRing ? '✅' : '❌'}`);
    }
    
    // Test 3: Language switcher
    console.log('\n🔍 Testing Language Switcher...');
    await page.keyboard.press('Tab'); // Language switcher
    
    const langButtons = await page.locator('[role="group"] button').count();
    console.log(`Language buttons found: ${langButtons}`);
    
    // Test language switching
    if (langButtons > 0) {
      await page.keyboard.press('Enter'); // Switch to English
      await page.waitForTimeout(1000);
      
      // Check if navigation text changed
      const firstNavText = await page.locator('nav a').first().textContent();
      console.log(`First nav item after language switch: ${firstNavText}`);
      
      // Switch back to Spanish
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1000);
      
      const firstNavTextAfter = await page.locator('nav a').first().textContent();
      console.log(`First nav item after switching back: ${firstNavTextAfter}`);
    }
    
    // Test 4: Hero CTA focus
    console.log('\n🔍 Testing Hero CTA Focus...');
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Tab to hero CTA
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      if (focusedElement === 'A') {
        const text = await page.evaluate(() => document.activeElement?.textContent);
        if (text?.includes('Empieza') || text?.includes('Start') || text?.includes('Comença')) {
          console.log('✅ Hero CTA focused');
          break;
        }
      }
    }
    
    // Test 5: Mobile menu (if screen is small)
    console.log('\n🔍 Testing Mobile Menu...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    const mobileMenuButton = page.locator('[aria-controls="mobile-menu"]');
    const isMobileMenuVisible = await mobileMenuButton.isVisible();
    console.log(`Mobile menu button visible: ${isMobileMenuVisible ? '✅' : '❌'}`);
    
    if (isMobileMenuVisible) {
      await mobileMenuButton.click();
      await page.waitForTimeout(500);
      
      const mobileMenu = page.locator('#mobile-menu');
      const isMobileMenuOpen = await mobileMenu.isVisible();
      console.log(`Mobile menu opened: ${isMobileMenuOpen ? '✅' : '❌'}`);
    }
    
    console.log('\n🎉 Accessibility testing completed!');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await browser.close();
  }
}

// Run the test
testAccessibility().catch(console.error);
