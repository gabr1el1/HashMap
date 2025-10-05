class Node{
  constructor(key,value){
    this.key = key
    this.value = value
    this.nextNode = null
  }
}

export default class LinkedList{

  constructor(){
    this._head= null
    this._tail = null
    this._size = 0
  }

  append(key,value){
   const newNode = new Node(key,value)
   if(!this._head && !this._tail){
    this._head = newNode
    this._tail = newNode
    this._size+=1
   }else{
    let current = this._head
    while(current){
      if(current.key==key){
          current.value = value
        return 
      }
      if(!current.nextNode){
        current.nextNode = newNode
        current = newNode
        this._tail = newNode
        this._size+=1
      }
      current=current.nextNode
    }
    
   }
   
    
  }


  size(){
    return this._size
  }

  head(){
    return this._head
    
    
  }

  tail(){
    return this._tail
  }


  find(key){
    let current = this._head
    while(current){
      if(current.key==key){
        if(current.value){
          return current.value
        }else{
          return current.key
        }
      }
      current=current.nextNode
    }
    return null
  }

  removeKey(key){
    
    if(this._head.key==key){
      this._head = this._head.nextNode
      if(this._tail.key==key){
        this._tail = this._tail.nextNode
      }
      this._size-=1
      return true
    }else{
      let current = this._head
      while(current){
        if(current.nextNode && current.nextNode.key==key){
          current.nextNode = current.nextNode.nextNode
          if(this._tail == current.nextNode){
            this._tail = current
          }
          return true
          this._size-=1
        }
        current = current.nextNode
      }
      return false
    }
    
  }
} 






















