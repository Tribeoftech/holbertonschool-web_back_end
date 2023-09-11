export default function getListStudentIds(getListStudents) {
	if (!(getListStudents instanceof Array)) {
	  return [];
	}
	const myArray = getList Students.map((x) => x.id);
	return myArray;
}
