import { ProcessDTO } from './process-dto';

export interface  MethodOptions {
    //id?: number;
    name?: string;
    processDTOList?: any[];  // Pass raw data. Will be re-hydrated.
  }


export class MethodDTO {
     // id: number;
     name: string;
     processDTOList: ProcessDTO[];


    constructor(options: MethodOptions = {}) {
     // this.id = options.id || null;
      this.name = options.name || '';

      // Re-hydrate the processActivities.
      this.processDTOList =
        options.processDTOList ? options.processDTOList.map((pr: any) => new ProcessDTO(pr)) : [];
    }

}
