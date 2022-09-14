/**
 * "Insert a row into the database and return the row's ID."
 *
 * The function is defined in JavaScript, but it could be defined in any language. The important thing
 * is that it's defined in a language that can be executed by the server
 * @param row - The row object that was passed to the insertRow function.
 * @returns A random number between 0 and 1000
 */
export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

/**
 * Delete the row with the given id.
 * @param rowId - The id of the row to delete.
 * @returns Nothing.
 */
export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

/**
 * Update the row with the given rowId with the given row.
 * @param rowId - The id of the row to update.
 * @param row - The row object that is being updated.
 * @returns The rowId
 */
export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}
