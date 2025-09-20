/**
 * React Hook for Port Detection
 * Provides port information to React components
 */

import { useState, useEffect } from 'react';
import { detectPort, PortDetectionResult } from '../portDetector';

export interface UsePortDetectionReturn {
  port: number;
  portString: string;
  baseUrl: string;
  source: PortDetectionResult['source'];
  isDetected: boolean;
  isLoading: boolean;
  error: string | null;
}

/**
 * Hook to detect and use the current port
 * @returns Port detection information and utilities
 */
export function usePortDetection(): UsePortDetectionReturn {
  const [result, setResult] = useState<UsePortDetectionReturn>({
    port: 3000,
    portString: '3000',
    baseUrl: 'http://localhost:3000',
    source: 'default',
    isDetected: false,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    try {
      const detection = detectPort();
      setResult({
        port: detection.port,
        portString: detection.port.toString(),
        baseUrl: detection.url,
        source: detection.source,
        isDetected: detection.source !== 'default',
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setResult(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }));
    }
  }, []);

  return result;
}

/**
 * Hook to get just the current port number
 * @returns Current port number
 */
export function useCurrentPort(): number {
  const { port } = usePortDetection();
  return port;
}

/**
 * Hook to get the current base URL
 * @returns Current base URL
 */
export function useBaseUrl(): string {
  const { baseUrl } = usePortDetection();
  return baseUrl;
}
