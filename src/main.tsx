import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CarrinhoProvider } from './hooks/use-carrinho.tsx';
import { ThemeProvider } from './components/ThemeProvider';

createRoot(document.getElementById("root")!).render(
    <ThemeProvider defaultTheme="dark" storageKey="skateshop-theme">
        <CarrinhoProvider>
            <App />
        </CarrinhoProvider>
    </ThemeProvider>
);

