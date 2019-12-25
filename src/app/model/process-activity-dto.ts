import { ArtifactDTO } from './artifact-dto';

export interface  ProcessActivityOptions {
    //id?: number;
    name?: string;
    artifactDTOList?: any[];  // Pass raw data. Will be re-hydrated.
  }

export class ProcessActivityDTO {

    // id: number;
    name: string;

    artifactDTOList: ArtifactDTO[];

    constructor(options: ProcessActivityOptions = {}) {
     // this.id = options.id || null;
      this.name = options.name || '';

      // Re-hydrate the artifacts.
      this.artifactDTOList = options.artifactDTOList ? options.artifactDTOList.map((art: any) => new ArtifactDTO(art)) : [];
    }



}
