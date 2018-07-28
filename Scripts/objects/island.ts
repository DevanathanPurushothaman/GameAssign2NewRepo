namespace objects {
  export class Island extends objects.GameObject {
    // member variables
    private _verticalSpeed: number;

    /**
     * Creates an instance of Plane.
     * @memberof Plane
     */
    constructor() {
      super("island");

      this.Start();
     // createjs.Tween.get(this).to({rotation:360},3000);
    }

    // private methods
    private _checkBounds(): void {
      // check bottom boundary
      if (this.y > config.Screen.HEIGHT + this.halfHeight) {
        this.Reset();
        //createjs.Tween.get(this).to({rotation:360},3000);
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      this._verticalSpeed = 5;
      this.Reset();
     // createjs.Tween.get(this).to({rotation:360},3000);
    }

    public Update(): void {
      this.y += this._verticalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      this.y = -this.height;
      this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
      createjs.Tween.get(this).to({rotation:360},20000);
    }
  }
}
