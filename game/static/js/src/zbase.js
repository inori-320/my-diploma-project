export class Game{
    constructor(id){
        this.id = id;
        this.$lty = $('#' + id);
        // this.menu = new GameMenu(this);
        this.playground = new GamePlayground(this);

        this.start();
    }

    start(){
    }
}
