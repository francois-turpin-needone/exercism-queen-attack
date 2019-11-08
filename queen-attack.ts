class QueenAttack {
    public white: number[];
    public black: number[];
    private matrix: string[];

    constructor(position: { white: number[], black: number[] }) {
        if(this.posAreSame(position)) {
            throw new Error("Queens cannot share the same space");
        } else{
            this.white = position.white;
            this.black = position.black;
            this.matrix = [];
            this.initMatrix();
        } 
    }

    

    public toString(): string {
        this.matrix[this.white[0]] = QueenAttack.replaceAt(this.matrix[this.white[0]], this.white[1], "W");
        this.matrix[this.black[0]] = QueenAttack.replaceAt(this.matrix[this.black[0]], this.black[1], "B");
        this.matrix.map((row, index) => {
            let formatedRow = row.replace(/\s*/g, " ");
            this.matrix[index] = formatedRow;
        })
        return this.matrix.join("\n");
    }

    public canAttack():boolean {
        return true;
    }

    private posAreSame(position: { white: number[], black: number[] }): boolean {
        return JSON.stringify(position.white) === JSON.stringify(position.black);
    }

    private initMatrix() {
        for(var i = 1; i <= 8; i++) {
            this.matrix.push('________');
        }
    }

    private static replaceAt(chaine:string, index:number, replacement:string) {
        return chaine.substr(0, index) + replacement+ chaine.substr(index + replacement.length);
    }
}

export default QueenAttack