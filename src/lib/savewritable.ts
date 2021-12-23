import type { Writable } from 'svelte/types/runtime/store';
/**
 * @author maverick-dev-55
 * @description saves a writable to localStorage
 * @example <caption>Intended and working usage</caption>
 * import { onMount } from 'svelte';
 * import { writable } from 'svelte/store;
 * const store = writable(); // or import your writable
 * import savewritable from '$lib/savewritable';
 * onMount(()=>{
 *      savewritable(store)
 * }
 * @param writable The writable you want to save
 * @param key The localstorage key you want to save the writable as. default is 'store'
 */
export default (writable: Writable<any>, key='store')=>{
    const json = localStorage.getItem(key);
    if (json) {
       writable.set(JSON.parse(json));
    }
  
    writable.subscribe(current => {
        localStorage.setItem(key, JSON.stringify(current));
    });
}
