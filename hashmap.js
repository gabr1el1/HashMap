import LinkedList from "./linkedlist.js"

export default function HashMap(){
    
        
    const _loadFactor = 0.75
    const _defaultCapacity = 16
    let _capacity = _defaultCapacity 
    let _buckets = _init_buckets(_capacity)
    let _length = 0

    function _init_buckets(size){
        return Array.apply(null,new Array(size)).map(element=>new LinkedList())
    }
    function _hash(key){
        let hashCode = 0

        const primeNumber = 31
        for (let i=0;i<key.length;i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
            hashCode = hashCode % _capacity
        }

        return hashCode
    }

    function set(key,value){
        try 
        {
            let index = _checkIndex(key)
            const prevSize = _buckets[index].size()
            _buckets[index].append(key,value)
            if(prevSize<_buckets[index].size()){
                _length+=1
            }
            if(_length>_capacity*_loadFactor){
                    _capacity = _capacity * 2
                    _length = 0
                    _remap()
                }

        } catch (error) {
            console.log(error.message)
        }
        
    }

    function get(key){
        try {
            let index = _checkIndex(key)
            if(!_buckets[index]){
                return null
            }else{
                return _buckets[index].find(key)
            }
                
        } catch (error) {
                console.log(error.message)
        }
    }

    function has(key){
        try {
            let index = _checkIndex(key)
            
            if(!_buckets[index]){
                    return false
            }else{
                return _buckets[index].find(key) ? true : false
            }            
                
        } catch (error) {
                console.log(error.message)
        }
    }

    function remove(key){
        let index = _checkIndex(key)
        
        if(_buckets[index].removeKey(key)){
            _length-=1
            if(_length<=_capacity/2*_loadFactor){
                _capacity = _capacity / 2
                _length = 0
                _remap()
            }
            return true
        }else{
                return false
            
        }

        
    }

    

    function length(){
        return _length
    }

    function capacity(){
        return _capacity
    }



    function clear(){
        _capacity = _defaultCapacity
        _buckets = _init_buckets(_capacity)
        _length = 0
    }

    function keys(){
        let keys = []
        _buckets.forEach(bucket=>{
            if(bucket){
                let node = bucket.head()
                while(node){
                    keys.push(node.key)
                    node = node.nextNode
                }
            }
            
        })
        return keys
    }

    function values(){
        let values = []
        _buckets.forEach(bucket=>{
            if(bucket){
                let node = bucket.head()
                while(node){
                    values.push(node.value)
                    node = node.nextNode
                }
            }
            
        })
        return values
    }

    function entries(){
        let entries = []
        _buckets.forEach(bucket=>{
            if(bucket){
                let node = bucket.head()
                while(node){
                    entries.push([node.key,node.value])
                    node = node.nextNode
                }
            }
            
        })
        return entries
    }


    function toString(){
        let string = ''
        _buckets.forEach(bucket=>{
            let current = bucket.head()
            while (current){
                string+=`( ${current.key} : ${current.value}) => `
                current = current.nextNode
            }
            string+=current+'\n'
        })
        return string  
    }

    function buckets(){
        return _buckets
    }
    

    function _checkIndex(key){
        let index = _hash(key)
        if (index < 0 || index >= _buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        return index
    }

    function _remap(){
        let copy_buckets = [..._buckets]
        _buckets = _init_buckets(_capacity)
        copy_buckets.forEach(bucket=>{
            if(bucket){
                let node = bucket.head()
                while(node){
                    set(node.key, node.value)
                    node = node.nextNode
                }
            }
        })
    }

    return {set, get, has, remove, length, capacity, clear, keys, values, entries, buckets, toString, clear}
}