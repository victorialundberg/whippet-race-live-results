export interface LiveResultsResponse {
    sektion: string;
    datum: string;
    omgangar: Omgang[];
}

export interface Omgang {
    kon: string;
    namn: string;
    heat: Heat[];
}

export interface Heat {
    nr?: number;
    klass?: string;
    starter: Starter[];
    sponsor?: string;
}

export interface Starter {
    farg: string;
    licensNr?: number;
    hundNamn: string;
    kon: string;
    tid?: number;
    placering?: number;
    licensHund?: boolean;
    agare?: string;
    sektion?: string;
    kommentar?: string;
}
