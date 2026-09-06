# Controle de TID e Caixa

Sistema web desenvolvido para controle, validação e rastreabilidade de TIDs e caixas durante etapas de entrada, conferência e saída.

O projeto foi desenvolvido utilizando **Google Apps Script, JavaScript, HTML, CSS e Google Sheets**, com foco na automação de processos operacionais e redução de controles manuais.

> **Projeto demonstrativo:** esta versão foi adaptada para fins de portfólio. Dados, identificadores e informações internas foram removidos ou substituídos por informações fictícias.

---

## Sobre o projeto

O sistema foi desenvolvido para organizar o fluxo de TIDs e caixas, permitindo validar os itens em diferentes etapas do processo.

A aplicação possui cinco módulos principais:

* RM
* Entrada DS
* Check-in
* Check-out
* Check-out RM

O sistema registra as movimentações, associa TIDs às respectivas etiquetas e caixas e realiza validações antes da conclusão de cada etapa.

---

## Fluxo do sistema

```text
RM
 │
 ▼
ENTRADA DS
 │
 ▼
CHECK-IN
 │
 ▼
CAIXA
 │
 ▼
CHECK-OUT
 │
 ▼
CHECK-OUT RM
```

---

## Funcionalidades

### RM

* Cadastro de etiqueta de envio.
* Inclusão de TIDs.
* Validação do formato da TID.
* Bloqueio de TIDs duplicadas.
* Listagem dos TIDs cadastrados.
* Exportação dos registros para CSV.

### Entrada DS

* Consulta de uma etiqueta.
* Carregamento dos TIDs relacionados.
* Validação individual dos TIDs.
* Identificação de TIDs pendentes.
* Bloqueio do salvamento enquanto existirem itens pendentes.
* Exportação dos registros para CSV.

### Check-in

* Identificação da caixa mãe.
* Leitura da etiqueta de envio.
* Consulta dos TIDs relacionados à etiqueta.
* Validação dos TIDs por bipagem.
* Verificação se o TID pertence à etiqueta.
* Bloqueio de TID duplicada.
* Associação dos TIDs à caixa.
* Controle de itens pendentes.
* Exportação dos registros para CSV.

### Check-out

* Consulta de uma caixa.
* Carregamento dos itens associados.
* Validação individual dos TIDs.
* Identificação dos itens localizados e pendentes.
* Obrigatoriedade do Asset Tracking.
* Bloqueio da finalização enquanto existirem itens pendentes.
* Bloqueio de uma caixa já finalizada.
* Exportação dos registros para CSV.

### Check-out RM

* Consulta por Asset Tracking.
* Carregamento dos TIDs relacionados.
* Validação individual dos TIDs.
* Bloqueio da finalização enquanto houver itens pendentes.
* Registro da validação final.

---

## Tecnologias

| Tecnologia         | Utilização                             |
| ------------------ | -------------------------------------- |
| Google Apps Script | Backend e integração com Google Sheets |
| JavaScript         | Lógica da aplicação                    |
| HTML5              | Estrutura da interface                 |
| CSS3               | Estilização e responsividade           |
| Google Sheets      | Armazenamento dos dados                |

---

## Arquitetura

A aplicação utiliza o Google Apps Script como camada de processamento e o Google Sheets como armazenamento dos registros.

```text
┌─────────────────────────┐
│       Usuário           │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Interface Web           │
│ HTML + CSS + JavaScript │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Google Apps Script      │
│ Regras e validações     │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Google Sheets           │
│ Armazenamento           │
└─────────────────────────┘
```

---

## Estrutura dos dados

O sistema utiliza diferentes abas para representar as etapas do processo:

```text
RM
ENTRADA DS
CHECK-IN
CHECK-OUT
CHECK-OUT RM
```

Cada etapa possui sua própria função dentro do fluxo operacional.

---

## Validações

Entre as regras implementadas estão:

* Verificação de TID válida.
* Bloqueio de TID duplicada.
* Verificação de pertencimento entre TID e etiqueta.
* Identificação de itens já validados.
* Identificação de itens pendentes.
* Associação entre TID, etiqueta e caixa.
* Obrigatoriedade do Asset Tracking.
* Bloqueio de caixa já finalizada.
* Bloqueio de finalização com itens pendentes.
* Registro do usuário responsável.
* Registro de data e horário.

---

## Interface

A aplicação utiliza uma interface dividida por módulos, permitindo alternar entre as diferentes etapas do processo.

A interface também apresenta:

* contadores de itens;
* listas de auditoria;
* indicadores de status;
* campos preparados para leitura por código de barras/bipagem;
* mensagens de validação;
* layout responsivo.

---

## Inteligência Artificial

A Inteligência Artificial foi utilizada como **ferramenta de apoio durante o desenvolvimento**.

Entre as atividades em que a IA foi utilizada estão:

* auxílio na estruturação do código;
* identificação e correção de erros;
* sugestões de implementação;
* apoio na criação de validações;
* refatoração;
* documentação.

As regras de negócio e as necessidades do processo foram definidas a partir do problema operacional, sendo o código revisado e testado durante o desenvolvimento.

---

## Aprendizados

O desenvolvimento deste projeto proporcionou experiência prática em:

* desenvolvimento de aplicações web;
* JavaScript;
* Google Apps Script;
* integração com Google Sheets;
* manipulação de dados;
* criação de regras de negócio;
* validação de dados;
* automação de processos;
* controle e rastreabilidade;
* tratamento de diferentes etapas de um fluxo operacional.

---

## Melhorias futuras

Algumas melhorias que podem ser implementadas em versões futuras:

* otimização das operações de leitura e escrita no Google Sheets;
* utilização de operações em lote;
* melhoria do tratamento de erros;
* autenticação e controle de permissões;
* logs de auditoria mais detalhados;
* dashboard de indicadores;
* banco de dados dedicado;
* testes automatizados;
* integração com APIs externas.

---

## Observação

Este repositório contém uma versão adaptada para demonstração e portfólio.

Informações, identificadores, dados operacionais e referências internas presentes no sistema original não fazem parte desta versão pública.

---

## Autor

**Gabriel Luiz do Nascimento**

Projeto desenvolvido com foco em **automação de processos, tecnologia e soluções aplicadas a operações**.
