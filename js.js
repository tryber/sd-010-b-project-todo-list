let listItems = [{
    item: 'item um',
    class: 'new-item-list'
  },
  {
    item: 'item dois',
    class: 'new-item-list'
  },
  {
    item: 'item tres',
    class: 'new-item-list'
  },
  {
    item: 'item quatro',
    class: 'commpleted'
  },
  {
    item: 'item cinco',
    class: 'new-item-list'
  }
]

for (let i = 0; i < listItems.length; i++) {
console.log(listItems[i].item);
console.log(listItems[i].class);
}