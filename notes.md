# Notes

Just lerp the damn colors. For the bottom color, lerp from 0-0.5 between yellow-orange to bright red, then from there lerp from red to blue. Test out different gradients in the CSS console para ver cual se ve mejor.

One possible starting gradient:
#3e5680 to #f1603a

Another one, lighter:
#9ac0ff to #dc6031

# Todo

* Patterns for sun and moon ✔️
* Clouds ✔️
* Shooting stars ✔️
* Make shooting stars move as you scroll
* Get rid of requestAnimationFrame ✔️
* Shift sun/moon/clouds relative to mouse
* Finish Experience Section ✔️
* Finish Skills section ✔️
* Replace language icons
* Finish Contact section ✔️
* Make top links work ✔️
* Add very short about
* Add resume to site ✔️
* Slide in elems as you scroll
* Typgraphy
* Regen stars on window resize
* Try using rasters of Sun/Moon/comets instead
* Stars (ahem, the *celestial sphere*, if you will) rotate as you scroll maybe?

# Sections:

- Home
- Experience
- Skills
- Education
- Contact (about?)

# Trigonometric versions of the sun funcs

const getSunY = (p) => sunInitialY + sunDeltaY*Math.sin(p*(Math.PI/2))
const getSunX = (p) => sunInitialX + sunDeltaX*Math.cos(p*(-Math.PI/2))
