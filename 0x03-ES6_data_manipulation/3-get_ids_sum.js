import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) {
    return ([]);
  }
  const idArr = getListStudentIds(arr);
  return (idArr.reduce(((sum, currentValue) => sum + currentValue), 0));
}
