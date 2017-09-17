function playSlots(quarters) {
    var w = 0;
    var total = 0;


    while (quarters > 0) {
        var x = Math.floor((Math.random() * 100) + 1);
        var y = Math.floor((Math.random() * 100) + 1);

        if (x == y) {
            w += Math.floor((Math.random() * 50) + 51);
            total += (w + quarters);
            console.log("You won " + w + " quarters! You now have " + total + " quarters total.");
            return w + quarters;
        }
        quarters--;
    }
    return 0;
}

playSlots(100);