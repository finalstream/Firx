export default class ArrayUtils {
  /**
   * 配列をクリアする
   */
  public static clear(a: any[]) {
    a.splice(0, a.length);
  }
}
