function generateSVG(userInput) {
    const {text, textColor, shape, shapeColor} = userInput;
    let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;
    switch (shape) {
        case 'circle':
            svgContent += `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            svgContent += `<polygon points="100,50 200,50 150,150" fill="${shapeColor}" />`;
            break;
        case 'square':
            svgContent += `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
            break;
        default:
            throw new Error(`Shape not supported: ${shape}`);         
    }
    svgContent += `<text x="150" y="100" fill="${textColor}" text-anchor="middle">${text}</text>`;
    svgContent += `</svg>`;
    return svgContent;
}
module.exports = generateSVG;