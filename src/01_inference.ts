let count: number = 0; //ts sees number
const site  = "haruto2804" // ts sees string
const scores = [9,8,3];

export function add (a: number,b: number): number {
  return a+b;
}

let maybe: string | number;
maybe =  Math.random () > 0.5 ? "Haruto" : 100;