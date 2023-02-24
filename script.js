  function calculateMinCost() {
    const ropeLengths = document.getElementById("rope-lengths").value.split(",");
    for (let i = 0; i < ropeLengths.length; i++) {
      ropeLengths[i] = parseInt(ropeLengths[i]);
    }
    ropeLengths.sort((a, b) => a - b);
    let cost = 0;
    while (ropeLengths.length > 1) {
      const first = ropeLengths.shift();
      const second = ropeLengths.shift();
      const sum = first + second;
      cost += sum;
      ropeLengths.push(sum);
      ropeLengths.sort((a, b) => a - b);
    }
    document.getElementById("result").innerHTML = cost;
  }