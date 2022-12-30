const attack = (createureName, damage, isCritical) => `${createureName} dealt ${isCritical ? damage * 2 : damage} damage!`;

module.exports = attack;
