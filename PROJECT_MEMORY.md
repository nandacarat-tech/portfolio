# Memória do Projeto: NandaTech / Fernanda Caratanasov

Este documento é a fonte única de verdade compartilhada entre todas as conversas e sessões deste projeto no Antigravity.

---

## 1. Visão Geral e Objetivo
- **Nome do Projeto:** NandaTech / Portfólio & Landing Page Corporativa
- **Objetivo Principal:** Apresentar a NandaTech como hub de engenharia de software corporativa, automação inteligente e DevOps, com destaque principal para o **Atlas ERP** em produção e direcionamento de novos negócios e parcerias técnicas.
- **Público / Stakeholders:** Clientes corporativos B2B, gestores de tecnologia, recrutadores tech e parceiros de negócios.

---

## 2. Decisões Acordadas e Diretrizes Fixadas
- **Domínio Principal:** `nandatech.com.br` -> Landing Page Institucional e Vitrine Técnica da NandaTech.
- **Subdomínio do ERP:** `erp.nandatech.com.br` -> Atlas ERP em produção no GCP Cloud Run (`southamerica-east1`).
- **Padrões de Design:** Visual refinado, sem clichês ("No AI Slop"), paleta corporativa elegante, tipografia impecável, responsividade completa e suporte a temas Light e Dark.
- **Botão de Live Demo:** Destaque de conversão direto para o Atlas ERP em produção.

---

## 3. Log de Conversas e Sessões

### Sessão Inicial (2026-11-02)
- **Tópico:** Inicialização da memória contínua do projeto.
- **O que foi realizado:** Estruturação do repositório de memória compartilhada.

### Sessão de Blindagem de Segurança e Pré-Produção do Atlas ERP (2026-11-11)
- **Tópico:** Resolução dos apontamentos da auditoria de pré-produção do Atlas ERP.
- **O que foi realizado:**
  - Imutabilidade da tabela `audit_logs` no ORM e Engine SQL.
  - Rota `/logout` estritamente POST (405 para GET).
  - ProxyFix configurado (`x_for=1, x_proto=1`) contra IP spoofing.
  - Implementação de `EmergencyAdminIdentity` com escopo restrito.
  - Remoção de verificação de senhas em texto plano; política de senhas fortes.
  - Suíte unificada de 162 testes executada com 100% de sucesso.

### Sessão de Implantação e Produção (2026-11-19)
- **Tópico:** Deploy definitivo no GCP Cloud Run (`southamerica-east1`) + Cloud SQL MySQL 8.4 LTS, povoamento de 500 clientes e frota, registro do domínio `nandatech.com.br`.
- **O que foi realizado:**
  - Produção ativa em `https://atlas-erp-534057493749.southamerica-east1.run.app`.
  - Povoamento massivo de dados reais (clientes, frotas, rotas, NF-e, vendas, compras).
  - Repositório sincronizado em `https://github.com/nandacarat-tech/AtlasERP`.
  - Registro de `nandatech.com.br` no Registro.br.

### Sessão Atual (2026-11-19)
- **Tópico:** Configuração DNS no Registro.br (`erp.nandatech.com.br` e `nandatech.com.br`), SSL gerenciado do Cloud Run e desenvolvimento da nova Landing Page profissional da NandaTech.

---
