var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Instructon = /** @class */ (function (_super) {
        __extends(Instructon, _super);
        // constructors
        function Instructon() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instructon.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            // this.GameOverSound=createjs.Sound.play("GameovSound");
            //  this.GameOverSound.volume = 0.1;
            this._gameInstructionLabel = new objects.Label("Use the Mouse ", "30px", "Dock51", "Yellow", config.Screen.HALF_WIDTH, 150, true);
            this._gameInstructionLabel1 = new objects.Label("To avoid the meteoroids", "30px", "Dock51", "Yellow", config.Screen.HALF_WIDTH, 200, true);
            this._gameInstructionLabel2 = new objects.Label("And save the spaceceman", "30px", "Dock51", "Yellow", config.Screen.HALF_WIDTH, 250, true);
            this._StartButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);
            this.Main();
        };
        Instructon.prototype.Update = function () {
            this._ocean.Update();
        };
        Instructon.prototype.Reset = function () {
            0;
        };
        Instructon.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Instructon.prototype.Main = function () {
            console.log("Starting - Instruction SCENE");
            this.addChild(this._ocean);
            this.addChild(this._gameInstructionLabel);
            this.addChild(this._gameInstructionLabel1);
            this.addChild(this._gameInstructionLabel2);
            // this.addChild(managers.Game.ScoreBoardManager.HighScoreLabel);
            this.addChild(this._StartButton);
            this._StartButton.on("click", function () {
                managers.Game.ScoreBoardManager.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return Instructon;
    }(objects.Scene));
    scenes.Instructon = Instructon;
})(scenes || (scenes = {}));
//# sourceMappingURL=Instruction.js.map