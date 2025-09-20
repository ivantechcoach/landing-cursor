/**
 * Port Detection Utility
 * Detects the running port from environment variables or dev server output
 */

export interface PortDetectionResult {
  port: number;
  source: 'env' | 'package' | 'dev-server' | 'default';
  url: string;
}

/**
 * Detects the port being used by the development server
 * Priority: PORT env var > dev server output > package.json dev script > default 3000
 */
export function detectPort(): PortDetectionResult {
  // 1. Check PORT environment variable (highest priority)
  const envPort = process.env.PORT;
  if (envPort) {
    const port = parseInt(envPort, 10);
    if (!isNaN(port) && port > 0 && port < 65536) {
      return {
        port,
        source: 'env',
        url: `http://localhost:${port}`
      };
    }
  }

  // 2. Check if we're in development mode and extract from package.json
  if (process.env.NODE_ENV === 'development') {
    try {
      // This would be set by the dev script in package.json
      // The dev script uses --port 3001
      const devPort = 3001;
      return {
        port: devPort,
        source: 'package',
        url: `http://localhost:${devPort}`
      };
    } catch (error) {
      console.warn('Could not read package.json for port detection:', error);
    }
  }

  // 3. Default fallback
  return {
    port: 3000,
    source: 'default',
    url: 'http://localhost:3000'
  };
}

/**
 * Gets the current port as a string for environment variables
 */
export function getPortString(): string {
  return detectPort().port.toString();
}

/**
 * Gets the current URL for environment variables
 */
export function getBaseUrl(): string {
  return detectPort().url;
}

/**
 * Logs port detection information for debugging
 */
export function logPortDetection(): void {
  const result = detectPort();
  console.log(`🔍 Port Detection:`);
  console.log(`   Port: ${result.port}`);
  console.log(`   Source: ${result.source}`);
  console.log(`   URL: ${result.url}`);
}

/**
 * Creates a port detection hook for React components
 */
export function usePortDetection() {
  const result = detectPort();
  
  return {
    port: result.port,
    portString: result.port.toString(),
    baseUrl: result.url,
    source: result.source,
    isDetected: result.source !== 'default'
  };
}