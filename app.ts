const obj: Record<string, number> = {
  a: 1,
  b: 2,
};

type RecordType = string | number | symbol;

function swapMy<T1 extends RecordType, T2 extends RecordType>(
  obj: Record<T1, T2>
): Record<T2, T1> {
  const swappedObj = {} as Record<T2, T1>;
  for (const key in obj) {
    swappedObj[obj[key]] = key;
  }

  return swappedObj;
}

console.log(swapMy(obj));
