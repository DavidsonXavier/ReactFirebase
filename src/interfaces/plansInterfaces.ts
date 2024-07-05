import firebase from "firebase";

export interface plansInterface {
    text: string;
    value: number;
    type: string;
    academia: string
}
export interface plansAddInterface {
    text: string;
    value: number;
    type: string;
    academia: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
}