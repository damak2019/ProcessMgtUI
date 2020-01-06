export class MappingMethodDTO {


    name: string;
    desc : string;

    constructor(options: {

        name?: string;
        desc?: string;

    } = {}) {
        this.name = options.name || '';
        this.desc = options.desc || '';
        console.log('MappingMethodDTO constructor' , options.name);

      }



}
