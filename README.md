# README - Stop Barbearia & Kids

Este projeto é um site simples para a barbearia fictícia "Stop Barbearia & Kids", com HTML, CSS e backend em Python (Flask). Este arquivo explica cada parte do código para facilitar os estudos.

---

## 📄 Estrutura HTML (index.html)

### `<head>`
- `<!DOCTYPE html>`: Define o tipo de documento como HTML5.
- `<html lang="pt-BR">`: Define a linguagem da página como português do Brasil.
- `<meta charset="UTF-8">`: Garante que os caracteres especiais (acentos) funcionem.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Torna o site responsivo em dispositivos móveis.
- `<title>`: Título da aba do navegador.
- `<link rel="stylesheet" href="styles.css">`: Importa o arquivo de estilo CSS.

### `<header>`
- `<h1>`: Título principal do site.
- `<nav><ul><li><a>>`: Menu de navegação com links internos (rolagem para seções).

### `<main>`
Contém 4 seções principais:

#### `#hero`
- Mensagem de boas-vindas.

#### `#servicos`
- Lista de serviços oferecidos.

#### `#produtos`
- Aviso sobre produtos que ainda serão adicionados.

#### `#contato`
- Formulário com `action="/enviar" method="post"` para envio de mensagens para o backend.
- Campos: `nome` e `mensagem`, ambos obrigatórios.

### `<footer>`
- Rodapé com direitos autorais.

---

## 🎨 CSS (styles.css)

**(resumo dos estilos aplicados)**

- `body`: Fonte padrão, margens zeradas, fundo cinza claro.
- `header`: Fundo escuro, texto branco, centralizado.
- `nav ul`: Menu de navegação com itens centralizados e estilo de lista removido.
- `main`: Espaçamento geral das seções.
- `footer`: Igual ao header, mas no rodapé.

---

## 🐍 Backend em Flask (app.py)

```python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')  # Exibe a página principal

@app.route('/enviar', methods=['POST'])
def enviar():
    nome = request.form['nome']
    mensagem = request.form['mensagem']
    print(f"Mensagem recebida de {nome}: {mensagem}")
    return f"Obrigado pelo contato, {nome}!"

if __name__ == '__main__':
    app.run(debug=True)
```

### Explicação:
- `Flask`: Micro framework para criar sites com Python.
- `render_template`: Carrega o HTML.
- `request.form`: Lê dados do formulário enviado.
- `@app.route('/')`: Página inicial.
- `@app.route('/enviar')`: Rota que recebe os dados do formulário via POST.
- `app.run(debug=True)`: Roda o servidor em modo desenvolvimento.

---

## ✅ O que estudar a seguir:
1. HTML Semântico (tags como `section`, `header`, `footer`, etc.)
2. CSS Flexbox e Responsividade
3. Fundamentos de Flask (rotas, formulários, templates)
4. Criação de banco de dados com SQLite ou PostgreSQL
5. Estilização com Bootstrap ou Tailwind (opcional)
6. Deploy com Heroku, Render ou PythonAnywhere

---

Se tiver dúvidas em qualquer trecho, posso te explicar em detalhes ou complementar com vídeo, imagem ou código passo a passo.

Você está indo muito bem! Vamos construir isso juntos. 🚀
