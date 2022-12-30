const attack = (createureName, damage, isCritical) => {
  return `${createureName} dealt ${isCritical ? damage * 2 : damage} damage!`
}

module.exports = attack;