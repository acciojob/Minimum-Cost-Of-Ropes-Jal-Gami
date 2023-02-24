function minCostToConnectRopes() {
  // Get input from user
  const ropeLengthsInput = document.getElementById('rope-lengths');
  const ropeLengths = ropeLengthsInput.value.split(',').map(Number);
  
  // Create a min-heap of rope lengths
  const minHeap = new MinHeap(ropeLengths);
  
  // Keep track of total cost
  let totalCost = 0;
  
  // Connect ropes until there is only one left in the heap
  while (minHeap.size() > 1) {
    const rope1 = minHeap.extractMin();
    const rope2 = minHeap.extractMin();
    const newRope = rope1 + rope2;
    totalCost += newRope;
    minHeap.insert(newRope);
  }
  
  // Display the result
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `The minimum cost to connect the ropes is: ${totalCost}`;
}

// Define a MinHeap class
class MinHeap {
  constructor(arr = []) {
    this.heap = [];
    arr.forEach(this.insert.bind(this));
  }
  
  size() {
    return this.heap.length;
  }
  
  isEmpty() {
    return this.size() === 0;
  }
  
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  
  leftChild(i) {
    return 2 * i + 1;
  }
  
  rightChild(i) {
    return 2 * i + 2;
  }
  
  insert(num) {
    this.heap.push(num);
    this.heapifyUp(this.size() - 1);
  }
  
  heapifyUp(i) {
    while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }
  
  extractMin() {
    if (this.isEmpty()) {
      throw new Error('Heap is empty');
    }
    const min = this.heap[0];
    const last = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }
    return min;
  }
  
  heapifyDown(i) {
    while (this.leftChild(i) < this.size()) {
      let j = this.leftChild(i);
      if (this.rightChild(i) < this.size() && this.heap[this.rightChild(i)] < this.heap[j]) {
        j = this.rightChild(i);
      }
      if (this.heap[i] < this.heap[j]) {
        break;
      }
      this.swap(i, j);
      i = j;
    }
  }
  
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
