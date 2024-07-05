import { db } from "../../firebaseConfig";
import { plansInterface, plansAddInterface  } from "../../interfaces/plansInterfaces";

const plansReference = db.collection('planos');

export async function addPlansAcess(body:plansInterface){
    const plansObject: plansAddInterface = {
        academia: db.collection('academia').doc(body.academia),
        text: body.text,
        type: body.type,
        value: body.value
    }
    const response = await plansReference.add(plansObject);
    return response;

}

export async function setPlansAcess(body:any, id: string){
    const plansObject: plansAddInterface = {
        academia: db.collection('academia').doc(body.academia),
        text: body.text,
        type: body.type,
        value: body.value
    }
    const response = await plansReference.doc(id).set(plansObject);

    return response;
}

export async function updatePlansAcess(body:any, id: string){
    const plansObject: plansAddInterface = {
        academia: db.collection('academia').doc(body.academia),
        text: body.text,
        type: body.type,
        value: body.value
    }
    const response = await plansReference.doc(id).update(plansObject);
    
    return response;
}

export async function getPlansAcess(){
    const response = await plansReference.get();
    return response;


}