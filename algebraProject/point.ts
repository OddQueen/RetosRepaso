
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

    public calcularQuadrant(): number {
        if (this.x === 0 || this.y === 0) {
            return 0;
        } else if (this.x > 0 && this.y > 0) {
            return 1;
        } else if (this.x < 0 && this.y > 0) {
            return 2;
        } else if (this.x < 0 && this.y < 0) {
            return 3;
        } else {
            return 4;
        }
    }

    public calculateNearest(pointsArray: Point[]): Point {
        if (pointsArray.length === 0) {
            throw new Error("Mamma mia! El array está vacío");
        }

        let minDistance = this.calculateDistance(pointsArray[0]);
        let nearestPoint = pointsArray[0];

        for (let i = 1; i < pointsArray.length; i++) {
            const distance = this.calculateDistance(pointsArray[i]);
            if (distance < minDistance) {
                minDistance = distance;
                nearestPoint = pointsArray[i];
            }
        }

        return nearestPoint;
    }
}