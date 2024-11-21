/**
 * Function which task is to return data from localStorage
 * @param key key under which data has been saved
 * @returns object saved in localStorage
 */

const getFromStorage = (key:string) =>{
    try {
        const serializedValue = localStorage.getItem(key)
        if(serializedValue === null) return null
        return JSON.parse(serializedValue)
    }

    catch(err){
        console.error(`Error during geting data from storage with key ${key}. Erorr: ${err}`)
    }
}

export default getFromStorage