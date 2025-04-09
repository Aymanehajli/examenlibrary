// src/types.ts
export interface Book {
    _id?: string; // facultatif pour création
    titre: string;
    auteur: string;
    ISBN: string;
  }
  
  export interface FormField {
    name: keyof Book;
    type: string;
    placeholder: string;
  }
  