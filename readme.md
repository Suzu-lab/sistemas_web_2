# Sistema Web para Petshop

Este projeto foi desenvolvido como parte da disciplina **Fundamentos de Sistemas Web**.  
O objetivo é criar um sistema web simples para apresentação de produtos e serviços de um petshop.

Nesta segunda etapa do projeto, foi incluído CSS e JavaScript, conforme os requisitos da atividade.

# Objetivo do Projeto

O objetivo deste projeto é desenvolver a estrutura básica de um sistema web para um petshop, permitindo a visualização de produtos e serviços oferecidos pelo estabelecimento.

A plataforma apresenta:

 - categorias de produtos
 - descrição e valor dos itens
 - serviços disponíveis no petshop
 - formulário para agendamento dos serviços

# Funcionalidades

O sistema apresenta as seguintes informações:

### Produtos
Os produtos estão organizados em três categorias:

 - **Acessórios**
 - **Rações e suplementos**
 - **Higiene e limpeza**

Cada produto contém:

 - imagem
 - descrição
 - valor

Cada categoria possui pelo menos **dois produtos**.

### Serviços

O sistema também apresenta os serviços oferecidos pelo petshop:

 - **Banho e tosa**


Cada serviço contém:

 - descrição
 - valor

Também é apresentada uma opção para serviço de telebusca dos pets para realização dos serviços

### Agendamento

O sistema possui um formulário para agendamento dos serviços do petshop, inclujindo opção de telebusca:

 - **Banho e tosa**

---


# Estrutura do Projeto
petshop/
 - agendamento.html
 - index.html
 - servicos.html
 - css/
   - bootstrap.min.css
   - style.css
 - img/
    - imagens
 - js/
    - bootstrap.bundle.min.js
    - javascript.js
 - produtos/
    - produtos_acess.html
    - produtos_higi.html
    - produtos_supl.html

### Páginas do sistema

 - **index.html**  
    Página inicial com apresentação do petshop.

 - **agendamento.html**  
    Página inicial com apresentação do petshop.

 - **servicos.html**  
    Página com a descrição dos serviços oferecidos pelo petshop.

Os produtos foram separados em três páginas diferentes, cada uma para uma categoria de produtos.
O link exibido na página inicial e na página de serviços direciona para a página de acessórios, que serve como "página principal" para essa seção.
Dentro das páginas de produtos são exibidos novos links que direcionam para as outras seções.

 - **produtos_acess.html**  
    Página com descrição de acessórios vendidos pelo petshop, incluindo foto, descrição e preço.

 - **produtos_higi.html**  
    Página com descrição de produtos de higiene e limpeza vendidos pelo petshop, incluindo foto, descrição e preço.

 - **produtos_supl.html**  
    Página com descrição de rações e suplementos vendidos pelo petshop, incluindo foto, descrição e preço.


Projeto desenvolvido por **Ismael Scalcon**  
Disciplina: Fundamentos de Sistemas Web  
Ano: 2026