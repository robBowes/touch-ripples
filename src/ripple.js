const fade = (initial, x) => Math.max(initial - x, 0)

export default class Ripple {
  constructor(creationTime, location) {
    this.outline = 255
    this.creationTime = creationTime
    this.location = location
    this.exists = true
  }

  static update(ripple, time) {
    const size = Math.floor((time - ripple.creationTime) / 10)
    const outlineColor = fade(ripple.outline, size)
    return {size, outlineColor, location: ripple.location}
  }

  static render(p5, ripple) {
    p5.stroke(ripple.outlineColor)
    p5.fill(0,0,0,0)
    p5.ellipse(ripple.location.x,ripple.location.y,ripple.size,ripple.size)
  }
}