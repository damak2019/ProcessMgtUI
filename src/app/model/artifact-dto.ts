export class ArtifactDTO {

    tag: string;
    name: string;

    constructor(options: {
        tag?: string;
        name?: string;

    } = {}) {
        this.tag = options.tag || '';
        this.name = options.name || '';

      }

}
