function displayNames(names, moreNames) {
  for (let value of names) {
    console.log(value);
  }
  for (let value of moreNames) {
    console.log(value);
  }
}

O(a + b); // a -> names.length / b => moreNames.length
// if we have 2 loops, we add them

function displayStudents(classrooms) {
  for (let classroom of classrooms) {
    for (let student of classroom) {
      console.log(student);
    }
  }
}

O(n ^ 2); // (n squared)
// this is when we are looping over an array && the arrays inside this array

displayNames(array1, array2);
displayStudents(array3);

O(a + b) + O(n ^ 2);
// RULE 1: We add the big Os

function displayNames(names) {
  for (let value of names) {
    console.log(value);
  }
  for (let value of names) {
    console.log(value);
  }
}

O(n); // Was 2N but we ditch the constants, so it becomes N // N is the size of the array

function displayStudents(classrooms, moreClassrooms) {
  for (let classroom of classrooms) {
    for (let student of moreClassrooms) {
      console.log(student);
    }
  }
}

O(ab); // We multiply the array lengths when we're looping 2 different arrays inside each other

function example() {
  for (let someVar of listA) {
    for (let value of someVar) {
      console.log(value);
    }
  }

  for (let value of listB) {
    console.log(value);
  }
}

O(n ^ 2);
