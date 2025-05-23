type ClampProps = {
    min: number;
    preferredVW: number;
    base: number;
    max: number;
  };
  
  export function computeClamp({ min, preferredVW, base, max }: ClampProps): string {
    return `clamp(${min}px, ${preferredVW}vw + ${base}px, ${max}px)`;
  }
  