import { plansInterface } from "../../interfaces/plansInterfaces";
import { addPlansAcess, getPlansAcess, setPlansAcess, updatePlansAcess } from "../dataAcess/plansAcess";

export async function addPlansActions(body:plansInterface){
    const response = await addPlansAcess(body);

    return response.id;
}
export async function setPlansActions(body:plansInterface, id:string){
    const response = await setPlansAcess(body, id);

    return response;
}
export async function updatePlansActions(body:plansInterface, id:string){
    const response = await updatePlansAcess(body, id);
    return response;
}


export async function getPlansActions(){
    const response = await getPlansAcess();
    const plans:any [] = []

    response.forEach(doc => {
        plans.push(doc.data())
    })

    return plans
}