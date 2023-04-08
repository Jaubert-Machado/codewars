const str = "8 j 8   mBliB8g  imjB8B8  jl  B";

function noSpace(str: string): string {
  return str.replaceAll(" ", "");
}

console.log(noSpace(str));
