import { ProcessActivityDTO } from './process-activity-dto';



export enum ProcessType {
    ARCHITECTURE,
    QUALITY
}

export enum FollowUP {
    STANDARD,
    LIGHT,
    ENFORCED
}


export interface  ProcessOptions {
    //id?: number;
    displayName?: string;
    processType?: string;
    followUP?: string;

    processActivityDTOList?: any[];  // Pass raw data. Will be re-hydrated.
  }

export class ProcessDTO {
    // id: number;
    displayName: string;
    processType: string;
    followUP: string;

    processActivityDTOList: ProcessActivityDTO[];

    constructor(options: ProcessOptions = {}) {
     // this.id = options.id || null;
      this.displayName = options.displayName || '';
      this.processType = options.processType || '';
      this.followUP = options.followUP || '';

      // Re-hydrate the processActivities.
      this.processActivityDTOList =
        options.processActivityDTOList ? options.processActivityDTOList.map((procAct: any) => new ProcessActivityDTO(procAct)) : [];
    }


}
