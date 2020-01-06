import { ProcessDTO } from './process-dto';
import { MappingMethodDTO } from './mapping-method-dto';
//import { MethodMappingDTO } from './methodMapping';

export interface  MethodOptions {
    id?: number;
    name?: string;
    processDTOList?: any[];  // Pass raw data. Will be re-hydrated.
    methodMappingDTOList?: any[];

  }


export class MethodDTO {
      id: number;
     name: string;
     processDTOList: ProcessDTO[];
     methodMappingDTOList : MappingMethodDTO[];


    constructor(options: MethodOptions = {}) {



      console.log('MethodDTO constructor options.mappingDTOList', options.methodMappingDTOList);
      this.id = options.id || null;
      this.name = options.name || '';

      // Re-hydrate the processActivities.
      this.processDTOList =
        options.processDTOList ? options.processDTOList.map((pr: any) => new ProcessDTO(pr)) : [];

      this.methodMappingDTOList =
        options.methodMappingDTOList ? options.methodMappingDTOList.map((mm: any) => new MappingMethodDTO(mm)) : [];
    }

}
