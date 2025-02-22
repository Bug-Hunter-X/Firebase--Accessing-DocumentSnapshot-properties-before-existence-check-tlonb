# Firebase DocumentSnapshot Access Before Existence Check

This repository demonstrates a common error when working with Firebase's DocumentSnapshot objects in JavaScript. The error arises when attempting to access properties of a snapshot before verifying its existence using `snapshot.exists`.  The asynchronous nature of Firebase operations often leads to unexpected errors due to accessing undefined properties.

## Bug Description:
The code attempts to read data from a Firebase document without first checking if the document exists. This can result in undefined errors or unexpected behavior. The asynchronous nature of the operation makes it difficult to track down the source of these issues.

## Solution:
The solution involves always checking `snapshot.exists` before attempting to access any properties of the DocumentSnapshot.

## How to reproduce the bug:
1. Clone the repository.
2. Run `npm install` to install required dependencies.
3. Run `node bug.js` to observe the error.
4. Run `node bugSolution.js` to see the corrected code in action.