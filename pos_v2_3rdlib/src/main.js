function printInventory(tags) {

  var calculator = new Calculator();
  var scanner = new Scanner();
  _.forEach(tags, function(tag) {
    calculator.addCartItem(scanner.getCartItem(tag));
  });

  var inventory = new Inventory(calculator);
  console.log(inventory.toString());
}
