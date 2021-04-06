'use strict'
console.log('Задание 2')

const inventory = {
  items: ['Knife', 'Gas mask'],
}

const remove = function (itemName) {
  console.log(`Removing ${itemName} from inventory`)
  this.items = this.items.filter((item) => item !== itemName)
}

const add = function (itemName) {
  console.log(`Adding ${itemName} to inventory`)
  this.items.push(itemName)
}

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`)
  action(itemName)
}

invokeInventoryAction('Medkit', add.bind(inventory))
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items) // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', remove.bind(inventory))
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items) // ['Knife', 'Medkit']
