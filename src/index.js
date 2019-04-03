import Ripple from './ripple';

const canvas = document.querySelector("#sketch")
const canvasAttrs = canvas.getBoundingClientRect()
const HEIGHT = canvasAttrs.height
const WIDTH = canvasAttrs.width


function sketch(p5) {
    const engine = Matter.Engine.create()
    let ripples = []
    p5.setup = function() {
        p5.createCanvas(WIDTH, HEIGHT)
        p5.background(0)
        p5.frameRate(25)
        Matter.Engine.run(engine)
      }
      
    p5.draw = function() {
      p5.background(0)
      // Check if any ripples don't exist, we don't need to check every frame, so check every 4s
      if (p5.frameCount % 100) {
        ripples = ripples.filter(ripple => ripple.exists)
      }
      ripples.map(ripple => Ripple.update(ripple, p5.millis())).forEach(ripple => Ripple.render(p5, ripple))
    }

    p5.mousePressed = function() {
      ripples.push(new Ripple(p5.millis(), {x: p5.mouseX, y: p5.mouseY}))
    }
}

const p5Canvas = new p5(sketch, canvas)

window.p5Canvas = p5Canvas