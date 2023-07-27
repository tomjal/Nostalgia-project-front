import {
  GameType, GamePlatformType, GameGraphics,
  GameFramerate, GameExternalMonitor, GameController
} from "../shared/enums";

export interface IGame {
  title: string;
  year?: number;
  picturesLinks?: [string];
  description?: string;
  genre?: GameType;
  platform?: GamePlatformType;
  controller?: GameController;
  graphics?: GameGraphics;
  framerate?: GameFramerate;
  externalMonitor?: GameExternalMonitor;
  steamDbLink?: string;
}
