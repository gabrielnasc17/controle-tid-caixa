# 📦 Controle de TID e Caixa

Sistema web desenvolvido para **controle, validação e rastreabilidade de TIDs e caixas** durante as etapas de entrada, conferência e saída.

O projeto foi desenvolvido utilizando **Google Apps Script, JavaScript, HTML, CSS e Google Sheets**, com foco na automação de processos operacionais, redução de controles manuais e melhoria da rastreabilidade das informações.

> **Projeto demonstrativo:** esta versão foi adaptada para fins de portfólio. Dados, identificadores e informações internas foram removidos ou substituídos por informações fictícias.

---

## 📌 Sobre o projeto

O sistema foi desenvolvido para organizar o fluxo de TIDs e caixas, permitindo o controle e a validação dos itens em diferentes etapas do processo operacional.

A aplicação permite:

- Associar TIDs a etiquetas e caixas
- Realizar conferências
- Identificar pendências
- Registrar movimentações
- Evitar duplicidades
- Validar informações
- Exportar registros

O objetivo principal é **reduzir erros de digitação, evitar duplicidades e facilitar o acompanhamento das movimentações**.

---

## 🧩 Módulos principais

O sistema está dividido em cinco módulos:

- RM
- Entrada DS
- Check-in
- Check-out
- Check-out RM

---

## 🔄 Fluxo do sistema

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
```

Cada etapa possui validações e regras específicas para garantir a integridade das informações ao longo do processo.

---

# 🛠️ Funcionalidades

## RM

Módulo responsável pelo cadastro das etiquetas e dos TIDs relacionados.

Principais funções:

- Cadastro de etiqueta de envio
- Inclusão de TIDs
- Validação do formato da TID
- Bloqueio de TIDs duplicadas
- Listagem dos TIDs cadastrados
- Associação dos TIDs à etiqueta
- Exportação dos registros para CSV

---

## Entrada DS

Módulo responsável pela conferência dos TIDs durante a etapa de entrada.

Principais funções:

- Consulta de uma etiqueta
- Carregamento dos TIDs relacionados
- Validação individual dos TIDs
- Identificação de TIDs pendentes
- Conferência dos itens recebidos
- Bloqueio do salvamento enquanto existirem itens pendentes
- Exportação dos registros para CSV

---

## Check-in

Módulo responsável pela identificação da caixa e associação dos TIDs.

Principais funções:

- Identificação da caixa mãe
- Leitura da etiqueta de envio
- Consulta dos TIDs relacionados à etiqueta
- Validação dos TIDs por bipagem
- Verificação se o TID pertence à etiqueta
- Bloqueio de TID duplicada
- Associação dos TIDs à caixa
- Controle de itens pendentes
- Registro da movimentação
- Exportação dos registros para CSV

---

## Check-out

Módulo responsável pela conferência e finalização da saída da caixa.

Principais funções:

- Consulta de uma caixa
- Carregamento dos itens associados
- Validação individual dos TIDs
- Identificação dos itens localizados e pendentes
- Conferência do Asset Tracking
- Obrigatoriedade do preenchimento do Asset Tracking
- Bloqueio da finalização enquanto existirem itens pendentes
- Bloqueio de uma caixa já finalizada
- Registro da saída
- Exportação dos registros para CSV

---

## Check-out RM

Módulo responsável pela validação final dos TIDs relacionados ao Asset Tracking.

Principais funções:

- Consulta por Asset Tracking
- Carregamento dos TIDs relacionados
- Validação individual dos TIDs
- Identificação de itens pendentes
- Bloqueio da finalização enquanto houver itens pendentes
- Registro da validação final

---

# 🔒 Travas e regras de validação

O sistema possui regras de validação e bloqueios para evitar inconsistências e garantir maior controle sobre as movimentações.

Entre as principais validações estão:

- **Validação do formato da TID:** impede o registro de identificadores fora do padrão esperado
- **Bloqueio de duplicidade:** evita o cadastro repetido de TIDs
- **Validação de pertencimento:** verifica se o TID está relacionado à etiqueta consultada
- **Controle de pendências:** impede a conclusão de etapas enquanto existirem itens não conferidos
- **Validação de caixa:** permite conferir os itens associados à caixa consultada
- **Bloqueio de caixa finalizada:** evita novas finalizações de uma caixa já processada
- **Obrigatoriedade do Asset Tracking:** exige o preenchimento da identificação necessária para a saída
- **Validação individual:** permite conferir cada TID durante as etapas
- **Controle de associação:** mantém o vínculo entre TID, etiqueta e caixa
- **Registro de movimentações:** armazena informações sobre as operações realizadas

Essas regras contribuem para a redução de erros operacionais, controle de duplicidades e maior rastreabilidade dos itens.

---

# 🖥️ Interface do sistema

A aplicação possui uma interface organizada por módulos, permitindo a navegação entre as diferentes etapas do processo.

A interface apresenta:

- Campos para consulta e registro de informações
- Contadores de itens
- Listas de conferência
- Indicadores de status
- Campos preparados para leitura por código de barras ou bipagem
- Mensagens de validação
- Identificação de itens pendentes
- Controle das etapas de entrada e saída
- Layout organizado para utilização operacional

---

## RM

Tela destinada ao cadastro de etiquetas e inclusão dos TIDs relacionados.

![Tela RM](docs/images/RM.PNG)

---

## Entrada DS

Tela destinada à consulta de etiquetas e validação dos TIDs durante a entrada.

![Tela Entrada DS](docs/images/ENTRADA.PNG)

---

## Check-in

Tela destinada à identificação da caixa, conferência e associação dos TIDs.

![Tela Check-in](docs/images/CHECK-IN.PNG)

---

## Check-out

Tela destinada à conferência dos itens da caixa e validação da saída.

![Tela Check-out](docs/images/CHECK-OUT.PNG)

---

## Check-out RM

Tela destinada à validação final dos TIDs relacionados ao Asset Tracking.

![Tela Check-out RM](docs/images/CHECK-OUT-RM.PNG)

---

# 💻 Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| Google Apps Script | Backend e integração com o Google Sheets |
| JavaScript | Lógica da aplicação e regras de validação |
| HTML5 | Estrutura das interfaces |
| CSS3 | Estilização e organização visual |
| Google Sheets | Armazenamento e controle dos dados |
| CSV | Exportação dos registros |

---

# 🏗️ Arquitetura

A aplicação utiliza o **Google Apps Script** como camada de processamento e o **Google Sheets** como estrutura de armazenamento.

```text
┌─────────────────────────┐
│         Usuário         │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│      Interface Web      │
│ HTML + CSS + JavaScript │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│    Google Apps Script   │
│   Regras e validações   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│      Google Sheets      │
│      Armazenamento      │
└─────────────────────────┘
```

---

## Responsabilidades das camadas

### Interface Web

Responsável pela interação com o usuário, preenchimento dos campos, consultas e exibição dos resultados.

### Google Apps Script

Responsável pelo processamento das informações, execução das regras de negócio e validação dos registros.

### Google Sheets

Responsável pelo armazenamento e organização dos dados de cada etapa do processo.

---

# 🗃️ Estrutura dos dados

O sistema utiliza diferentes abas no Google Sheets para representar as etapas do fluxo operacional.

```text
Google Sheets
│
├── RM
├── ENTRADA DS
├── CHECK-IN
├── CHECK-OUT
└── CHECK-OUT RM
```

### RM

Armazena as informações das etiquetas e dos TIDs cadastrados.

### Entrada DS

Armazena os registros de conferência e validação dos TIDs na entrada.

### Check-in

Armazena as informações de associação entre caixas, etiquetas e TIDs.

### Check-out

Armazena os registros de conferência e finalização das caixas.

### Check-out RM

Armazena os registros da validação final dos TIDs relacionados ao Asset Tracking.

---

# 🔎 Controle e rastreabilidade

O sistema foi estruturado para facilitar o acompanhamento das movimentações de TIDs e caixas durante o processo operacional.

Entre as informações controladas estão:

- Identificação da TID
- Etiqueta de envio
- Identificação da caixa
- Asset Tracking
- Status da conferência
- Itens pendentes
- Registros de entrada
- Registros de saída
- Usuário responsável
- Data e horário das operações

A organização dessas informações contribui para a conferência dos itens e identificação de possíveis divergências.

---

# ✅ Validações implementadas

Entre as regras de validação utilizadas no sistema estão:

- Verificação do formato da TID
- Bloqueio de TIDs duplicadas
- Verificação de pertencimento entre TID e etiqueta
- Identificação de itens já validados
- Identificação de itens pendentes
- Associação entre TID, etiqueta e caixa
- Obrigatoriedade do Asset Tracking
- Bloqueio de caixa já finalizada
- Bloqueio de finalização com itens pendentes
- Registro do usuário responsável
- Registro de data e horário

---

# 📤 Exportação de dados

O sistema possui funcionalidades de exportação dos registros para o formato **CSV**.

A exportação permite:

- Gerar uma cópia dos registros
- Facilitar a análise das informações
- Compartilhar dados de forma estruturada
- Apoiar o controle e a conferência operacional

---

# 🤖 Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento.

Entre as atividades em que a IA foi utilizada estão:

- Auxílio na estruturação do código
- Identificação e correção de erros
- Sugestões de implementação
- Apoio na criação de validações
- Refatoração de código
- Organização das funcionalidades
- Documentação do projeto

As regras de negócio e as necessidades do processo foram definidas a partir do problema operacional.

O código foi revisado e testado durante o desenvolvimento.

---

# 📚 Aprendizados

O desenvolvimento deste projeto proporcionou experiência prática em:

- Desenvolvimento de aplicações web
- JavaScript
- Google Apps Script
- Integração com Google Sheets
- Manipulação de dados
- Criação de regras de negócio
- Validação de dados
- Automação de processos
- Controle e rastreabilidade
- Organização de fluxos operacionais
- Estruturação de interfaces
- Tratamento de erros
- Exportação de dados para CSV
- Utilização de Inteligência Artificial como apoio ao desenvolvimento

---

# 🚀 Melhorias futuras

Algumas melhorias que podem ser implementadas em versões futuras:

- Otimização das operações de leitura e escrita no Google Sheets
- Utilização de operações em lote
- Melhoria do tratamento de erros
- Autenticação e controle de permissões
- Logs de auditoria mais detalhados
- Dashboard de indicadores operacionais
- Banco de dados dedicado
- Testes automatizados
- Integração com APIs externas
- Melhorias na experiência do usuário
- Aprimoramento da responsividade da interface
- Implementação de relatórios gerenciais

---

# 📁 Estrutura do repositório

```text
controle-tid-caixa/
│
├── docs/
│   └── images/
│       ├── RM.PNG
│       ├── ENTRADA.PNG
│       ├── CHECK-IN.PNG
│       ├── CHECK-OUT.PNG
│       └── CHECK-OUT-RM.PNG
│
├── Code.gs
├── Index.html
├── README.md
└── Outros arquivos do projeto
```

---

# ⚠️ Observação

Este repositório contém uma versão adaptada para demonstração e portfólio.

Informações, identificadores, dados operacionais e referências internas presentes no sistema original não fazem parte desta versão pública.

O objetivo do projeto é demonstrar a aplicação de tecnologias web na automação, validação e controle de processos operacionais.

---

# 👨‍💻 Autor

**Gabriel Luiz do Nascimento**

Projeto desenvolvido com foco em **automação de processos, tecnologia, desenvolvimento web, rastreabilidade e soluções aplicadas a operações**.
