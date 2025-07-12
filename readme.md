Sempre colocar num papel as funcionalidades da nossa aplicação, o que o usuário pode ou não pode fazer dentro do app

Requisitos Funcionais

[x] O usuário deve poder criar uma nova transação
[x] O usuário deve poder obter um resumo da sua conta
[x] O usuário deve poder listar todas transações que já ocorreram
[x] O usuário deve poder visualisar uma transação única

Regras de Negócios (condicionais)

[x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá
[ ] Deve ser possível identificarmos o usuário entre as requisições
[ ] O usuário só pode visualizar transações o qual ele criou.

Requisitos não funcionais


Os plugins sao maneiras de organizar, reutilizar e encapsular funcionalidades dentro da aplicacao. 
E possivel adicionar rotas, hooks, decorators, schemas, diddlewares de forma modular e isolada.
Um plugin é basicamente uma função que recebe a instância do Fastify e um done (ou retorna uma Promise)

✅ Por que usar plugins?
Organização do código – você separa rotas, lógica e funcionalidades em módulos.

Reutilização – plugins podem ser reutilizados em vários projetos.

Encapsulamento – evita que escopos interfiram uns nos outros.

Composição – você pode construir uma aplicação com uma cadeia de plugins pequenos e testáveis.

Performance – o sistema de encapsulamento do Fastify é muito otimizado.

🧩 Tipos de plugins
Encapsulados (default): afetarão apenas a instância local.

Global (com fastify-plugin): compartilham funcionalidades com toda a app.

O que e uma desestruracao

//Cookies// -> Formas de manter contexto entre requisicoes

//handler// -> Eh o codigo do funcionamento da Rota. 


// Testes automatizados // => Formas de manter a confiança na hora de dar manuntenção a longo prazo.
- Unitários: Testar uma pequena parte do app de forma isolada
- Integração: Testa a comunicação entre duas ou mais unidades
- e2e - ponta a ponta: Simulam um usuário operando na nossa app 

// Piramide de testes // => E2E (não dependem de nenhuma tecnologia, não dependem de arquitetura)
// 
