# Notes

One possible starting gradient:
#3e5680 to #f1603a

Another one, lighter:
#9ac0ff to #dc6031

# Todo

* Patterns for sun and moon ✔️
* Clouds ✔️
* Shooting stars ✔️
* Get rid of requestAnimationFrame ✔️
* Finish Experience Section ✔️
* Finish Skills section ✔️
* Replace language icons
* Finish Contact section ✔️
* Make top links work ✔️
* Add resume to site ✔️
* Slide in elems as you scroll ✔️

## Must do:
* Webpack and deploy ✔️
* Compress SVGs ✔️
* Add backend stuff to resume
* Regen stars on window resize ✔️
* Fontsize / resolution testing
* Add warning for non-Chrome users

## Extras:
* Typgraphy
* Shift sun/moon/clouds relative to mouse
* Stars (ahem, the *celestial sphere*, if you will) rotate as you scroll maybe?
* Try using canvas to increase performance

# Sections:

- Home
- Experience
- Skills
- Education
- Contact (about?)

# Trigonometric versions of the sun funcs

const getSunY = (p) => sunInitialY + sunDeltaY*Math.sin(p*(Math.PI/2))
const getSunX = (p) => sunInitialX + sunDeltaX*Math.cos(p*(-Math.PI/2))

Heroku DNS name:  avian-badger-ntj2vtxw5ukbvc7eoxxghbyl.herokudns.com.