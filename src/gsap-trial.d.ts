declare module 'gsap-trial/SplitText' {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(
      target: string | string[] | Element | Element[] | NodeList,
      vars?: {
        type?: string;
        linesClass?: string;
        wordsClass?: string;
        charsClass?: string;
        position?: string;
        reduceWhiteSpace?: boolean;
        [key: string]: any;
      }
    );
    revert(): void;
    split(vars?: object): this;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  const ScrollSmoother: any;
  export { ScrollSmoother };
  export default ScrollSmoother;
}
