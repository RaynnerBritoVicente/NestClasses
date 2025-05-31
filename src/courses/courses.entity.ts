export class Course {
    constructor(
        public id: number,
        public nome: string,
        public descricao: string,
        public tags: string[],
    ){}
}