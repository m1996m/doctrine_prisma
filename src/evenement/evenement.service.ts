import { Injectable } from '@nestjs/common';
import {EvenementInterface} from "./interfaces/evenement.interface";
import {EvenementDtoModel} from "./models/evenement.dto.model";

@Injectable()
export class EvenementService {
    evenements:EvenementInterface []= [
        {
            id:1,
            titre:'bataclan',
            lieu:'Paris',
            statut:true,
            description:"C'est un concert de djani Alfa",
        },
        {
            id:2,
            titre:'Erdre',
            lieu:'Nantes',
            statut:true,
            description:"C'est un concert de Takana Zion",
        },
        {
            id:3,
            titre:'Raggae Sunska',
            lieu:'Bordeaux',
            statut:false,

        },
    ];
    findAll():EvenementInterface[]{
        return this.evenements;
    }
    create(ev:EvenementDtoModel){
         this.evenements=[...this.evenements,ev as EvenementInterface];
    }
    getOneEvenement(id:string){
        return this.evenements.find(evenement=>evenement.id===+id);
    }
    editeEvenement(id:string,ev:EvenementInterface){
        const eve=this.evenements.find(evenement=>evenement.id===+id);
        if(ev){
            const update=this.evenements.map(evenment=>evenment.id!==+id ?evenment:ev);
            this.evenements=[...update];
        }
    }
}
