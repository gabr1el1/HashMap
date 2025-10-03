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
        if(!current.value){
          current.key = key
        }else{
          current.value = value
        }
        
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

  prepend(value){
    const newNode = new Node(value)
    if(!this._head && !this._tail){
      this._head = newNode
      this._tail = newNode
    }else{
      newNode.nextNode = this._head
      this._head = newNode
    }
    this._size+=1
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

  at(index){
    let current = this._head
    for(let i=0;i<=index;i++){
      if(i==index){
        return current
      }
      current = current.nextNode
    }
  }

  pop(){
    if(this._head && this._tail){
      if(this._head.nextNode == null){
        this._head = null
        this._tail = null
      }else{
        let current = this._head
        while(current){
          if(!current.nextNode.nextNode){
            this._tail = current
            current.nextNode = null
          }
          current = current.nextNode
        }
      }
      this._size-=1
    }
  }

  contains(value){
    let current = this._head
    while(current){
      if(current.value==value){
        return true
      }
      current=current.nextNode
    }
    return false
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

  toString(){
    let string = ""
    let current = this._head

    while(current){
      string+="( " + current.value + " ) "+'-> '
      current = current.nextNode
    }
    string+=current

    return string
  }

  insertAt(key,value,index){
    if(index<0){
      return
    }
    let newNode = new Node(key, value)
    if(!this._head && !this._tail){
      this._head = newNode
      this._tail = newNode
      this._size+=1
    }else{
      let prev = this._head
      if(index==0){
        this._head = newNode
        newNode.nextNode = prev

        this._size+=1
        return
      }
      for(let i=0;i<=this._size; i++){
         if(i==this._size || index==i){
          if(index==this._size){
             this._tail = newNode
          }
          newNode.nextNode = prev.nextNode
          prev.nextNode = newNode
          this._size+=1

          return
         }
        if(i>=1){
          prev = prev.nextNode
        }

      }
    }
    }

  removeAt(index){
    if(!this._head && !this._tail){
      this._head = newNode
      this._tail = newNode
      this._size-=1
    }else if(index==0){
      this._head = this._head.nextNode
      this._size-=1
    }else{
      let prev = this._head
      for(let i=0;i<=this._size-1;i++){
        if(i==this.size - 1|| i==index){
          if(i==this.size - 1){
            this._tail = prev
          }
          prev.nextNode = prev.nextNode.nextNode
          this._size-=1
          return
        }
        if(i>=1){
          prev = prev.nextNode
        }
      }
    }

    this._size-=1
  }

  removeKey(key){
    
    if(this._head.key==key){
      this._head = this._head.nextNode
      if(this._tail.key==key){
        this._tail = this._tail.nextNode
      }
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
        }
        current = current.nextNode
      }
      return false
    }
    
  }
} 





















