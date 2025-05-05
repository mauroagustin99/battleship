export function Ship(length) {
  let hits = 0;

  return {
    length,

    isSunk() {
      return hits >= this.length;
    },

    hit() {
      if (!this.isSunk()) {
        hits++;
      }
    }
  };
}

