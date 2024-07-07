// Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var placesToVisit = ["Tokyo", "Pakistan", "America", "China", "Japan"];
// • Print your array in its original order.
console.log("Original order:", placesToVisit);
// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
// • Show that your array is still in its original order by printing it.
console.log("Original order after sorting:", placesToVisit);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse);
// • Show that your array is still in its original order by printing it again.
console.log("Original order after reverse sorting:", placesToVisit);
// • Reverse the order of your list. Print the array to show that its order has changed.
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);
