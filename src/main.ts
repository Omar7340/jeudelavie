class GameCanvas {
    widthCase = 10
    heigthCase = 10

    private countWCase: number
    private countHCase: number

    private canvasH: number
    private canvasW: number

    private tab: number[][]

    constructor(w : number, h : number) {
        this.canvasW = w
        this.canvasH = h

        this.countWCase = Math.round(this.canvasW / this.widthCase)
        this.countHCase = Math.round(this.canvasH / this.heigthCase)

        console.log(this.countHCase);
        console.log(this.countWCase);
        

        this.tab = []

        for (let i = 0; i < this.countHCase; i++) {
            this.tab.push(Array(this.countWCase))
            this.tab[i].fill(0, 0, this.countWCase)
        }
    }

    draw(ctx : CanvasRenderingContext2D) {
        for (let i = 0; i < this.countHCase; i++) {
            ctx.moveTo(0, i*this.heigthCase);
            ctx.lineTo(this.canvasW, i*this.heigthCase);
            ctx.stroke();          
        }

        for (let i = 0; i < this.countWCase; i++) {
            ctx.moveTo(i*this.widthCase, 0);
            ctx.lineTo(i*this.widthCase, this.canvasH);
            ctx.stroke();          
        }
    }
}

var canvasContainer : HTMLDivElement = document.querySelector('#canvas-container')!
var canvas : HTMLCanvasElement = document.querySelector('#app canvas')!
var ctx : CanvasRenderingContext2D = canvas.getContext("2d")!

canvas.height = canvasContainer.clientHeight
canvas.width = canvasContainer.clientWidth

var game : GameCanvas = new GameCanvas(canvas.width, canvas.height)
game.draw(ctx)
