export default class EmptyProperty extends Error {
  constructor(property: string) {
    super(`Can't receive the property ${property} empty`);
    super.name = 'EmptyProperty';
  }
}
