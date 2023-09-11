export default function getStudentsIddSum(getListStudents) {
	return getListStudents.reduce((accumulator, x) => accumulator + x.id, 0);
}
