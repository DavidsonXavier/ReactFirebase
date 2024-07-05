import { db } from "../../firebaseConfig";

const plansReference = db.collection('planos');

export function snapshotPlansObservers(callback : React.Dispatch<React.SetStateAction<any>>, plansType: string[],gymId:string){
    const gymRerence = db.doc(`academia/${gymId}`)
    plansReference.where('text', 'in', plansType).where('academia','==',gymRerence).onSnapshot((snapshot)=>{
        const plans : any []= []
        snapshot.forEach(valor => {
            plans.push(valor.data())
        })
        callback(plans)
    })
}