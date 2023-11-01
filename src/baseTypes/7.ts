/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  monday = 1,
  tuesday = 1,
  wednesday = 1,
  thursday = 1,
  friday = 1,
  saturday = 0,
  sunday= 0,
}

function isWeekend(day:Week):boolean {
  if (day === 1) {
    return true
  }
  return false
}

