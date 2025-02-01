// Type.
import { AlgebraicSymbol, ArithmeticSymbol, GeometrySymbol, RelationalSymbol, SetTheorySymbol } from ".";
/**
 * @description The type of math symbols.
 * @export
 */
export type MathSymbol = 
  | AlgebraicSymbol
  | ArithmeticSymbol
  | GeometrySymbol
  | RelationalSymbol
  | SetTheorySymbol
;
