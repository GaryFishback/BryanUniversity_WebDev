export function addOne(tvShow) {
  return {
    type: "ADD_ONE",
    data: tvShow
  };
}

export function deleteOne(id) {
  return {
    type: "DELETE_ONE",
    data: id
  };
}
export function countingTvShows() {
  return {
    type: "COUNTER"
  };
}
export function loading(data) {
  return {
    type: "LOADING",
    data: data
  };
}
