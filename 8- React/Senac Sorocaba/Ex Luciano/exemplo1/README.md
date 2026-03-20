# 🚀 Projeto Institucional Profissional - React + Vite + JavaScript + SWC

Um projeto institucional moderno e profissional usando **JavaScript puro com SWC** para compilação ultrarrápida, seguindo as melhores práticas do mercado em 2025.

## 📋 Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Características](#características)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Padrões de Código](#padrões-de-código)
- [Rotas](#rotas)

## 🛠 Tecnologias Utilizadas

- **React 19.2** - Biblioteca JavaScript para construção de interfaces
- **JavaScript ES2020+** - JavaScript moderno com features atuais
- **Vite 7.2.2** - Build tool moderna e rápida
- **SWC** - Compilador super rápido escrito em Rust (substitui Babel)
- **React Router DOM 7.9.5** - Roteamento para aplicações React
- **CSS Modules** - Escopo local de estilos
- **ESLint** - Linter para manter qualidade do código

## ✨ Características

### Arquitetura e Padrões

- ✅ **JavaScript Moderno** - ES2020+ com todas as features atuais
- ✅ **SWC Compiler** - Compilação 20x mais rápida que Babel
- ✅ **Barrel Exports** - Exports centralizados para imports limpos
- ✅ **Path Aliases** - Imports absolutos (@components, @pages, etc.)
- ✅ **Context API** - Gerenciamento de estado global
- ✅ **useReducer** - Controle de estado complexo
- ✅ **Custom Hooks** - Reutilização de lógica
- ✅ **JSConfig** - IntelliSense e autocomplete no VS Code
- ✅ **CSS Modules** - Estilos com escopo local
- ✅ **Responsive Design** - Layout adaptável a todos os dispositivos
- ✅ **Dark Mode** - Tema claro/escuro com persistência

### Componentes e Features

- 🎨 Sistema de Design consistente
- 🔄 Componentes reutilizáveis (Button, Card)
- 📱 Header responsivo com menu mobile
- 🦶 Footer completo com links
- 🎯 Layout estruturado
- 📄 5 páginas completas (Home, Sobre, Serviços, Contato, 404)
- 🎭 Animações e transições suaves
- ♿ Acessibilidade (ARIA labels)

### Por que SWC?

- ⚡ **20x mais rápido** que Babel
- 🦀 Escrito em **Rust** para máxima performance
- 🔧 **Zero configuração** necessária
- 📦 Menor bundle size
- 🚀 Hot Module Replacement instantâneo

## 📁 Estrutura do Projeto

```
empresa-institucional-js/
├── public/                                 # Arquivos estáticos
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── index.js
│   │   │   ├── Card/
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Card.module.css
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   ├── layout/                         # Componentes de layout
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Header.module.css
│   │   │   │   └── index.js
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Footer.module.css
│   │   │   │   └── index.js
│   │   │   ├── Layout/
│   │   │   │   ├── Layout.jsx
│   │   │   │   ├── Layout.module.css
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   └── index.js
│   ├── contexts/                           # Context API providers
│   │   ├── ThemeContext/                   # Gerenciamento de tema
│   │   │   ├── ThemeContext.jsx
│   │   │   ├── ThemeProvider.jsx
│   │   │   └── index.js
│   │   ├── AppContext/                     # Estado global da aplicação
│   │   │   ├── AppContext.jsx
│   │   │   ├── AppProvider.jsx
│   │   │   └── index.js
│   │   └── index.js
│   ├── hooks/                              # Custom hooks
│   │   ├── useTheme.js
│   │   ├── useApp.js
│   │   └── index.js
│   ├── pages/                              # Páginas da aplicação
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.module.css
│   │   │   └── index.js
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   ├── About.module.css
│   │   │   └── index.js
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   ├── Services.module.css
│   │   │   └── index.js
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   ├── Contact.module.css
│   │   │   └── index.js
│   │   ├── NotFound/
│   │   │   ├── NotFound.jsx
│   │   │   ├── NotFound.module.css
│   │   │   └── index.js
│   │   └── index.js
│   ├── routes/                             # Configuração de rotas
│   │   ├── AppRoutes.jsx
│   │   └── index.js
│   ├── utils/                              # Funções utilitárias
│   │   ├── constants.js
│   │   └── index.js
│   ├── App.jsx                             # Componente principal
│   ├── App.css
│   ├── main.jsx                            # Entry point
│   └── index.css
├── .gitignore
├── index.html                              # Template HTML
├── package.json                            # Dependências
├── jsconfig.json                           # Configuração JavaScript
├── .eslintrc.cjs
└── vite.config.js
```

## 🚀 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos

1. **Crie o projeto:**

```bash
npm create vite@latest empresa-institucional-js -- --template react-swc
cd empresa-institucional-js
```

2. **Instale as dependências:**

```bash
npm install
npm install react-router-dom
```

3. **Crie todos os arquivos nas respectivas pastas**

4. **Execute o projeto:**

```bash
npm run dev
```

5. **Acesse no navegador:**

```
http://localhost:5173
```

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento com SWC

# Build
npm run build        # Gera build de produção otimizado

# Preview
npm run preview      # Preview do build de produção

# Lint
npm run lint         # Verifica qualidade do código
```

## 📝 Padrões de Código

### Arquivos JSX

Todos os componentes React usam extensão `.jsx`:

```javascript
// Button.jsx
export const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
```

### Barrel Exports

Cada pasta possui um arquivo `index.js` para exports centralizados:

```javascript
// components/common/index.js
export { Button } from './Button';
export { Card } from './Card';
```

Isso permite imports limpos:

```javascript
import { Button, Card } from '@components/common';
```

### Path Aliases

Configurados no `jsconfig.json` e `vite.config.js`:

```javascript
import { Button } from '@components/common';
import { useTheme } from '@hooks';
import { Home } from '@pages';
```

### Context Pattern

Estrutura de contexto com Provider e Hook:

```javascript
// ThemeContext.jsx - Define o contexto
// ThemeProvider.jsx - Implementa a lógica
// index.js - Exporta ambos
// useTheme.js - Hook customizado para usar o contexto
```

### Componentes

Cada componente possui:
- Arquivo `.jsx` - Lógica do componente
- Arquivo `.module.css` - Estilos escopados
- Arquivo `index.js` - Export barrel

### JSConfig para IntelliSense

O arquivo `jsconfig.json` fornece:
- Autocomplete de imports
- Path aliases funcionando no VS Code
- Type checking básico
- IntelliSense melhorado

## 🗺 Rotas

| Rota        | Componente | Descrição             |
| ----------- | ---------- | --------------------- |
| `/`         | Home       | Página inicial        |
| `/about`    | About      | Sobre a empresa       |
| `/services` | Services   | Serviços oferecidos   |
| `/contact`  | Contact    | Formulário de contato |
| `*`         | NotFound   | Página 404            |

## 🎨 Temas

O projeto suporta tema claro e escuro com persistência no localStorage:

```javascript
import { useTheme } from '@hooks';

const { theme, toggleTheme } = useTheme();
```

Variáveis CSS customizadas em `index.css`:

```css
:root { /* Tema claro */ }
[data-theme='dark'] { /* Tema escuro */ }
```

## 🔧 Customização

### Cores

Edite as variáveis CSS em `src/index.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  /* ... */
}
```

### Componentes

Todos os componentes são modulares e podem ser facilmente customizados ou estendidos.

### Adicionar Nova Página

1. Crie a pasta em `src/pages/NovaPagina/`
2. Adicione `NovaPagina.jsx`, `NovaPagina.module.css` e `index.js`
3. Exporte em `src/pages/index.js`
4. Adicione a rota em `src/routes/AppRoutes.jsx`

## 📦 Build de Produção

```bash
npm run build
```

Os arquivos otimizados estarão em `dist/`.

Para testar o build:

```bash
npm run preview
```

## 🚀 Performance

### SWC vs Babel

| Métrica     | SWC               | Babel        |
| ----------- | ----------------- | ------------ |
| Velocidade  | ⚡ 20x mais rápido | 🐌 Referência |
| Linguagem   | 🦀 Rust            | 📜 JavaScript |
| Bundle Size | 📦 Menor           | 📦 Maior      |
| HMR         | ⚡ Instantâneo     | 🔄 Padrão     |

### Otimizações Incluídas

- ✅ Code splitting automático
- ✅ Tree shaking
- ✅ Minificação
- ✅ CSS Modules otimizados
- ✅ Assets otimizados
- ✅ Lazy loading de rotas (se implementado)

## 🤝 Contribuindo

Este é um projeto template. Sinta-se livre para:

- Adicionar novas páginas
- Criar novos componentes
- Implementar novas features
- Melhorar estilos e animações

## 📚 Recursos Adicionais

- [Documentação Vite](https://vitejs.dev/)
- [SWC Documentation](https://swc.rs/)
- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)

## 📄 Licença

MIT

---

**Nota**: Este projeto utiliza as tecnologias e padrões mais atuais do mercado, incluindo:
- React 19 com Hooks modernos
- JavaScript ES2020+ com todas as features
- **SWC para compilação ultrarrápida** 🚀
- Vite como bundler
- CSS Modules para estilos
- Context API + useReducer para estado
- React Router v7 para rotas
- Path aliases para imports limpos
- Barrel exports para organização
- Responsive design
- Dark mode
- Acessibilidade

**Pronto para ser usado em produção!** 🎉

### 🔥 Diferenciais com SWC

A principal vantagem desta versão é o **SWC (Speedy Web Compiler)**:
- Compilação 20x mais rápida que Babel/TypeScript
- Hot Module Replacement instantâneo
- Menor consumo de memória
- Build de produção otimizado
- Zero configuração adicional

Perfeito para desenvolvimento ágil e produtivo! 🚀
Luciano Lopes Salgado 2025