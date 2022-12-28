export interface Skill {
    id: number,
    percent: number;
    specialty: string;
    mastery: string;
    stats: Stats[];
}

interface Stats {
    language: string;
    percent: string;
}

// interface Languages {
//     [index: number]: string;
// }