const sharp = require('sharp');

const parsedCrop = {
    x: 113,
    y: 150.59375,
    width: 373,
    height: 124.33333333333333,
    unit: 'px',
    aspect: 3
}

console.log({
    width: Math.floor(parsedCrop.width),
    height: Math.floor(parsedCrop.height),
    left: Math.floor(parsedCrop.y),
    top: Math.floor(parsedCrop.x),
})

sharp('Cent.png')
    .extract({
        width: Math.floor(parsedCrop.width),
        height: Math.floor(parsedCrop.height),
        left: Math.floor(parsedCrop.x),
        top: Math.floor(parsedCrop.y),
    })
    .toFile('out.jpg')