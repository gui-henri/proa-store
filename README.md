# Lojinha do Proa

A Lojinha PROA é um e-commerce que vende produtos com design original e especial, criados por alunos do PROA. A loja tem como objetivo apoiar o PROA e oferecer uma oportunidade aos alunos de mostrarem seus talentos.

Os produtos da Lojinha PROA são escolhidos por meio de concursos. Os alunos podem enviar suas ideias para os concursos e os compradores e alunos podem votar no design que mais gostam. Os concursos são criados por moderadores da loja e, ao fim de cada concurso, os mais votados viram produto no site.

Os alunos participantes dos concursos têm um perfil na loja, que funciona como um portfólio. Nesse perfil, os alunos podem mostrar seus trabalhos anteriores e se conectar com outros alunos e compradores.

## Propósito

Parágrafo 1 sobre o propósito do projeto. Explique direitinho.

Parágrafo 2 sorbe o propósito do projeto. Explique do melhor jeito que puder

## Utilização

O projeto está disponível online através deste [link.](https://proa-store.vercel.app)

Na tela inicial, o usuário se depara com uma estrutura de e-commerce, onde ele pode explorar produtos e ir para a página de compra. 

<img width="944" alt="image" src="https://github.com/gui-henri/proa-store/assets/85313022/1623d95b-e4e5-4146-9f27-66b44c66388f">

Caso seja um usuário comum que deseja apenas realizar compras, ele pode simplesmente selecionar um produto e seguir comprando o que desejar:

<img width="944" alt="image" src="https://github.com/gui-henri/proa-store/assets/85313022/6537012a-c53b-44e6-92fe-3f404bdf6e3d">

Ainda na página inicial, há um banner logo no inicio, realizando um convite ao aluno para que envie seus designs.  

<img width="946" alt="image" src="https://github.com/gui-henri/proa-store/assets/85313022/910a66e1-c09d-481a-b801-f72c0c87640d">

Ele também pode navegar para a página de votação, onde poderá votar em seus designs favoritos para serem adicionados depois:

<img width="895" alt="image" src="https://github.com/gui-henri/proa-store/assets/85313022/4dd7af70-1b45-4faa-bb20-8ce235eadd42">

Mas para realizar isso, o aluno deve estar logado no sistema. Para isso, há um fluxo de autenticação e cadastro:

<img width="944" alt="image" src="https://github.com/gui-henri/proa-store/assets/85313022/1f7ede6f-9049-4ce8-984c-b8900eb671d1">

Neste momento, o sistema faz uma distinção. Usuários que são alunos terão acesso as opções já discutidas acima, além do fluxo de envio de designs e seu perfil.

Envio de design:
<img width="944" alt="image" src="https://github.com/gui-henri/proa-store/assets/85313022/26f8438b-2d14-4523-ade2-ded6eca25217">

Perfil do usuário:
<img width="944" alt="image" src="https://github.com/gui-henri/proa-store/assets/85313022/5a9e1e09-5354-4eff-8992-728f3dd6beea">

Mas além de um usuário comum, este pode ser um administrador. Caso seja, novas funções aparecerão na navbar, que o redirecionam para a página de criar votação.

<img width="943" alt="image" src="https://github.com/gui-henri/proa-store/assets/85313022/494dfa8f-b8b2-478c-b565-b17b870e0ba0">

Caso uma votação esteja em andamento, a página mostrada será a de edição de votação, onde o administrador pode alterar as informações caso necessário.

<img width="943" alt="image" src="https://github.com/gui-henri/proa-store/assets/85313022/244f371c-34a4-49d4-81da-384f45537c91">

Na página acima também há uma seção onde o administrador pode verificar e buscar os produtos que estão em votação. Estes são estão em ordem decrescente de número de votos.

## Instalação

1. Faça um clone do repositório
2. Abra um terminal na pasta do projeto
3. Execute o comando `npm install` para instalar as dependências
4. Após a instalação, execute o comando `npm run dev`
5. O projeto deve ficar disponível em `http://localhost:3000`

Made by Byte Farmers
