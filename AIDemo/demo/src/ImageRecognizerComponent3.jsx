import React, { useRef } from 'react';
import exampleImage from './assets/u3.jpg';
import * as tf from '@tensorflow/tfjs';

let model = null;
tf.loadLayersModel('/model.json').then(loadedModel => {
    model = loadedModel;
}).catch(error => console.error('Failed to load model', error));

function ImageRecognizerComponent3() {
    const imageRef = useRef(null);

    async function recognizeImage() {
        // 
        if (!model) {
            console.log('Model not loaded yet');
            return;
        }

        const tensor = tf.browser.fromPixels(imageRef.current)
            .resizeNearestNeighbor([224, 224])
            .toFloat()
            .expandDims(0);

        try {
            const prediction = await model.predict(tensor);
            const probabilities = await prediction.data();
            // Get the class index with the highest probability
            const predictedIndex = prediction.argMax(1).dataSync()[0];
            document.getElementById('i3').value = predictedIndex;
           
        } catch (error) {
            console.error('Error during prediction', error);
        }
    }

    return (
        <div className="image-recognizer-container">
            <h5>Ukendt billede #3</h5>
            <img ref={imageRef} src={exampleImage} width="224" height="224" /> 
            <button onClick={recognizeImage}>Tjek billede</button> 
            <input id="i3" type="text"  readOnly />
        </div>
    );
}

export default ImageRecognizerComponent3;
