export const arr:Object[]=[];
import "reflect-metadata";
import {injectable,inject,Container} from "inversify";

export interface IBook {
    createBook: (abc: Object)=>Object;
    Hi: ()=> void
    getBook: (id:number)=> Object;
    getBooks: ()=>Object[];
    updateBook: (id:number,book1234:Object)=>Object;
    deleteBook: (id:number)=>String 
}

@injectable()
export class BooksRepository implements IBook {
createBook(abc:Object){
    arr.push(abc);
    return arr[-1]
        }
    Hi() {
        return 'hi!'
    }
    getBook(id:number) {
        return arr[id];
    }
    getBooks(){
        return arr;
    }
    updateBook(id:number,book1234:Object) {
        arr[id]=book1234;
        return arr[id];
    }
    deleteBook(id:number) {
        arr.splice(id,1,);
        return 'ok';
    }
}
const IoC=new Container();
IoC.bind<IBook>(BooksRepository).toSelf();
//console.log(IoC.get(BooksRepository).Hi())
    

