# Testes de Performance da API com K6

Este repositório com testes de performance automatizados desenvolvidos com a ferramenta [Grafana K6](https://k6.io/) e escritos em
JavaScript, voltados para a API do sistema bancário.

Repositorio:https://github.com/AnaAnzolin08/banco-api-performece


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

# Dados de entrada para os testes (ex: usuários, payloads)
# Funções utilitárias reutilizáveis para interação com a API
