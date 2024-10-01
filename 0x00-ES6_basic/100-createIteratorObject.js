export default function createIteratorObject(report) {
  const employeeNames = [];
  for (const value of Object.values(report.allEmployees)) {
    for (const name of value) {
      employeeNames.push(name);
    }
  }
  return employeeNames;
}
