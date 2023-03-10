/*
 * File: 3-get_ids_sum.js
 * Auth: John Chukwuma Agbo
 */

/**
 * getStudentsByLocation - Retrieves the sum of student ids.
 * @studentList: A list of students.
 * Return: The sum of all the student ids.
 */
export default function getStudentIdsSum(studentList) {
  return studentList.reduce((previous, current) => previous + current.id, 0);
}
