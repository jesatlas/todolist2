export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Async Call
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Net',
        authorLastName: 'Ninja',
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
  };
};
