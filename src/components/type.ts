
export interface IData {
    bodyPart: any;
    setExercises: any;
    exercises?: string[];
    setBodyPart: (bodyPart: string) => void;
}


export type hData = {
    data?: any;
    bodyPart: string;
    setBodyPart: any
    item?: any
}

export interface Exercise {
    id?: string;
    name?: string;
    target?: string;
    equipment?: string;
    bodyPart?: string;
}
