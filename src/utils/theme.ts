/**
 * Utility service for theme management
 * Centralizes theme-related functions and ensures proper initialization
 */

export class ThemeService {
  private static instance: ThemeService;
  private initialized = false;

  private constructor() {}

  public static getInstance(): ThemeService {
    if (!ThemeService.instance) {
      ThemeService.instance = new ThemeService();
    }
    return ThemeService.instance;
  }

  /**
   * Initialize theme system - should be called once when app starts
   */
  public initialize(): void {
    if (this.initialized) return;
    
    this.applySystemTheme();
    this.setupThemeListener();
    this.initialized = true;
  }

  /**
   * Apply system theme preferences
   */
  private applySystemTheme(): void {
    const savedTheme = localStorage.getItem('skateshop-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    this.setTheme(theme);
  }

  /**
   * Setup listener for system theme changes
   */
  private setupThemeListener(): void {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const savedTheme = localStorage.getItem('skateshop-theme');
      if (!savedTheme || savedTheme === 'system') {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  /**
   * Set theme and apply to document
   */
  public setTheme(theme: string): void {
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    // Apply new theme
    if (theme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(systemPrefersDark ? 'dark' : 'light');
    } else {
      root.classList.add(theme);
    }
    
    // Update body class for additional styling
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${theme}`);
  }

  /**
   * Get current active theme
   */
  public getCurrentTheme(): string {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }

  /**
   * Check if current theme is dark
   */
  public isDarkMode(): boolean {
    return this.getCurrentTheme() === 'dark';
  }
}

// Export singleton instance
export const themeService = ThemeService.getInstance();