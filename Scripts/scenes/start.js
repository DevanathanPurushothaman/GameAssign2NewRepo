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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this.GameStartSound = createjs.Sound.play("GameStartSou");
            this.GameStartSound.volume = 0.1;
            this.GameStartSound.loop = -1;
            this._welcomeLabel = new objects.Label("Space Ranger", "80px", "Dock51", "Red", 270, 150, true);
            this._InstructionButton = new objects.Button("InstructionButton", config.Screen.HALF_WIDTH, 260, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);
            this.Main();
        };
        Start.prototype.Update = function () {
            this._ocean.Update();
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            console.log("Starting - START SCENE");
            this.addChild(this._ocean);
            this.addChild(this._welcomeLabel);
            this.addChild(this._InstructionButton);
            this.addChild(this._startButton);
            this._startButton.on("click", function () {
                this.GameStartSound.stop();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._InstructionButton.on("click", function () {
                // this.GameStartSound.stop();
                managers.Game.CurrentState = config.Scene.INSTRUSTION;
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map