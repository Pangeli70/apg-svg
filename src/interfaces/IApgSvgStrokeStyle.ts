/** -----------------------------------------------------------------------
 * @module [SVG]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.0.1 [APG 2017/10/27]
 * @version 0.5.0 [APG 2018/11/25]
 * @version 0.5.1 [APG 2021/02/21]
 * @version 0.8.0 [APG 2022/04/03] Porting to Deno
 * @version 0.9.2 [APG 2022/11/24] Github beta
 * @version 0.9.3 [APG 2022/12/27] Cad integration
 * @version 0.9.5 [APG 2023/02/26] Added opacity
 * -----------------------------------------------------------------------
 */

/** Definition of the Stroke attibutes */
export interface IApgSvgStrokeStyle {
  color: string;
  width: number;
  opacity?: number;
  dashPattern?:number[];
  dashOffset?:number;
}
