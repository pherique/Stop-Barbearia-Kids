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