import { FormControl } from "@angular/forms";

export class CustomValidators {
  static notEmptyNorWhitespace(control: FormControl) {
    const isNotEmptyNorWhitespace = control.value !== null
      && typeof control.value !== "undefined"
      && /\S/.test(control.value);
    return isNotEmptyNorWhitespace ? null : { notEmptyNorWhitespace: true };
  }
}
