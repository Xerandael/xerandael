// https://github.com/Xerandael/medieval-future/wiki/peelable-functions
// TODO: Implement first special ability "Deflect: Spend a die from your die pool. With a melee weapon, strike at another unit's weapon, lowering their defense and aim till next turn by your die roll."
// TODO: This effect is applied and removed via a peelable function:
//   - on the player unit's next turn, (peelable onTurnStart ?)
//   - on the player unit's taking damage, (peelable onDamaged ?)

// TODO: if the player can update other units while not on its own turn,
// then maybe we need a `turnEnd` event.  Not if structuring the JSON intelligently.
// TODO: if the player can update other units while not on its own turn,
// then maybe we need to await acknowledgements from every player before
// taking any further actions, lest there be race conditions.
