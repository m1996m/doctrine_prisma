import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {EvenementInterface} from "./interfaces/evenement.interface";
import {EvenementService} from "./evenement.service";
import {EvenementDtoModel} from "./models/evenement.dto.model";

@Controller('evenement')
export class EvenementController {
    constructor(private readonly evenementService:EvenementService) {
    }
    @Get()
    getAll():EvenementInterface[]{
        return this.evenementService.findAll();
    }
    @Post('create')
    create(@Body() newEv:EvenementDtoModel){
        console.log('NewEvenement',newEv);
        this.evenementService.create(newEv);
    }
    @Get(':id')
    getOneEvenement(@Param('id') id:string){
        console.log('id',id);
        return this.evenementService.getOneEvenement(id);
     }
     @Patch(':id')
    edite(@Param('id') id:string,@Body() evenement:EvenementDtoModel){
        this.evenementService.editeEvenement(id,evenement);
     }
}
