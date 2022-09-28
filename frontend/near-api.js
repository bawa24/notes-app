import { connect, keyStores, WalletConnection } from 'near-api-js'
import { parseNearAmount } from 'near-api-js/lib/utils/format'
import { getConfig } from './config'

const nearConfig = getConfig(process.env.NODE_ENV || 'development')

// Initialize contract and set global variables
export async function initContract() {
  // Initialize connection to the NEAR blockchain
  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig));

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near);

  // Getting the Account ID. If signed-out, it's empty string
  window.accountId = window.walletConnection.getAccountId();
}

export function signInWithNearWallet() {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  window.walletConnection.requestSignIn(nearConfig.contractName);
}

export function signOutNearWallet() {
  window.walletConnection.signOut();
  // reload page
  window.location.replace(window.location.origin + window.location.pathname);
}


/**
 * 
 * Calls a contract method which will insert the note into the blockchain state
 * @param {note} 
 * @returns result
 */

export async function insertNote(note) {
  
  return null;
}
/**
 * 
 * Performs a view call to contract's `viewNotes` method, to get data from the blockchain
 */
export async function viewNotes() {
  return null;
}

/**
 * 
 * Calls a contract method which will delete the note from the blockchain state
 *  @param {indexToDelete} 
 * @returns result
 */
export async function deleteNote(indexToDelete) {
  return null;
}


