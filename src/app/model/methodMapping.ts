
export class MethodMappingDTO {


    name: string;

    constructor(options: {

        name?: string;

    } = {}) {

        this.name = options.name || '';
        console.log('OlD Old Old MethodMappingDTO constructor' , options.name);

      }

}
