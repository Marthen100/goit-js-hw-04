function isEnoughCapacity(products, containerSize) {
    const totalProducts = Object.values(products).reduce((acc, item) => acc + item, 0);
    return totalProducts <= containerSize;
  }
  
  const task1ResultsDiv = document.getElementById('task-1-results');
  
  const result1 = isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8); // true
  const result2 = isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12); // false
  const result3 = isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14); // true
  const result4 = isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7); // false
  
  task1ResultsDiv.innerHTML += `<p>${result1}</p>`;
  task1ResultsDiv.innerHTML += `<p>${result2}</p>`;
  task1ResultsDiv.innerHTML += `<p>${result3}</p>`;
  task1ResultsDiv.innerHTML += `<p>${result4}</p>`;
  