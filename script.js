// Carrega o modelo MobileNet
let classifier;

// Inicia o carregamento do MobileNet quando a página for carregada
window.onload = () => {
    classifier = ml5.imageClassifier('MobileNet', modelReady);
};

// Função chamada quando o modelo é carregado
function modelReady() {
    console.log('Modelo MobileNet carregado!');

    // Identificar todas as imagens na página após o modelo ser carregado
    const items = document.querySelectorAll('li');
    items.forEach(item => {
        const imgElement = item.querySelector('img');
        const resultElement = item.querySelector('.app-identification-result');
        identifyImage(imgElement, resultElement);
    });
}

// Função para identificar a imagem e mostrar o resultado
function identifyImage(imgElement, resultElement) {
    classifier.classify(imgElement, (err, results) => {
        if (err) {
            console.error(err);
            resultElement.textContent = "Erro na identificação";
            return;
        }
        resultElement.textContent = results[0].label + " - " + (results[0].confidence * 100).toFixed(2) + "% certeza";
    });
}