import { WaveGroup } from "./waveGroup.js";

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.waveGroup = new WaveGroup();

        //아래 이벤트리스너 콜백함수 자리에 bind를 통해 콜백함수를 반환(함수 프로토타입의 bind함수 사용시 함수를 실행하는 것이아닌 binding된 함수를 반환한다.)
        window.addEventListener('resize',this.resize.bind(this),false);
        this.resize();
        
        //아래 매개콜백함수 자리에 bind를 통해 콜백함수를 반환(함수 프로토타입의 bind함수 사용시 함수를 실행하는 것이아닌 binding된 함수를 반환한다.)
        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight *2;
        this.ctx.scale(2,2);

        this.waveGroup.resize(this.stageWidth,this.stageHeight);
    }

    animate(t) {
        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);

        this.waveGroup.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () =>{
    new App();
}