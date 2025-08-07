import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CarrinhoProvider } from './hooks/use-carrinho.tsx';

createRoot(document.getElementById("root")!).render(
    <CarrinhoProvider>
        <App />
    </CarrinhoProvider>
);

