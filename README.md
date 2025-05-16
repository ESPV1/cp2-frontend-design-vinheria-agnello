<h1 align=center>Vinheria Agnello 🍷</h1>
A Vinheria Agnello iniciou suas atividades em São Paulo há mais de 15 anos, contando com apenas uma loja física onde coloca à disposição do mercado uma vasta gama de rótulos de vinícolas nacionais e internacionais. Com uma gestão tradicional e conservadora, o Sr. Giulio, proprietário da vinheria, resistiu por muito tempo à ideia de entrar no mundo do e-commerce, por julgar esse um meio um tanto “frio”, distante do cliente, e, portanto, não adequado para o padrão de atendimento que gosta de oferecer em sua loja. 

No entanto, agora, para buscar minimizar o impacto negativo da pandemia em seus negócios, Giulio resolveu seguir os conselhos de sua filha Bianca e está disposto a contratar o desenvolvimento de um portal de e-commerce.


## 🔴 Problema
Em decorrência da pandemia, seu movimento sofreu um impacto significativo, dadas as restrições de mobilidade de seus compradores que se viram impedidos de frequentar a loja física e muitos acabaram migrando para lojas online.  

## 🏁 Solução
Na realidade, as únicas certezas percebidas são o fato de que os proprietários querem o desenvolvimento de uma solução de e-commerce e o desejo de que seja um portal que propicie ao usuário uma experiência próxima àquela encontrada na loja física.

A primeira etapa da solução para o problema do Sr. Giulio será a criação de um site estático contendo apenas informativos sobre:
* Home
* Produtos
* Galeria
* Trabalhe Conosco
* Contato

A segunda etapa da solução será adicionar os seguintes elementos na estrutura do código.
### 🎯 Pseudo-classes
- Aplicar ao menos **3 pseudo-classes diferentes**:
  - Ex: `:hover`, `:focus`, `:nth-child()`, `:not()`, `:checked`
  - Usar em menus, botões, links ou formulários

### 🎯 Pseudo-elementos
- Aplicar ao menos **2 pseudo-elementos**:
  - Ex: `::before`, `::after`, `::first-letter`, `::selection`
  - Usar para fins estéticos (ex: ícones, decorações visuais, estilo de texto)

### 💫 Animações
- Criar pelo menos **1 animação com `@keyframes`**
  - Ex: banner animado, entrada de conteúdo, ícones pulsando etc.

### 🔄 Transições
- Aplicar **transições suaves** a elementos interativos:
  - Ex: mudança de cor, sombra, tamanho em `hover` ou `focus`

### 🎢 Transformações
- Usar ao menos **2 transformações CSS**:
  - Ex: `scale()`, `rotate()`, `translate()`, `skew()` em imagens, botões ou seções específicas


## 🔗 Como acessar o site
O site atualmente só pode ser visto utilizando a integração do **Github Pages**, seguindo este link: .Fique à vontade para clonar o repositório ou fazer um fork e analisar mais detalhes utilizando a integração do *Live Server* (Visual Studio Code).

## 🧰 Tecnologias Utilizadas
* Linguagem de Marcação: HTML5
* Linguagem de Estilização: CSS3
* IDE: Visual Studio Code
* Software de Versionamento: GIT
* Software de Design de Telas: Figma

## 📄 Páginas
## Home
![Home Image](./src/assets/images/index_agnello.PNG)
*Página inicial da vinheria contendo informações básicas sobre vinhos e com links de redirecionamento para outras partes do site.*

## Produtos
![Produtos Image](./src/assets/images/produtos_agnello.PNG)
*Página de Produtos com foco em mostrar os produtos que a loja possui, porém sem nenhuma interação além de cards com nome e detalhes do produto.*

## Galeria
![Galeria Image](./src/assets/images/galeria_agnello.PNG)
*Página de Galeria contendo vídeos e fotos sobre a vinícola e vinhos.*

## Contato
![Contato Image](./src/assets/images/contato_agnello.PNG)
*Página de Contato contendo horário de atendimento e meios de contato com a loja.*

## Trabalhe Conosco
![Trabalhe Conosco Image](./src/assets/images/trabalhe_conosco_agnello.PNG)
*Página de Trabalhe Conosco com informações sobre o interesse da vaga e um formulário não funcional para ser preenchido com informações do interessado.*

## 🤖 Melhorias

### 🎯 3 Pseudo-classes
```css
/* 1ª pseudo-classe :hover */
/* Onde: links do nav presente em todas as páginas */
/* O que faz: esmaece o link quando o mouse passa por cima */
nav ul li a:hover {
  opacity: 0.8;
}

/* 2ª pseudo-classe :nth-child() */
/* Onde: label do textarea da página 'trabalhe conosco' */
/* O que faz: label do textarea fica em cima */
.form-group:nth-child(9) label {
  top: 0;
}

/* 3ª pseudo-classe :focus */
/* Onde: inputs, labels e textarea da página 'trabalhe conosco' */
/* O que faz: a cor da label fica vinho */
input:focus + label,
textarea:focus + label {
  color: var(--dark-wine);
}
```
### 🎯 3 Pseudo-elementos
```css
/* 1º pseudo-elemento  */
/* Home: Usa ::first-letter para mudar a cor da inicial da palavra “Tintos” para vinho. */
.firstLetter::first-letter {
  font-size: 150%;
  font-weight: bold;
  color: var(--light-whine);
}
/* 2º pseudo-elemento  */
/* Galeria: Usa ::first-letter para mudar a cor da inicial da palavra “Principal” para vinho. */
.firstLetter::first-letter {
  font-size: 150%;
  font-weight: bold;
  color: var(--light-whine);
}
/* 3º pseudo-elemento  */
/*Galeria: Usa ::selection para alterar a cor do texto selecionado para bege, com fundo vermelho. */
.galeria-descricao::selection {
  background-color: var(--light-whine);
  color: var(--off-white);
}
```
### 💫 1 Animação
```css
/* Onde: imagem de seta pra baixo da página 'home' */
/* O que faz: a seta sobe e desce de forma contínua */
@keyframes moverSeta {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }
}
#scrollButton img {
  animation: moverSeta 2s ease-in-out infinite;
}
```
### 🔄 Transições
```css
/* Onde: labels da página 'trabalhe conosco' */
/* O que faz: aplica uma transição na animação da label com classList.add(.activeLabel) */
label {
  transition: 0.2s;
}
/* Onde: inputs e textarea da página 'trabalhe conosco'*/
/* O que faz: aplica uma transição na mudança de cor e espessura da borda com :focus */
input,
textarea {
  transition: 0.1s ease;
}
/* Onde: botão de enviar formulário da página 'trabalhe conosco' */
/* O que faz: aplica transição no tranform e na mudança de background com :hover */
button {
  transition: background-color 0.3s ease, transform 0.2s ease;
}
```
### 🎢 2 Transformações 
```css
/* 1ª transformação translateY() */
/* Onde: labels da página 'trabalhe conosco' */
/* O que faz: as labels ficam centralizadas nos inputs */
label {
  transform: translateY(-50%);
}

/* 2ª transformação scale() */
/* Onde: imagens de garrafas de vinho da página 'produtos' */
/* O que faz: aumenta o tamanho das imagens com :hover */
.produtos-image-holder:hover {
  transform: scale(1.1);
}
```

## 🧑‍💻 Equipe
<table>
  <tr><th><span>Integrantes</span></th><th><span>Tarefas</span></th></tr>
    <tr>
    <td align = "center">
      <img src="https://avatars.githubusercontent.com/u/202196268?v=4" width="100px" alt= "Camila Martins Profile Image"/><p><a href = "https://github.com/dev-camila">Camila Martins</a></p><span><b>RM:561492</b></span>
    </td>
    <td>
      <ul>
        <li>Animações</li>
      </ul>
    </td>
  </tr>
    <tr>
    <td align = "center">
      <img src="https://avatars.githubusercontent.com/u/80047823?v=4" width="100px" alt= "Gabriel Amara Profile Image"/><p><a href = "https://github.com/gabrielamara98">Gabriel Amara</a></p><span><b>RM:561403</b></span>
    </td>
    <td>
      <ul>
        <li>Gestão do README e repositório</li>
        <li>Decisão das Melhorias</li>
      </ul>
    </td>
  </tr>
    <tr>
    <td align = "center">
      <img src="https://avatars.githubusercontent.com/u/105310868?v=4" width="100px" alt= "Guilherme Godoy Profile Image"/><p><a href = "https://github.com/godooooy">Guilherme Godoy </a></p><span><b>RM:564417</b></span>
    </td>
    <td>
      <ul>
        <li>Pseudo Elementos<li>
      </ul>
    </td>
  </tr>
    <tr>
    <td align = "center">
      <img src="https://avatars.githubusercontent.com/u/101485201?v=4" width="100px" alt= "Pedro Lucas Profile Image"/><p><a href = "https://github.com/pedroviscz">Pedro Lucas Almeida</a></p><span><b>RM:566256</b></span>
    </td>
    <td>
      <ul>
        <li>Transformações</li>
        <li>Transições</li>
        <li>Pseudo Classes</li>
      </ul>
    </td>
  </tr>
</table>

## Notas
Projeto: Case-Vinheria Agnello

Repositório que servirá como 2º Checkpoint da disciplina de Front-End da FIAP

Professor avaliador: Lucas Silva de Sousa

Regras de proteção para a branch main localizada em RuleSets
