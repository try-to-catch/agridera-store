export interface IContactFormData {
    name: string,
    companyName?: string,
    position?: string,
    city?: string,
    country?: string,
    telephone?: string,
    email: string,
    occupation?: OccupationEnum,
    occupationOther?: string,
    interestIn?: string,
}

export enum OccupationEnum {
    UNSELECTED,
    SEEDER,
    DRIVER,
    OTHER,
}