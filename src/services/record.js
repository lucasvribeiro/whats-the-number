/**
 * @summary Get and return the current user's record from localStorage.
 */
export const getRecordFromLocalStorage = () => {
  const recordLocalStorage = localStorage.getItem("record");
  return recordLocalStorage;
};

/**
 * @summary Set the new user's record to localStorage.
 * @param {number} newRecord New user's record.
 */
export const setRecordToLocalStorage = (newRecord) => {
  localStorage.setItem("record", newRecord);
};
