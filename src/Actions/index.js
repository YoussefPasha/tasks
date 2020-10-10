export const SelectedSongs = (user) => {
  return {
    type: "DELETE_USER",
    payload: user,
  };
};

export const SelectedSongs = (logout) => {
  return {
    type: "LOG_OUT",
    payload: logout,
  };
};

export const SelectedSongs = (login) => {
  return {
    type: "LOG_IN",
    payload: login,
  };
};
