import { NearBindgen, NearContract, call, view, near, UnorderedMap, LookupMap  } from 'near-sdk-js';

import { connect, keyStores, WalletConnection } from 'near-api-js'
import { blockTimestamp } from 'near-sdk-js/lib/api';


const PREMIUM_PRICE = BigInt('10000000000000000000000');
// The @NearBindgen decorator allows this code to compile to WebAssembly.

class Note {


  title: string;
  content: string;
  constructor(title, content){
    this.title = title;
    this.content = content;

  }
}
@NearBindgen
class MyContract extends NearContract {


  notes: LookupMap;
  
  constructor() {
    //execute the NEAR Contract's constructor
    super();
    this.notes = new LookupMap("notes");

  }

  default() {
    return new MyContract()
  }

  // @call indicates that this is a 'change method' or a function
  // that changes state on the blockchain. Change methods cost gas.
  // For more info -> https://docs.near.org/docs/concepts/gas

    /**
     * Add notes to the blockchain
     * 
     */

  @call
  newNote({note} : {note:Note}){

    let user = near.predecessorAccountId();
    var temp = [];
    
    if(note.title == null || note.content == null){
      near.log("Empty notes has been passed");
      near.log(note.title);
      return "Empty notes were passed"
    }

    else{
      if(this.notes.get(user) != null){
        temp = temp.concat(this.notes.get(user));
        temp = temp.concat(note);
        this.notes.set(user, temp);
      }
      else{
        this.notes.set(user,note);
        return "Notes were set"
      }
    }
    
  }

  // Call to delete a note
  /**
   * 
   * Delete notes from the blockchain based on the index
   * 
   */
  @call
  deleteNote({index} : {index:number}){
    let user = near.predecessorAccountId();
    let newNotes = [];
    var temp;
    temp = this.notes.get(user);
    let valueToBeDeleted = temp[index]
    for(let i=0; i<temp.length; i++){
      if (i!= index){
        newNotes = newNotes.concat(temp[i]);
      }
    }
    this.notes.set(user, newNotes);

    return valueToBeDeleted;
  }

  // @view indicates a 'view method' or a function that returns
  // the current values stored on the blockchain. View calls are free
  // and do not cost gas.


  /**
   * View notes by user
   * 
   */


  //View notes by account
  @view
  viewNotes({ user }: { user: string }){
   
    if(this.notes.containsKey(user)){
      return this.notes.get(user);
    }
    return null;
  }
}