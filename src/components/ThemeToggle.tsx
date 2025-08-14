import { Moon, Sun } from "lucide-react" // Ícones de lua e sol
import { useTheme } from "./ThemeProvider" // Hook customizado para acessar e alterar o tema

export function ThemeToggle() {
  const { theme, setTheme } = useTheme() // Obtém o tema atual e função para alterá-lo

  return (
    <button
      // Alterna entre light e dark no clique
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative inline-flex h-8 w-8 items-center justify-center rounded-md text-foreground hover:text-neon-green transition-colors"
      aria-label="Alternar tema" // Acessibilidade
    >
      {/* Ícone do sol (modo claro) */}
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      
      {/* Ícone da lua (modo escuro) */}
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}
