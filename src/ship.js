export function Ship(length) {
  let hits = 0;

    function getLength() {
      return length;
    }

    function isSunk() {
      return hits >= length;
    }

    function hit() {
      if (!isSunk()) {
        hits++;
      };
    }

  
  return{
    getLength,
    isSunk,
    hit,
    }
  };


