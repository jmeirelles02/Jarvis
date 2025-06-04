# 💰 Jarvis - Seu Consultor Financeiro Digital

Bem-vindo ao Jarvis. Esse é um projeto feito por um aluno de Ciência de Dados, que se interessa muito por programção e economia, por esse motivo sempre busco fazer meus projetos mais parecidos com algo relacionado a investimento ou bancos digitais, esse projeto é para meu portfólio, fiz enquanto estudava mais, front-end, ele é foi feito com html, css e javascript puro, sem uso de frameworks ou bibliotecas.

## 🎯 O que este site faz?

O Jarvis é como ter um consultor financeiro pessoal no seu computador ou celular. Ele oferece:

- **Calculadoras Financeiras Inteligentes**: Descubra quanto seu dinheiro pode render ao longo do tempo
- **Planejamento de Aposentadoria**: Calcule quando você poderá se aposentar e viver de renda
- **Interface Moderna e Fácil**: Design limpo e responsivo que funciona em qualquer dispositivo

## 🚀 Como começar a usar

### Opção 1: Abrir diretamente no seu computador (Mais Simples)

1. **Baixe ou clone este projeto** para uma pasta no seu computador
2. **Navegue até a pasta** `ConsultorFinanceiro`
3. **Entre na pasta** `src`
4. **Clique duas vezes** no arquivo `index.html`
5. **Pronto!** O site abrirá no seu navegador

### Opção 2: Rodar com servidor local (Recomendado)

Para uma experiência completa, é melhor usar um servidor local. Isso garante que todas as funcionalidades funcionem perfeitamente:

#### Se você tem Python instalado:
```bash
# Entre na pasta do projeto
cd ConsultorFinanceiro/src

# Rode o servidor (Python 3)
python -m http.server 8000

# Ou se tiver Python 2
python -m SimpleHTTPServer 8000
```

#### Se você tem Node.js instalado:
```bash
# Instale o servidor simples globalmente
npm install -g http-server

# Entre na pasta do projeto
cd ConsultorFinanceiro/src

# Rode o servidor
http-server -p 8000
```

#### Se você tem o Live Server (VS Code):
1. Abra a pasta do projeto no VS Code
2. Instale a extensão "Live Server"
3. Clique com o botão direito no arquivo `index.html`
4. Selecione "Open with Live Server"

Depois de rodar qualquer um desses comandos, abra seu navegador e vá para:
**http://localhost:8000**

## 📱 O que você pode fazer no site

### 🧮 Calculadora de Juros Compostos
- **Para que serve**: Veja como seus investimentos podem crescer ao longo do tempo
- **Como usar**:
  1. Digite quanto você quer investir inicialmente
  2. Informe quanto pretende investir por mês
  3. Escolha a taxa de juros anual esperada
  4. Defina por quantos anos quer investir
  5. Clique em "Calcular" e veja a mágica dos juros compostos!

### 💎 Calculadora de Independência Financeira
- **Para que serve**: Descubra quanto você precisa juntar para viver de renda
- **Como usar**:
  1. Digite seus gastos mensais atuais
  2. Informe quanto você já tem guardado
  3. Digite quanto consegue guardar por mês
  4. Escolha uma taxa de retorno anual esperada
  5. Veja quando você poderá se aposentar!

### 📧 Formulário de Contato
- **Para que serve**: Entre em contato para dúvidas ou sugestões
- **Características**: Validação automática e envio seguro

### 📱 Design Responsivo
- **Funciona perfeitamente** em computadores, tablets e celulares
- **Menu adaptativo** que se transforma em um botão hamburger no mobile
- **Animações suaves** que tornam a experiência mais agradável

## 🎨 Características do Design

- **Tema Claro e Profissional**: Design limpo em tons de branco e azul
- **Tipografia Moderna**: Usa as fontes Inter e Poppins do Google Fonts
- **Ícones Intuitivos**: Biblioteca Lucide React para ícones modernos
- **Animações Suaves**: Efeitos visuais que melhoram a experiência
- **Efeitos Glassmorphism**: Elementos com transparência moderna

## 🔧 Funcionalidades Técnicas

Para quem tem curiosidade sobre o que acontece "por trás dos panos":

- **Memória Inteligente**: O site lembra dos seus últimos cálculos
- **Validação em Tempo Real**: Os formulários verificam os dados enquanto você digita
- **Compatibilidade Total**: Funciona em todos os navegadores modernos
- **Código Limpo**: Estrutura organizada e bem documentada
- **Performance Otimizada**: Carregamento rápido e animações fluidas

## 🐛 Se algo não estiver funcionando

### Problemas Comuns e Soluções:

1. **As calculadoras não funcionam**:
   - Verifique se você está usando um servidor local (recomendado)
   - Tente atualizar a página (F5 ou Ctrl+R)

2. **O design não aparece corretamente**:
   - Verifique sua conexão com a internet (o site usa fontes do Google)
   - Tente limpar o cache do navegador

3. **No celular, algo está estranho**:
   - Tente rodar no modo paisagem e depois voltar para o modo retrato
   - Feche e abra o navegador novamente

4. **Para desenvolvedores**:
   - Abra as ferramentas de desenvolvedor (F12)
   - Verifique o console para mensagens de erro
   - Use o arquivo `teste.html` para testar as calculadoras isoladamente

## 🏗️ Estrutura Técnica (Para Desenvolvedores)

### Arquivos Principais:
- **`index.html`** - Página principal do site
- **`css/`** - Todos os estilos e temas
- **`js/`** - Funcionalidades JavaScript modulares
- **`assets/`** - Imagens e recursos

### Módulos JavaScript:
- **`utils.js`** - Funções utilitárias (formatação, localStorage, etc.)
- **`calculators.js`** - Lógica das calculadoras financeiras
- **`forms.js`** - Validação e envio de formulários
- **`menu.js`** - Navegação e menu responsivo
- **`animations.js`** - Animações e efeitos visuais
- **`app.js`** - Inicialização e coordenação dos módulos

### Funcionalidades Implementadas:
- ✅ Calculadoras financeiras interativas
- ✅ Formulários com validação em tempo real
- ✅ Menu responsivo para mobile
- ✅ Animações suaves ao scroll
- ✅ Tema claro profissional
- ✅ LocalStorage para persistência de dados
- ✅ Máscaras de input
- ✅ Contadores animados
- ✅ Performance otimizada

---

**Desenvolvido com ❤️ para ajudar você a conquistar sua independência financeira!**
