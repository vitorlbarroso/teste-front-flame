export function useStorage(){
    const storage = window.localStorage
    const set = (key: string, value: any): void => {
        storage.setItem(key, JSON.stringify(value))
    }

    const get = <T>(key: string): T | null => {
        const data = storage.getItem(key) as string
        if(data && data !== 'undefined'){
            return JSON.parse(data)
        }

        return null
    }

    const deletee = () => {
        storage.clear();
    }
    
    return { get, set, deletee }
}