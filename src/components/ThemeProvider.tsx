import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { themeService } from "../utils/theme"

// Define os possíveis temas
type Theme = "dark" | "light" | "system"

// Props aceitas pelo ThemeProvider
type ThemeProviderProps = {
  children: ReactNode // Conteúdo dentro do provider
  defaultTheme?: Theme // Tema inicial padrão (default = "system")
  storageKey?: string  // Chave usada no localStorage
}

// Estrutura do estado armazenado no contexto
type ThemeProviderState = {
  theme: Theme                  // Tema atual
  setTheme: (theme: Theme) => void // Função para mudar o tema
}

// Estado inicial do contexto
const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

// Cria o contexto do tema
const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  
  // Estado inicial do tema -> tenta buscar no localStorage ou usa o default
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  // Atualiza o tema sempre que ele mudar
  useEffect(() => {
    themeService.initialize() // Inicializa o serviço de tema
    themeService.setTheme(theme) // Aplica o tema via serviço
  }, [theme])

  // Valor que será fornecido para os componentes que usam o contexto
  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme) // Salva no localStorage
      setTheme(theme) // Atualiza o estado
    },
  }

  // Provider que passa o tema e a função de setar o tema para o resto da aplicação
  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// Hook customizado para acessar o tema
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme deve estar usando um ThemeProvider")

  return context
}
