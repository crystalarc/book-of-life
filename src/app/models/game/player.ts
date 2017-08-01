export class Player {
  private _wayOfLife: string;
  private _race: string;
  private _sex: string;
  private _skills: SkillSet;
}

interface SkillSet {
  fishing: number;
  IT: number;
  art: number;
  speech: number;
  empathy: number;
  leadership: number;
  strength: number;
}
