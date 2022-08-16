export interface Iusers {
    id: number,
    name: string,
    url: string,
    message: Imessage[],
}
 export interface Imessage {
    date: string,
    message: string,
    idUser: number,
 }
