class Road {
    constructor(x, width, laneCount = 4 ) {
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x - width / 2;
        this.right = x + width / 2;

        const infinity = 99999999; // Встроенный метод приводит к багам
        this.top = -infinity;
        this.bottom = infinity; 
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";

        for (let i = 0; i <= this.laneCount; i++) {
            const x = lerp(
                this.left,
                this.right,
                i / this.laneCount
            );

            // Добавляет пробелы на линии
            if (i > 0 && i < this.laneCount) {
                ctx.setLineDash([20, 20]); // добавляет пробелы по 20 пикселей каждые 20 пикселей
            } else {
                ctx.setLineDash([]) // сплошные боковые линии
            }

            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }

    }
}
