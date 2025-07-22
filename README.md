# Testes de Performance da API com K6

Este repositório com testes de performance automatizados desenvolvidos com a ferramenta [Grafana K6](https://k6.io/) e escritos em
JavaScript, voltados para a API do sistema bancário.

:https://github.com/AnaAnzolin08/banco-api-performece


## × Introdução

Que tem como objetivo simular diferentes cargas e cenários de uso para a API do banco, avaliando seu desempenho e
identificando possíveis gargalos. Os testes são escritos com foco em modularidade, organização por contexto e reutilização de
modelos de dados.


## Tecnologias Utilizadas

- [K6] (https://k6.io/)- Ferramenta open source de testes de carga e performance.
- JavaScript 
- [JSON] - Para extração de dados em respostas JSON.
- Variáveis de ambiente para configuração dinâmica (ex: 'BASE_URL').


Estrutura do Repositório

banco-api-performance/
- fixtures/
Hhelpers/

banco-api-performece/

├── fixtures/ # Dados de entrada para os testes (ex: usuários, payloads)
├── helpers/ # Funções utilitárias reutilizáveis para interação com a API
├── config/ # Arquivos de configuração (ex: config.local.json com baseUrl)
├── test/ # Scripts de teste K6 (.test.js)
├── utils/ # Variáveis e funções utilitárias para parametrização dos testes
├── README.md # Documentação do projeto

### Executar um teste simples

```bash
BASE_URL=http://sua-api.com k6 run test/login.test.js

## Executar com dashboard web (relatório em tempo real)

```bash
BASE_URL=http://sua-api.com k6 run --out dashboard test/login.test.js
```

Após o início do teste, o K6 exibirá uma URL para acompanhamento do dashboard no navegador.

### Executar com exportação de relatório HTML

```bash
BASE_URL=http://sua-api.com K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run test/login.test.js
```

Este comando gera um arquivo `html-report.html` com o relatório detalhado do teste, que pode ser aberto em qualquer navegador.

