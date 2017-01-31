import {FormControl} from "@angular/forms";

export class <%= validatorName %>Validator {
  validate(c: FormControl) {
    let comparator = '';

    return comparator === (c.value) ? null : {
      validate: {
        valid: false
      }
    }
  }
}
