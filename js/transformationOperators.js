const { from, interval, fromEvent, pipe, of } = rxjs;
const {
  map,
  scan,
  tap,
  delay,
  switchAll,
  switchMap,
  mergeAll,
  mergeMap,
  concatMap,
} = rxjs.operators;

const getData = (param) => {
  const delayTime = Math.floor(Math.random() * 10000) + 1;
  return of(
    `received new data with params: ${param} and delay: ${delayTime}`
  ).pipe(delay(param * 1000));
};


// from([1, 2, 3, 4, 5])
//   .pipe(concatMap((v) => getData(v)))
//   .subscribe((res) => console.log(res));

// from([1, 2, 3, 4, 5]).pipe(
//     switchMap((v) => getData(v))
// ).subscribe((res) => console.log(res));

// from([1, 2, 3, 4, 5]).pipe(
//   mergeMap((v) => getData(v))
// ).subscribe((res) => console.log(res));

// from([1, 2, 3, 4, 5]).pipe(
//   map((v) => getData(v))
// ).subscribe((res) => res.subscribe(res=>console.log(res)));