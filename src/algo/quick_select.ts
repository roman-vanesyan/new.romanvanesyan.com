function swap(arr: number[], i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

export function quick_select(arr: number[], k: number): number {
  return select(arr, 0, arr.length - 1, k - 1);
}

function select(arr: number[], lo: number, hi: number, k: number): number {
  if (lo === hi) {
    return arr[lo];
  }

  const pivot = partition(arr, lo, hi);
  if (pivot >= k) {
    return select(arr, lo, pivot, k);
  } else {
    return select(arr, pivot + 1, hi, k);
  }
}

function partition(arr: number[], lo: number, hi: number): number {
  const p = lo;
  let [i, j] = [lo - 1, hi + 1];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (arr[++i] < arr[p]);
    while (arr[--j] > arr[p]);

    if (i >= j) {
      return j;
    }

    swap(arr, i, j);
  }
}
