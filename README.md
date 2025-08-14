Projeto loja da Izquizita

Um e-commerce moderno desenvolvido com React, TypeScript e Firebase, oferecendo uma experiência completa de compras online com autenticação de usuários, carrinho de compras e painel administrativo.

## 🚀 Funcionalidades

### Para Usuários
- **Catálogo de Produtos**: Navegação por produtos com carrossel interativo
- **Carrinho de Compras**: Adicionar, remover e gerenciar itens
- **Autenticação**: Sistema de login e registro
- **Checkout**: Processo completo de finalização de compras
- **Página de Contato**: Formulário para comunicação
- **Tema Dark/Light**: Alternância entre temas

### Para Administradores
- **Dashboard Administrativo**: Painel de controle com acesso restrito
- **Gerenciamento de Produtos**: Adicionar, editar e remover produtos
- **Avatar com Nome**: Exibição do perfil do admin na navbar
- **Controle de Acesso**: Rotas protegidas baseadas em papel do usuário

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Autenticação**: Firebase Auth
- **Backend**: Firebase Firestore + Supabase
- **Roteamento**: React Router DOM
- **Formulários**: React Hook Form + Yup
- **Estado**: Context API + Custom Hooks
- **UI Components**: Radix UI, Lucide React

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── CardProduto.tsx # Card de produto
│   ├── Navbar.tsx      # Barra de navegação
│   ├── Footer.tsx      # Rodapé
│   └── ...
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial
│   ├── Produtos.tsx    # Catálogo de produtos
│   ├── Carrinho.tsx    # Carrinho de compras
│   ├── Dashboard.tsx   # Painel administrativo
│   └── ...
├── hooks/              # Custom hooks
├── context/            # Contextos React
├── utils/              # Utilitários e helpers
└── types/              # Definições de tipos TypeScript
```

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```sh
# Clone o repositório
git clone <YOUR_GIT_URL>

# Entre no diretório
cd <YOUR_PROJECT_NAME>

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### Configuração do Firebase
1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Configure Authentication e Firestore
3. Adicione as credenciais no arquivo `src/firebase.ts`

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## 🌐 Deploy

O projeto pode ser facilmente deployado usando:
- **Lovable**: Através do botão "Share → Publish"
- **Vercel**: Conecte o repositório GitHub
- **Netlify**: Deploy direto do repositório
- **Firebase Hosting**: `firebase deploy`

## 📋 Funcionalidades Detalhadas

### Sistema de Autenticação
- Login e registro de usuários
- Diferentes níveis de acesso (usuário/admin)
- Proteção de rotas sensíveis
- Persistência de sessão

### Gerenciamento de Produtos
- CRUD completo de produtos
- Upload de imagens
- Categorização
- Busca e filtros

### Carrinho de Compras
- Adicionar/remover produtos
- Atualizar quantidades
- Cálculo automático de totais
- Persistência entre sessões

### Interface Responsiva
- Design adaptável para mobile e desktop
- Tema claro/escuro
- Animações e transições suaves
- Acessibilidade

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🔗 Links Úteis

- **Projeto Lovable**: [https://lovable.dev/projects/a729de1b-74ae-4657-87a9-c9c6bb94fce7](https://lovable.dev/projects/a729de1b-74ae-4657-87a9-c9c6bb94fce7)
- **Documentação React**: [https://react.dev](https://react.dev)
- **Documentação Firebase**: [https://firebase.google.com/docs](https://firebase.google.com/docs)
- **Documentação Tailwind**: [https://tailwindcss.com](https://tailwindcss.com)
