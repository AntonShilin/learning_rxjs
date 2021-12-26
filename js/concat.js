// const { of, timer, concat, from, interval } = rxjs;
// const { mapTo, delay, map, tap } = rxjs.operators;

//concat
// const getPostOne$ = of(1, 2, 3).pipe(
//   delay(2000),
//   map((v) => v * 2),
//   tap((v) => console.log(v)),
//   mapTo("true")
// );
// const getPostTwo$ = of(4, 5, 6);

// const result = concat(getPostOne$, getPostTwo$);
// result.subscribe((res) => console.log(res));

// const getPostOne$ = from([1, 2, 3]);
// const getPostTwo$ = from([4, 5, 6]).pipe(delay(1500));

// const result = concat(getPostOne$, getPostTwo$);
// result.subscribe((res) => console.log(res));

// doesnt work with timer and interval
// const getPostOne$ = timer(0, 1000).pipe(mapTo('1'));
// const getPostTwo$ = timer(1000, 1000).pipe(mapTo('2'));

// const result = concat(getPostOne$, getPostTwo$);
// result.subscribe((res) => console.log(res));

// const getPostOne$ = interval(1000).pipe(mapTo('1'));
// const getPostTwo$ = interval(1500).pipe(mapTo('2'));

// const result = concat(getPostOne$, getPostTwo$);
// result.subscribe((res) => console.log(res));
