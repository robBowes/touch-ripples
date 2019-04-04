export default class Ripple {
  constructor(creationTime, location) {
    this.outline = 255
    this.creationTime = creationTime
    this.location = location
    // Use a sine wave to create a color based on the time the ripple was created
    const wave = ((Math.sin((creationTime % 1000) * 0.003) + 1)/2) * 150
    this.color = {
      r: wave,
      g: wave,
      b: 255,
    }
  }
  
  static update(ripple, time) {
    const size = Math.floor((time - ripple.creationTime) / 10)
    const fade = (initial, x) => Math.max(initial - x, 0)
    const opacity = fade(ripple.outline, size)
    return { size, opacity, ripple}
  }

  static render(p5, obj) {
    const {size, opacity} = obj
    const {color, location} = obj.ripple
    p5.stroke(color.r, color.g, color.b, opacity)
    p5.fill(0, 0, 0, 0)
    p5.ellipse(location.x, location.y, size, size)
  }

  // Determines if a ripple still exists
  exists(time) {
    return time - this.creationTime < 3000
  }
}
