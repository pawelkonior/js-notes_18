# JS Notes

## Array methods
1. [].forEach((item, idx, arr) => {}) // undefined
2. [].map((item, idx, arr) => {}) // new []
3. [].filter((item, idx, arr) => {}) // new []
4. [].reduce((acc, ce, idx, arr) => {}, ?initValue) // aggregated data
5. [].includes(value) // true/false
6. [].indexOf(value) // index or -1
7. [].some((item, idx, arr) => {}) // true/false
8. [].every((item, idx, arr) => {}) // true/false
9. [].at(negative or positive index) // value
10. [].flat(?deps) // new []
11. [].find((item, idx, arr) => {}) // item | undefined
12. [].pop() // remove last item
13. [].push(value) // add last item
14. [].shift() // remove first item
15. [].unshift() // add first item
16. [].slice(start, stop) // new []
17. [].splice(start, deleteCount, []) // 
18. [].join(separator) // string
19. [].reverse() // reverse
20. [].sort((a, b) => 1/0/-1) // sort
21. Array.isArray(obj) // true/false