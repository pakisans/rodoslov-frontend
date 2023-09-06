export const compareDatesAsc = (a, b) => {
    const dateA = new Date(a.dateOfBirth);
    const dateB = new Date(b.dateOfBirth);
  
    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  }