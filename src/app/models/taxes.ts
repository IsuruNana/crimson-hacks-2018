export interface Taxes {
    key?:string;
    all_taxes?:{
        defense?:string;
        education?:string;
        general?:string;
        health_care?:string;
        pensions?:string;
        protection?:string;
        transportation?:string;
        welfare?:string;
    }
    year?:string;
}