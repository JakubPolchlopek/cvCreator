/**
 * Function which task is saving data into localstorage
 * @param key key of data in localstorage
 * @param data data which will be saved into localstorage under key
 */
const saveToStorage = <T>(key: string, data: T):void=> {
    try {
        const serializedValue = JSON.stringify(data)
        localStorage.setItem(key, serializedValue)
    }
    catch(err){
        console.error(`Erorr during saveing data to localsotrage with key ${key}. Error: ${err}`)
    }
}

export default saveToStorage