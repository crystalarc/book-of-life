import { Player } from './player';
import { Scene } from './scene';

export class Game {
  public player: Player;
  private _scenes: Scene[];
  private _gameInfo: GameInfo;
  private _rules: Rules;

  constructor(scenes: RawScenes) {
    this.createScenes(scenes);
    this.setupGameInfo();
    this.setupRules();
    this.player = new Player();
  }

  private createScenes(scenes: RawScenes) {
    this._scenes = scenes.map((scene) => new Scene(scene));
  }

  private setupGameInfo() {
    this._gameInfo = {
      status: GameState.INIT,
      started: new Date(),
      scenesOpened: 0
    };
  }

  private setupRules() {
    this._rules = {
      initSkillPoints: 50,
      maxPointsPerSkill: 10
    };
  }
}

interface GameInfo {
  status: number;
  started: Date;
  scenesOpened: number;
}

interface Rules {
  initSkillPoints: number;
  maxPointsPerSkill: number;
}

enum GameState {
  INIT,
  PROGRESS,
  LOST,
  WON
}
