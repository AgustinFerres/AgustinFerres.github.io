export default class EnumMap<K extends number | string, T> {
  private readonly map: { [EnumKey in K]?: T };

  constructor(map: { [EnumKey in K]?: T } = {}) {
    this.map = map;
  }

  set(key: K, value: T) {
    this.map[key] = value;
  }

  get(key: K): T | undefined {
    return this.map[key];
  }

  getValues(): T[] {
    return Object.values(this.map);
  }
}
