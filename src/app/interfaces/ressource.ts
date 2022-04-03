export interface Ressource {
    id:number;
    titre:string;
    datePublication:Date;
    dateModification:Date;
    visibilite:boolean;
    repContenu:string;
    validation:boolean;
    nbVues:number;
    archive:boolean;
    idCategorie:number;
    idTypeRessource:number;
    idAuteur:number;
}
