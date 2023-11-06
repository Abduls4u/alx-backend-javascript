export default function updateStudentGradeByCity(students, city, newGrade) {
  return (students
    .filter((student) => student.location === city)
    .map((student) => {
      const updatedGraded = newGrade.find((grade) => grade.studentId === student.id);
      const finalGrade = updatedGraded ? updatedGraded.grade : 'N/A';
      return ({
        ...student,
        grade: finalGrade,
      });
    })
  );
}
