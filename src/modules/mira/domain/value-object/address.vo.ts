import { ValueObject } from "~/_shared/domain";

export type AddressProps = {
  country: string
  city: string
  street: string
}

export class Address extends ValueObject<AddressProps> {
  constructor(props: AddressProps) {
    super(props);
  }

  get street() {
    return this.props.street;
  }

  get city() {
    return this.props.city;
  }

  get country() {
    return this.props.country;
  }

  static create(props: AddressProps) {
    return new Address(props)
  }

  toJSON(){
    return {
      street: this.props.street,
      city: this.props.city,
      country: this.props.country
    }
  }
}