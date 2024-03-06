import { ValueObject } from "~/_shared/domain";

export type AddressProps = {
  country: string
  city: string
  street: string
}

export class Address extends ValueObject<AddressProps> {
  get street() {
    return this.props.street;
  }

  get country() {
    return this.props.country;
  }

  get city() {
    return this.props.city;
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