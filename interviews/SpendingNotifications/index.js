// first attempt: sorts every iteration (bad for efficiency)

function activityNotifications(expenditure, d) {
  // Write your code here
  // 1. check if expenditure.length >= d
  const middle = Math.floor(d / 2)
  let messagesSent = 0
  
  if (expenditure.length < d) {
      return 0
  }
  
  for (let i = d - 1; i < expenditure.length; i++) {
      // 2. check median of last d days
      const pastSpending = expenditure.slice(i - d, i - 1).sort((a, b) => a - b)
      // console.log({pastSpending})
      const median = d % 2 === 1
          ? pastSpending[middle] 
          : (pastSpending[middle] + pastSpending[middle - 1]) / 2
      // 3. compare median against newest value
      if (median * 2 <= expenditure[i]) {
          // send message
          messagesSent++;
      }
  }
  
  return messagesSent
}

// Refactored to use frequency map

function activityNotifications(expenditure, d) {
  const MAX_EXPENDITURE = 200
  let notifications = 0
  const windowFreqs = new Array(MAX_EXPENDITURE + 1).fill(0)
  
  // set spending window for first D days
  for (let i = 0; i < d; i++) {
      windowFreqs[expenditure[i]]++
  }
  
  for (let i = d; i < expenditure.length; i++) {
      const median = getMedian(windowFreqs, d)
      
      if (expenditure[i] >= median * 2) {
          notifications++
      }
      
      // move the window
      windowFreqs[expenditure[i - d]]--
      windowFreqs[expenditure[i]]++
  }
  
  return notifications
}

function getMedian(count, d) {
  let total = 0
  for (let i = 0; i < count.length; i++) {
      total += count[i]
      if (total * 2 > d) {
          return i
      } else if (total * 2 === d) {
          // find next highest non-zero
          for (let j = i + 1; j < count.length; j++) {
              if (count[j] > 0) {
                  return (j + i) / 2
              }
          }
      }
  }
  return 0
}
