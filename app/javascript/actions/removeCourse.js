export const REMOVE_COURSE = 'REMOVE_COURSE';

export const removeCourse = (course) => ({
  type: REMOVE_COURSE,
  payload: course
});