import 'regenerator-runtime'
import React, { useState } from 'react'
import './assets/css/global.css'
import { callSmartContractFunction, insertNote, viewBlockchainState, viewNotes, deleteNote } from './near-api'
import { EducationalText, NearInformation, SignInPrompt, SignOutButton } from './Components/ui-components';
import Note from './Components/Note'
import CreateArea from './Components/CreateArea';

export default function App() {
  // Will store data returned from the blockchain in component state
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();
  const [notesBlock, setnotesBlock] = useState([]);
  const [uiPleaseWait, setUiPleaseWait] = React.useState(false);
  const [notesForUser, setNotesForUser] = useState([]);
  var setOfNotes = []
  const[justPerformed, setjustPerformed] = useState("");
  
  // If user not signed-in with wallet - show prompt
  if (!window.walletConnection.isSignedIn()) {
    // Sign-in flow will reload the page later
    return SignInPrompt();
  } else {
    // Get blockchian state once on component load
    React.useEffect(() => {
      viewNotes()
      .then(val => setNotesForUser(val));
    }, []);

    
   
  }

  /**
   * Manage click for add
   */
  function handleAdd(newNote) {
    
  }

  /**
   * 
   * Add the state to the blockchain
   */
  
  const addToChain = (newNote) => {
   
    }

    /**
     * Debug function useful to see the state and if the state works
     */
  function handleViewNotes() {

  }

  /**
   * View the current state of the blockchain
   */
  
  const viewNotesOnChain = () => {

  }

  /**
   * 
   * Manage the event for delete 
   */
  function handleDelete(index) {

  }

  /**
   * 
   * Call to delete notes from the blockchain
   */

  const deleteNotesOnChain = (index) => {
      
  }
  
  return (
    

    <>
      <SignOutButton/>
      
      <main className={uiPleaseWait && 'please-wait'}>
        <h1>{valueFromBlockchain}</h1>
        

        <NearInformation message={valueFromBlockchain}/>
  
        <p>Notes for User: </p> 
          
        <CreateArea />
    
      </main>
    </>
  )
}
