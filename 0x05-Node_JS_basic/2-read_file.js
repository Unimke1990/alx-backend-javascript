const fs = require('fs');

function countStudents(path) {
  try {
  // read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    // split the data, and remove blank lines
    const rows = data.split('\n').filter((line) => line.trim() !== '');

    const fieldCount = {};
    const fieldStudents = {};
    let totalStudents = 0;

    // split the row and then populate the fieldCount
    for (let i = 1; i < rows.length; i += 1) {
      const columns = rows[i].split(',');
      const firstName = columns[0];
      const field = columns[3];

      if (field in fieldCount) {
        fieldCount[field] += 1;
        fieldStudents[field].push(firstName);
      } else {
        fieldCount[field] = 1;
        fieldStudents[field] = [firstName];
      }
      totalStudents += 1;
    }
    console.log(`Number of students: ${totalStudents}`);
    for (const field in fieldCount) {
      if (field) {
        console.log(`Number of students in ${field}: ${fieldCount[field]}. List: ${fieldStudents[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
