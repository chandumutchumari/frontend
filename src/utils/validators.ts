export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isRequired(value: string | undefined | null): boolean {
  return !!value && value.trim().length > 0;
}

export function minLength(value: string, n: number): boolean {
  return !!value && value.length >= n;
}
