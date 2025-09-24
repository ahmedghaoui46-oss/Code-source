function OccurenceNum() {
    let list = ["c1", "c2", "c1", "c3", "c4", "c4", "c1", "c3", "c1"];

    let nameC = prompt("Enter the code (ex: c1, c2...):");

    if (!nameC) {
        console.log("You did not enter a code.");
        return;
    }

    let counter = 0;

    for (let item of list) {
        if (item === nameC) {
            counter++;
        }
    }

    if (counter > 0) {
        console.log(`The number of ${nameC} is ${counter}`);
    } else {
        console.log(`${nameC} is not in the list`);
    }
}

OccurenceNum();
