# Controle de TID e Caixa

Sistema web desenvolvido para controle, validação e rastreabilidade de TIDs e caixas durante as etapas de entrada, conferência e saída.

O projeto foi desenvolvido utilizando **Google Apps Script, JavaScript, HTML, CSS e Google Sheets**, com foco na automação de processos operacionais, redução de controles manuais e melhoria da rastreabilidade das informações.

> **Projeto demonstrativo:** esta versão foi adaptada para fins de portfólio. Dados, identificadores e informações internas foram removidos ou substituídos por informações fictícias.

---

## Sobre o projeto

O sistema foi desenvolvido para organizar o fluxo de TIDs e caixas, permitindo o controle e a validação dos itens em diferentes etapas do processo operacional.

A aplicação permite associar TIDs a etiquetas e caixas, realizar conferências, identificar pendências e registrar as movimentações realizadas.

O projeto tem como objetivo reduzir erros de digitação, evitar duplicidades e facilitar o acompanhamento das movimentações.

### Módulos principais

- RM
- Entrada DS
- Check-in
- Check-out
- Check-out RM

---

## Fluxo do sistema

O processo é organizado em etapas, permitindo que os TIDs sejam conferidos e associados às respectivas caixas ao longo do fluxo operacional.

```text
RM
 │
 ▼
Entrada DS
 │
 ▼
Check-in
 │
 ▼
Caixa
 │
 ▼
Check-out
 │
 ▼
Check-out RM
