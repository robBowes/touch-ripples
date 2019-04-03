const canvas = document.querySelector("#sketch")
const canvasAttrs = canvas.getBoundingClientRect()
const HEIGHT = canvasAttrs.height
const WIDTH = canvasAttrs.width


function sketch(p5) {
    
    const engine = Matter.Engine.create()

    p5.setup = function() {
        p5.createCanvas(WIDTH, HEIGHT)
        p5.background(0)
        p5.frameRate(25)
        Matter.Engine.run(engine)
    }
    
    p5.draw = function() {
        p5.background(0)
    }
}

const p5Canvas = new p5(sketch, canvas)

window.p5Canvas = p5Canvas