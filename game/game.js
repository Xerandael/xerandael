window.onload = () => {
  const mapElement = document.getElementById('map')
  const map = {} // 2-dimensional sparse mapping of integer points to optional entities.
  map.get = ({at: {x, y}}) => map[x + ',' + y]
  const grid_size = 50 // TODO: CSS variable?

  const padding = grid_size / 6 // TODO: probably temporary?  Find more idiomatic CSS for this.

  const place = ({unit, at: {x, y}}) => {
    element = document.createElement('img')
    // TODO: colorize image by team http://stackoverflow.com/questions/22252472
    element.setAttribute('src', 'images/knight.svg')
    mapElement.appendChild(element)
    unit.move = ({to: {x, y}}) => {
      delete map[unit.coordinates] // initializes as undefined, but this is ok
      unit.coordinates = x + ',' + y
      map[unit.coordinates] = unit
      Object.assign(element.style, {
        position: 'absolute',
        top:      (y*grid_size) + padding+'px',
        left:     (x*grid_size) + padding+'px',
        height:   (grid_size)   +         'px',
        width:    (grid_size)   +         'px',
      })
      // TODO: network event https://github.com/Xerandael/medieval-future/issues/7
    }
    unit.remove = () => {
      delete map[unit.coordinates]
      element.remove()
    }
    unit.move({to: {x, y}})
  }
  // TODO https://github.com/Xerandael/medieval-future/issues/7
  // the network event `{from: undefined, to: {x, y}}` can be interpreted as placement, allowing consolidation of placement and movement logic.

  // Each player directly stores the data pertaining to their unit as a global.
  // All other players will have this data in their `map` but will have their own units as globals just like we do.
  const unit = {
    defense:       2,
    health:        10,
    movements:     Array.from({ length: 11 }, (_, i) => Array.from({ length: 11 }, (_, j) => [i-5, j-5])), // standard movement square radius of 5 squares
    concentration: null,
    // TODO: more like cards than dice.  Draw 2 per turn.  Unused cards go back into the draw pile at random.
    // Used cards go into a discard pile.  Shuffle the discard pile into the draw pile on running out.
    dice:          [2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5, 5, 7, 7],
    team:          0, // TODO
  }
  // TODO: actual abilities.  Define in separate file because of how many there'll be.  Top-level consts are shared between scripts.  Run this, then that.
  // https://github.com/Xerandael/medieval-future/issues/2
  unit.abilities = [
    {name: 'demo ability VAMPIRIC CLOUD', do: () => {
      unit.health += player.movements.map(point => map.get({at: point})).select(_=>_).select(({health})=>health).map(unit => unit.health /= 2).sum()
    }}
  ]

  // TODO: hardcoded for now
  const mapName = 'example'
  fetch(`maps/${mapName}.json`).then(file => file.json()).then(initialObjects => {
    console.log(initialObjects)
  })

  // TODO: all temp
  place({unit, at: {x: 1, y: 2}}) // TODO: define actual unit placements in map definition https://github.com/Xerandael/medieval-future/issues/5
  window.map = map
  window.unit = unit
  map.get({at: {x: 1, y: 2}}).move({to: {x: 3, y: 3}})

  document.onkeydown = ({keyCode}) => {
    unit.abilities[Number(keyCode[5])]
  }

  // TODO: https://github.com/Xerandael/medieval-future/issues/4
  mapElement.onclick = ({clientX, clientY}) => {
    const x = (clientX / grid_size) >> 0
    const y = (clientY / grid_size) >> 0
    if(!map.get({at: {x, y}})) {
      unit.move({to: {x, y}})
    }
  }
}
