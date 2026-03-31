# 🚀 Ctrl-CPF

> Copie CPFs automaticamente, sem pontos e sem traços — com apenas um clique.
> 
![Gravar_2026_03_31_09_15_02_653](https://github.com/user-attachments/assets/0eb98eb5-e557-46ef-9083-47b448bb5640)

---

## 📌 Sobre o projeto

O **Ctrl-CPF** é uma extensão para Google Chrome desenvolvida para automatizar uma tarefa comum em sistemas administrativos: copiar CPFs removendo a formatação.

Ideal para quem trabalha com sistemas legados (como JSF / PrimeFaces), onde os CPFs aparecem com máscara (`000.000.000-00`) e precisam ser utilizados apenas com números.

---

## ⚡ Funcionalidades

* 🔍 Detecta automaticamente CPF na página
* 🎯 Prioriza campos de formulário (inputs)
* 🧹 Remove pontos e traços automaticamente
* 📋 Copia direto para a área de transferência
* ⚡ Execução instantânea ao clicar na extensão

---

## 🧠 Como funciona

A extensão:

1. Procura por campos de input com CPF (ex: `form:CPF`)
2. Identifica o valor do campo
3. Remove qualquer caractere não numérico
4. Copia automaticamente para o clipboard

### Exemplo:

```bash
000.000.000-00 → 00000000000
```

---

## 🖥️ Demonstração

| Antes          | Depois      |
| -------------- | ----------- |
| 000.000.000-00 | 00000000000 |

---

## 📦 Instalação

1. Clone ou baixe o repositório:

```bash
git clone https://github.com/arlindosilva-web/ctrl-cpf.git
```

2. Abra o Chrome e acesse:

```
chrome://extensions/
```

3. Ative o **Modo do desenvolvedor**

4. Clique em:
   👉 **Carregar sem compactação**

5. Selecione a pasta do projeto

---

## 🚀 Como usar

1. Acesse o sistema desejado
2. Clique no ícone da extensão
3. O CPF será automaticamente copiado

---

## 🛠️ Tecnologias utilizadas

* JavaScript (Vanilla)
* Chrome Extensions API (Manifest V3)

---

## 💡 Motivação

Esse projeto surgiu da necessidade de otimizar tarefas repetitivas no dia a dia, eliminando a necessidade de remover manualmente a formatação de CPFs.

Pequenas automações geram grandes ganhos de produtividade.

---

## 👨‍💻 Autor

**Arlindo Silva**
🔗 https://github.com/arlindosilva-web

---

## 📄 Licença

Este projeto está sob a licença MIT.
