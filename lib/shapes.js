class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        throw new Error('render() must be implemented by child classes');
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        const points = '60, 110 65, 120 70, 115';
        return `<polygon points="${points}" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        const radius = 20;
        const centerX = 25;
        const centerY = 75;
        return `<circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${this.color}" />`;
    }
    
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        const width = 30;
        const height = 30;
        const X = 30;
        const Y = 10;
        return `<square x="${X}" y="${Y}" width="${width}" height="${height}" fill="${this.color}" />`;
    }
}

module.exports = {Triangle, Circle, Square};