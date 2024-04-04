
export class Point {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public setX(x: number): void {
        this.x = x;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public toString(): string {
        return `(${this.x},${this.y})`;
    }

    public distanceToOrigin(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public calculateDistance(anotherPoint: Point): number {
        const dx = this.x - anotherPoint.getX();
        const dy = this.y - anotherPoint.getY();
        return Math.sqrt(dx * dx + dy * dy);
    }
}
