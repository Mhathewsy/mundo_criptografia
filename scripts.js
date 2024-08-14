// Função para validar o texto de entrada
function isValidInput(input) {
    // Regex para verificar se o texto contém apenas letras minúsculas e espaços
    const regex = /^[a-z\s]+$/;
    return regex.test(input);
}

// Função para criptografar o texto de entrada
function encrypt() {
    let inputText = document.getElementById("inputText").value;

    if (!isValidInput(inputText)) {
        alert("Texto inválido! Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.");
        return;
    }

    let outputText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").innerText = outputText;
}

// Função para descriptografar o texto de entrada
function decrypt() {
    let inputText = document.getElementById("inputText").value;

    if (!isValidInput(inputText)) {
        alert("Texto inválido! Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.");
        return;
    }

    let outputText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").innerText = outputText;
}

// Função para copiar o texto resultante para a área de transferência
function copyToClipboard() {
    let outputText = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado para a área de transferência!");
    });
}

// Função para redimensionar automaticamente a área de texto conforme o conteúdo
function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

// Função para limpar o conteúdo do campo de texto
function clearText() {
    document.getElementById("inputText").value = '';
    document.getElementById("outputText").innerText = '';
    document.getElementById("inputText").style.height = '250px'; // Reseta a altura da textarea
    showMessages(); // Mostra as mensagens de instrução
}

// Função para ocultar mensagens informativas
function hideMessages() {
    document.getElementById("noMessage").style.display = 'none';
    document.getElementById("promptMessage").style.display = 'none';
}

// Função para mostrar mensagens informativas
function showMessages() {
    document.getElementById("noMessage").style.display = 'block';
    document.getElementById("promptMessage").style.display = 'block';
}
