class HolbertonCourse {
  constructor(name, length, students){
    this._name = typeof name === 'string'?name:null;
    this._length = typeof length === 'number'?length:null;
    this._students = Array.isArray(students)?students:null;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      console.log("Name should be a string.");
    }
  }
  get length() {
    return this._length;
  }
  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      console.log('Length should be a number');
    }
  }
  get students() {
    return this._students;
  }
  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      console.log('newStudents should be an array');
    }
  }
}
