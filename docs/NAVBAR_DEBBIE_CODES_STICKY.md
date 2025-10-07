# Navbar Debbie.codes - Sticky Implementation

## 🎯 Overview
This document describes the implementation of a navbar that behaves exactly like [debbie.codes](https://debbie.codes/): starts transparent, becomes sticky with solid background only when scrolling, and includes a full-screen mobile menu.

## ✨ Features Implemented

### 1. **Sticky Behavior on Scroll**
- **Initial state**: Transparent background, relative positioning
- **Scroll trigger**: Activates sticky behavior after 50px scroll
- **Sticky state**: Fixed positioning with solid white background and shadow
- **Smooth transitions**: 0.3s ease-out for all state changes

### 2. **Visual State Management**
- **Transparent state**: White text with shadows for readability
- **Solid state**: Dark text with hover effects
- **Dynamic styling**: All elements adapt to scroll state
- **No content jumping**: Spacer prevents layout shifts

### 3. **Mobile-First Design**
- **Full-screen overlay**: Mobile menu covers entire viewport
- **Dark background**: Semi-transparent black overlay
- **Centered navigation**: Vertical layout with large touch targets
- **Profile section**: User image and name in mobile header

### 4. **Language Selector Integration**
- **Compact dropdown**: Single button with globe icon
- **State-aware styling**: Adapts to transparent/solid navbar states
- **Smooth animations**: Dropdown with slide-in effect
- **Click outside to close**: Automatic menu closure

## 🔧 Technical Implementation

### **Scroll Detection Hook**
```typescript
// lib/hooks/useDebbieCodesNavbar.ts
export function useDebbieCodesNavbar({ threshold = 50 }: { threshold?: number }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { isScrolled };
}
```

### **Header Component Structure**
```typescript
export default function Header({ language = 'ca' }: HeaderProps) {
  const { isScrolled } = useDebbieCodesNavbar({ threshold: 50 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        {ui.skipToContent}
      </a>
      
      {/* Navbar Spacer - prevents content jumping */}
      {isScrolled && <div className="navbar-spacer" />}
      
      {/* Main Header */}
      <header 
        className={`navbar-debbie-codes transition-all duration-300 ${
          isScrolled 
            ? 'fixed top-0 left-0 right-0 bg-white shadow-md z-50' 
            : 'relative bg-transparent'
        }`}
      >
        {/* Header content */}
      </header>
    </>
  );
}
```

### **Dynamic Styling Logic**
```typescript
// Logo text color
<span className={`text-2xl font-bold transition-colors duration-300 ${
  isScrolled ? 'text-gray-900' : 'text-white text-white-shadow'
}`}>
  Ivan Tech Coach
</span>

// Navigation links
<Link className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
  isActive
    ? isScrolled
      ? 'text-blue-600 bg-blue-50'
      : 'text-white bg-white/20 backdrop-blur-sm text-white-shadow'
    : isScrolled
      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
      : 'text-white/90 hover:text-white hover:bg-white/10 text-white-shadow'
}`} />

// Language selector
<button className={`language-selector-button ${
  isScrolled
    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700 solid'
    : 'bg-white/10 hover:bg-white/20 text-white text-white-shadow transparent'
}`} />

// Mobile menu button
<button className={`header-focus transition-all duration-300 p-2 rounded-md ${
  isScrolled
    ? 'text-gray-700 hover:text-blue-600'
    : 'text-white hover:text-white/80 text-white-shadow'
}`} />
```

## 🎨 CSS Implementation

### **Navbar Base Styles**
```css
/* Debbie.codes Navbar Styles - Sticky on scroll */
.navbar-debbie-codes {
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease-out;
}

/* Initial state - transparent and relative positioned */
.navbar-debbie-codes.relative {
  position: relative;
  background-color: transparent;
}

/* Scrolled state - fixed and solid background */
.navbar-debbie-codes.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### **Language Selector States**
```css
/* Language Selector Styles */
.language-selector-button {
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.language-selector-button:hover {
  transform: translateY(-1px);
}

/* Transparent state styles */
.language-selector-button.transparent {
  backdrop-filter: blur(8px);
  border-color: rgba(255, 255, 255, 0.2);
}

.language-selector-button.transparent:hover {
  backdrop-filter: blur(12px);
  border-color: rgba(255, 255, 255, 0.3);
}

/* Solid state styles */
.language-selector-button.solid {
  border-color: rgba(0, 0, 0, 0.1);
}

.language-selector-button.solid:hover {
  border-color: rgba(0, 0, 0, 0.2);
}
```

### **Spacer for Content Jump Prevention**
```css
/* Navbar spacer to prevent content jumping */
.navbar-spacer {
  height: 4rem; /* matches navbar height */
  width: 100%;
}
```

## 📱 Mobile Implementation

### **Full-Screen Mobile Menu**
```typescript
{/* Mobile Navigation Menu - Full Screen Overlay */}
{isMobileMenuOpen && (
  <div 
    className="fixed inset-0 z-50 md:hidden" 
    id="mobile-menu"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
  >
    <div className="flex flex-col h-full">
      {/* Header with profile and close button */}
      <div className="flex justify-between items-center p-6 border-b border-white/20">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/about/portrait-ivan.webp"
            alt="Ivan Tech Coach - Portrait"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
          />
          <span className="text-xl font-bold text-white">
            Ivan Tech Coach
          </span>
        </div>
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="text-white hover:text-white/80 transition-colors p-2"
          aria-label="Cerrar menú"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col justify-center items-center space-y-8 px-6">
        <nav role="navigation" aria-label={ui.mobileNavigation} className="text-center">
          {currentNav.map((item) => (
            <Link
              key={item.name}
              href={buildLocalizedLink(pathname, item.href)}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-2xl font-medium transition-colors header-link-focus mb-6 ${
                isActive
                  ? 'text-blue-400'
                  : 'text-white hover:text-blue-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Language Switcher */}
      <div className="p-6 border-t border-white/20">
        <div className="text-center">
          <h3 className="text-sm font-medium text-white/80 mb-4">{ui.selectLanguage}</h3>
          <div className="flex justify-center space-x-2" role="group" aria-label={ui.selectLanguage}>
            {LOCALES.map((locale) => (
              <button
                key={locale}
                type="button"
                onClick={() => {
                  handleLanguageSelect(locale);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 header-button-focus flex flex-col items-center ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-lg font-bold">{getLocaleShortCode(locale)}</span>
                <span className="text-xs">{getLocaleDisplayName(locale)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)}
```

## 🚀 Performance Features

### **Optimizations**
- **Passive scroll listeners** for better performance
- **Event listener cleanup** on component unmount
- **Smooth transitions** with CSS transforms
- **Conditional rendering** for mobile menu

### **Accessibility**
- **Skip links** for keyboard navigation
- **ARIA labels** for screen readers
- **Focus management** after interactions
- **Keyboard navigation** support

## 🎯 User Experience Flow

### **Desktop Experience**
1. **Page load**: Transparent navbar with white text
2. **Scroll down 50px**: Navbar becomes fixed with solid background
3. **Text color change**: Dark text for better contrast
4. **Hover effects**: Smooth color transitions
5. **Language selector**: Adapts to current state
6. **Scroll back up**: Returns to transparent state

### **Mobile Experience**
1. **Page load**: Transparent navbar with hamburger menu
2. **Scroll down**: Navbar becomes fixed with solid background
3. **Tap hamburger**: Full-screen overlay appears
4. **Navigation**: Large touch targets for easy interaction
5. **Language selection**: Compact buttons with country codes
6. **Close menu**: Tap X or outside area to close

## 🔍 Browser Support

### **Modern Browsers**
- **CSS Transitions**: Full support
- **Fixed positioning**: Full support
- **Backdrop filter**: Chrome 76+, Firefox 103+, Safari 9+
- **CSS Grid/Flexbox**: Full support

### **Fallbacks**
- Graceful degradation for older browsers
- Solid backgrounds as backdrop-filter fallback
- Standard transitions for animation fallbacks

## 🧪 Testing Checklist

- [ ] **Initial state**: Transparent navbar with white text
- [ ] **Scroll trigger**: Navbar becomes sticky after 50px
- [ ] **Solid state**: White background with dark text
- [ ] **Mobile menu**: Full-screen overlay on mobile
- [ ] **Language selector**: Works in both states
- [ ] **No content jumping**: Spacer prevents layout shifts
- [ ] **Smooth transitions**: 0.3s ease-out animations
- [ ] **Keyboard navigation**: Tab through all elements
- [ ] **Focus management**: Proper focus after interactions
- [ ] **Accessibility**: Screen reader compatibility
- [ ] **Cross-browser**: Works in Chrome, Firefox, Safari, Edge
- [ ] **Mobile responsive**: Touch-friendly interactions

## 🎨 Visual States Summary

| State | Background | Text Color | Position | Shadow |
|-------|------------|------------|----------|---------|
| Initial | Transparent | White + Shadow | Relative | None |
| Scrolled | White | Dark Gray | Fixed | Light |
| Mobile Open | Dark Overlay | White | Fixed | None |

## 🔧 Configuration Options

### **Scroll Threshold**
```typescript
const { isScrolled } = useDebbieCodesNavbar({ threshold: 50 });
```

### **Transition Duration**
```css
.navbar-debbie-codes {
  transition: all 0.3s ease-out; /* Customizable */
}
```

### **Shadow Intensity**
```css
.navbar-debbie-codes.fixed {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Customizable */
}
```
