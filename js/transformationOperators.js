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

// const getData = (param) => {
//   const delayTime = Math.floor(Math.random() * 10000) + 1;
//   return of(
//     `received new data with params: ${param} and delay: ${delayTime}`
//   ).pipe(delay(param * 1000));
// };

// concatMap

// from([1, 2, 3, 4, 5])
//   .pipe(concatMap((v) => getData(v)))
//   .subscribe((res) => console.log(res));

// switchMap (bad work)
// from([1, 2, 3, 4, 5]).pipe(
//     switchMap((v) => getData(v))
// ).subscribe((res) => console.log(res));

//mergeMap
// from([1, 2, 3, 4, 5]).pipe(
//   mergeMap((v) => getData(v))
// ).subscribe((res) => console.log(res));

//map
// from([1, 2, 3, 4, 5]).pipe(
//   map((v) => getData(v))
// ).subscribe((res) => res.subscribe(res=>console.log(res)));

//switchMap
// const simulateHttp = (val, sec) => {
//     return of(val).pipe(
//         delay(sec)
//     );
// };


// const saveUser$ = simulateHttp("user saved", 2000);

// const httpResult$ = saveUser$.pipe(
//     tap(console.log),
//     switchMap((val) => simulateHttp("data reloaded", 3000))
// );

// httpResult$.subscribe(console.log, console.error, () =>
//   console.log("completed httpResult$")
// );
