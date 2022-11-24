function startClassification() 
{
    navigator.mediaDevices.getUserMedia({audio: true});
        classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pxudX2Xeo/model.json', modelReady);    
}

function modelReady() {
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        random_nober_r =Math.floor(Math.random() * 255) +1;
        random_nober_g =Math.floor(Math.random() * 255) +1;
        random_nober_b =Math.floor(Math.random() * 255) +1;
    
        document.getElementById("results_label").innerHTML = 'Escucho - '+results[0].label;
        document.getElementById("results_confidence").innerHTML = 'Precisión - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("results_label").style.color = "rgb("+random_nober_r+","+random_nober_g+","+random_nober_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_nober_r+","+random_nober_g+","+random_nober_b+")";
        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2= document.getElementById('alien3');
        img3= document.getElementById('alien4');
    
        if (results[0].label == "sonido de flauta") {
            img.classList.remove("girar");
            void img.offsetWidth;
            img.classList.add("girar");
            
            img1.src = 'alin1.webp';
            img2.src = 'alin2.webp';
            img3.src = 'alin3.png';   
        }else if (results[0].label == "sonido de reloj") {
            img.src = 'alin tierno.png';

            img1.classList.remove("girar");
            void img1.offsetWidth;
            img1.classList.add("girar");
            
            img2.src = 'alin2.webp';
            img3.src = 'alin3.png';
        }else if (results[0].label == "sonido de vaca") {
            img.src = 'aliens-01.png';
img1.src = 'alin1.webp';

img2.classList.remove("girar");
void img2.offsetWidth;
img2.classList.add("girar");

img3.src = 'alin3.png';
        }else{
            img.src = 'alin tierno.png';
            img1.src = 'alin1.webp';
            img2.src = 'alin2.webp';

            img3.classList.remove("girar");
            void img3.offsetWidth;
            img3.classList.add("girar");
        }    
    }
}