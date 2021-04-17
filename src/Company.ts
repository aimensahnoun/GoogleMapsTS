import faker from "faker";

export class Company {
  companyName: string;
  catchphrase: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchphrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
    };
  }

  showMarkerContent(): string {
    return `
            <div>
                <h3>Company : ${this.companyName}</h3>
                <h5>Company Catchphrase : ${this.catchphrase}</h5>
            </div>
        `;
  }
}
