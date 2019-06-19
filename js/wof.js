class WheelOfFortune {
    constructor(data) {
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext("2d");

        this.conf = {
            centerX: this.canvas.width / 2,
            centerY: this.canvas.height / 2,
            radius: this.canvas.height / 2 - 10,
        } 
        
        this.ctx.translate(this.conf.centerX, this.conf.centerY);

        this.data = data || {
            tiles: [
                {id: 1, name: 'one'},
                {id: 1, name: 'one'},
                {id: 1, name: 'one'},
                {id: 2, name: 'two'},
                {id: 3, name: 'three'},
                {id: 4, name: 'four'},
                {id: 5, name: 'five'},
                {id: 6, name: 'six'},
                {id: 7, name: 'seven'},
                {id: 8, name: 'eight'},
            ]
        }

        this.helpers = {
            convertToRad: (deg) => {return( deg * (Math.PI / 180) )},
        }
    }

    drawTiles() {
        let { radius } = this.conf;
        const { convertToRad } = this.helpers;
        const { tiles } = this.data;

        const devidedAngle = 360 / tiles.length;

        for (let startingPosition = 0; startingPosition < tiles.length; startingPosition++) {
            let angle = devidedAngle * startingPosition;
            // let pointOnCircumferenceX = radius * Math.cos(convertToRad(angle));
            // let pointOnCircumferenceY = radius * Math.sin(convertToRad(angle));

            // this.ctx.beginPath();
            // this.ctx.moveTo(0, 0);
            // this.ctx.lineTo(pointOnCircumferenceX, pointOnCircumferenceY);
            // this.ctx.lineTo(
            //     radius * Math.cos(convertToRad((angle + devidedAngle))), 
            //     radius * Math.sin(convertToRad((angle + devidedAngle)))
            // );
            // this.ctx.fill();
            // this.ctx.stroke();
            
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.arc(
                0, 0, radius,
                convertToRad(angle), 
                convertToRad(angle + devidedAngle)
            );

            this.ctx.fillStyle = (startingPosition % 2 === 0)  ? "red" : "blue";
            this.ctx.fill();
            this.ctx.closePath();
        }
        
    }
}

const wof = new WheelOfFortune();
wof.drawTiles()