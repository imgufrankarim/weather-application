export class Snow {

  last3h: number;

  deserialize(input: any) {
    this.last3h = input['3h'];

    return this;
  }
}
