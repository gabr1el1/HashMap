import HashMap from "./hashmap.js";
export default function  HashSet(){
    const {get, set, has, remove, length, capacity, clear, buckets, keys} = HashMap()
    
    function setHashSet(key){
        set(key,null)
    }

    function toString(){
        let string = ''
        buckets().forEach(bucket=>{
            let current = bucket.head()
            while (current){
                string+=`(${current.key}) => `
                current = current.nextNode
            }
            string+=current+'\n'
        })
        return string  
    }
    return {get, set: setHashSet,has, remove, length, capacity, clear, keys, toString}

} 