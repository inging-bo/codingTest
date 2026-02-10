function solution(scoville, K) {
    
    let heap = []
    
    for (let i = 0; i < scoville.length; i++) {
        minHeap(scoville[i])
    }
    
    let count = 0
    for (let i = 0; i < scoville.length; i++) {
        let min = popHeap()
        if (min < K) {
            count++
            let second = popHeap()
            minHeap(min + second * 2)
        } else {
            return count
        }
    }
    
    return -1
    
    function popHeap() {
        
        let head = heap[0] 
        if (heap.length <= 1) return heap.pop()
        
        heap[0] = heap.pop()
        let curIdx = 0
        while (curIdx < heap.length) {
            let leftIdx = curIdx * 2 + 1
            let rightIdx = curIdx * 2 + 2   
            let minIdx
            if (heap[rightIdx]) {
                minIdx = heap[leftIdx] > heap[rightIdx] ? rightIdx : leftIdx
            } else {
                minIdx = leftIdx
            }
            
            if (heap[curIdx] > heap[minIdx]) {
                [heap[curIdx] , heap[minIdx]] = [heap[minIdx] , heap[curIdx]]
                curIdx = minIdx        
            } else {
                break
            }
        }
        return head
    }
    
       
    function minHeap(num) {
        heap.push(num)
        let curIdx = heap.length - 1;
        
        while (curIdx > 0) {
            let parentIdx = Math.floor((curIdx - 1) / 2)
            
            if (heap[parentIdx] > heap[curIdx]) {
                [heap[parentIdx] , heap[curIdx]] = [heap[curIdx] , heap[parentIdx]]
                curIdx = parentIdx
            } else {
                break
            }
            
        }
    }
       
}