class GameMenu{
    constructor(root){
        this.root = root;
        this.$menu = $(`
<div class="game_menu">
    <div class = "game_menu_block">
        <div class = "game_menu_block_item game_menu_block_single">
            单人模式
        </div>
        <br>
        <div class = "game_menu_block_item game_menu_block_multi">
            多人模式
        </div>
        <br>
        <div class = "game_menu_block_item game_meny_block_settings">
            设置
        </div>
    </div>
</div>
`);
        this.root.$lty.append(this.$menu);
        this.$single = this.$menu.find('.game_menu_block_single');
        this.$multi = this.$menu.find('.game_menu_block_multi');
        this.$settings = this.$menu.find('.game_meny_block_settings');

        this.start();
    }

    start(){
        this.add_listening_events();
    }

    add_listening_events(){
        let now_menu = this;
        this.$single.click(function(){
            console.log("click single mode.");
            now_menu.hide();
            now_menu.root.playground.show();
        })
        this.$multi.click(function(){
            console.log("click multi mode.");

        })
        this.$settings.click(function(){
            console.log("launch setting.");
            now_menu.hide();
            now_menu.root.settings.show();
        })
    }

    show(){
        this.$menu.show();
    }

    hide(){
        this.$menu.hide();
    }
}
class GamePlayground{
    constructor(root){
        this.root = root;
        this.$playground = $(`
<div class = "game_palyground">
    游戏界面，开发中！
</div>
        `);
        this.root.$lty.append(this.$playground);
        this.start();
    }

    start(){

    }

    show(){
        this.$playground.show();
    }

    hide(){
        this.$playground.hide();
    }
}
class GameSettings{
    constructor(root){
        this.root = root;
        this.$settings = $(`
<div class = "game_settings">
设置界面，开发中！！
</div>
        `);

        this.root.$lty.append(this.$settings);
        this.start();
    }

    start(){
    }

    show(){
        this.$setting.show();
    }

    hide(){
        this.$setting.hide();
    }
}

class Game{
    constructor(id){
        this.id = id;
        this.$lty = $('#' + id);
        this.menu = new GameMenu(this);
        this.playground = new GamePlayground(this);
        this.settings = new GameSettings(this);

        this.start();
    }

    start(){
    }
}
