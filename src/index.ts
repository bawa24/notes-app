import { NearBindgen, NearContract, call, view, near, UnorderedMap, LookupMap  } from 'near-sdk-js';

import { connect, keyStores, WalletConnection } from 'near-api-js'


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
    return null;
    
  }

  // Call to delete a note
  /**
   * 
   * Delete notes from the blockchain based on the index
   * 
   */
  @call
  deleteNote({index} : {index:number}){

    return null;
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
   
    

    return null;
  }
}