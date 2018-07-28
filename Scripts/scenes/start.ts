module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _InstructionButton: objects.Button;
        private _ocean: objects.Ocean;        
        public GameStartSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._ocean = new objects.Ocean();
            this.GameStartSound=createjs.Sound.play("GameStartSou");
            this.GameStartSound.volume = 0.1;
            this.GameStartSound.loop =-1;
            this._welcomeLabel = new objects.Label("Space Ranger", "80px", "Dock51", "Red", 270,150, true);
            this._InstructionButton = new objects.Button("InstructionButton", config.Screen.HALF_WIDTH, 260, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);

            this.Main();
        }

        public Update():void {
            this._ocean.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
           
            console.log(`Starting - START SCENE`);
            this.addChild(this._ocean);

            this.addChild(this._welcomeLabel);
            this.addChild(this._InstructionButton);
            this.addChild(this._startButton);

            this._startButton.on("click", function(){
                this.GameStartSound.stop();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._InstructionButton.on("click", function(){
               // this.GameStartSound.stop();
                managers.Game.CurrentState = config.Scene.INSTRUSTION;
            }, this);
        }
    }
}