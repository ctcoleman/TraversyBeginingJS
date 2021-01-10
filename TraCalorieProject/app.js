// ----- Storage Controller -----
const StorageCtrl = (() => {
  return {
    storeItems: item => {
      let items

      // Check if any items in localstorage
      if(localStorage.getItem('items') === null) {
        items = []
        // Push new item to array
        items.push(item)
        // Set localStorage
        localStorage.setItem('items', JSON.stringify(items))
      } else {
        items = JSON.parse(localStorage.getItem('items'))
        // Push new item
        items.push(item)
        // Reset local storage
        localStorage.setItem('items', JSON.stringify(items))
      }
    },
    getItems: () => {
      let items
      
      if(localStorage.getItem('items') === null) {
        items = []
      } else {
        items = JSON.parse(localStorage.getItem('items'))
      }

      return items
    },
    updateItems: updatedItem => {
      let items = JSON.parse(localStorage.getItem('items'))

      items.forEach((item, index) => {
        if(updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem)
        }
      })

      // Reset local storage
      localStorage.setItem('items', JSON.stringify(items))
    },
    deleteItems: id => {
      let items = JSON.parse(localStorage.getItem('items'))

      items.forEach((item, index) => {
        if(id === item.id) {
          items.splice(index, 1)
        }
      })

      // Reset local storage
      localStorage.setItem('items', JSON.stringify(items))
    },
    clearAllItems: () => {
      localStorage.removeItem('items')
    }
  }
})()

// ----- Item Controller -----
const ItemCtrl = (() => {
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id
    this.name = name
    this.calories = calories
  }

  // Data Structure (state)
  const data = {
    items: StorageCtrl.getItems(),
    currentItem: null,
    totalCalories: 0
  }

  return {
    getItems: () => data.items,
    addItem: (name, calories) => {
      let ID
      // Create ID
      if(data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1
      } else {
        ID = 0
      }

      // Calories to number
      calories = parseInt(calories)

      // Create new item
      newItem = new Item(ID, name, calories)
      // Add item to data array
      data.items.push(newItem)

      return newItem
    },
    getItemById: (id) => {
      let found = null
      // Loop through items
      data.items.forEach((item) => {
        if(item.id === id) {
          found = item
        }
      })

      return found
    },
    updateItem: (name, calories) => {
      // Calories to number
      calories = parseInt(calories)

      let found = null

      data.items.forEach(item => {
        if(item.id === data.currentItem.id) {
          item.name = name
          item.calories = calories
          found = item
        }
      })

      return found
    },
    deleteItem: id => {
      // Get ids
      const ids = data.items.map(item => item.id)

      // Get index
      const index = ids.indexOf(id)

      // Remove from Array
      data.items.splice(index, 1)
    },
    clearAllItems: () => {
      data.items = []
    },
    setCurrentItem: item => {
      data.currentItem = item
    },
    getCurrentItem: () => data.currentItem,
    getTotalCalories: () => {
      let total = 0

      // loop through items and add calories
      data.items.forEach((item) => {
        total += item.calories
      })

      // Set total calories from for loop
      data.totalCalories = total

      // Return total
      return data.totalCalories
    },
    logData: () => data
  }
})()

// ----- UI Controller -----
const UICtrl = (() => {
  // Selectors
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }

  return {
    populateItemList: items => {
      let html = ''

      items.forEach(item => {
        html += 
        `
        <li id="item-${item.id}" class="collection-item">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>
        `
      })

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html
    },
    getItemInput: () => {
      return  {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      }
    },
    addListItem: item => {
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block'

      // Create li element
      const li = document.createElement('li')
      // Add class
      li.className = 'collection-item'
      // Add ID
      li.id = `item-${item.id}`
      // Add HTML
      li.innerHTML = 
      `
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `

      // Insert to dom
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
    },
    updateListItem: item => {
      let listItems = document.querySelectorAll(UISelectors.listItems)

      // Turn Node list into array
      listItems = Array.from(listItems)

      listItems.forEach(listItem => {
        const itemID = listItem.getAttribute('id')

        if(itemID === `item-${item.id}`) {
          document.querySelector(`#${itemID}`).innerHTML = 
          `
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          `
        }
      })
    },
    deleteListItem: id => {
      const itemID = `#item-${id}`
      const item = document.querySelector(itemID)
      item.remove()

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories()
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories)

      UICtrl.clearEditState()
    },
    clearInput: () => {
      document.querySelector(UISelectors.itemNameInput).value = ''
      document.querySelector(UISelectors.itemCaloriesInput).value = ''
    },
    addItemToForm: () => {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories
      UICtrl.showEditState()
    },
    removeItems: () => {
      let listItems = document.querySelectorAll(UISelectors.listItems)

      // Turn nodelist to array
      listItems = Array.from(listItems)

      listItems.forEach(listItem => {
        listItem.remove()
      })
    },
    hideList: () => {
      document.querySelector(UISelectors.itemList).style.display = 'none'
    },
    showTotalCalories: (totalCalories) => {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories
    },
    clearEditState: () => {
      UICtrl.clearInput()
      document.querySelector(UISelectors.updateBtn).style.display = 'none'
      document.querySelector(UISelectors.deleteBtn).style.display = 'none'
      document.querySelector(UISelectors.backBtn).style.display = 'none'
      document.querySelector(UISelectors.addBtn).style.display = 'inline'
    },
    showEditState: () => {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline'
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline'
      document.querySelector(UISelectors.backBtn).style.display = 'inline'
      document.querySelector(UISelectors.addBtn).style.display = 'none'
      // Disable submit on enter only if add btn isn't showing
      document.addEventListener('keypress', e => {
        if(e.keyCode === 13 | e.which === 13) {
          e.preventDefault()
        }
      })
    },
    getSelectors: () => UISelectors
  }
})()

// ----- App Controller -----
const App = ((ItemCtrl, UICtrl, StorageCtrl) => {
  // Load Event Listeners
  const loadEventListeners = () => {
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors()

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit)


    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick)

    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit)

    // Delete item event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit)

    // Back Button event
    document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState)

    // Clear Button event
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllSubmit)
  }

  // Add item submit
  const itemAddSubmit = e => {
    // Get form input from UI Controller
    const input = UICtrl.getItemInput()

    // Check for name and calorie input
    if(input.name !== '' && input.calories !== '') {
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories)
      // Add item to UI list
      UICtrl.addListItem(newItem)

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories()
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories)

      // Store in local storage
      StorageCtrl.storeItems(newItem)

      // Clear fields
      UICtrl.clearInput()
    }

    e.preventDefault()
  }

  // Update item submit
  const itemUpdateSubmit = e => {
    // Get item input
    const input = UICtrl.getItemInput()
    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories)

    // Update UI
    UICtrl.updateListItem(updatedItem)

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories()
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories)

    // Update local storage
    StorageCtrl.updateItems(updatedItem)

    UICtrl.clearEditState()

    e.preventDefault()
  }

  // Delete item submit
  const itemDeleteSubmit = e => {
    // Get current item
    const currentItem = ItemCtrl.getCurrentItem()

    // Delete from data structre
    ItemCtrl.deleteItem(currentItem.id)
    
    // Delete from UI
    UICtrl.deleteListItem(currentItem.id)

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories()
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories)

    // Delete from local storage
    StorageCtrl.deleteItems(currentItem.id)

    e.preventDefault()
  }

  // Clear all items submit
  const clearAllSubmit = e => {
    // Delete all items from data structure
    ItemCtrl.clearAllItems()

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories()
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories)

    UICtrl.clearEditState()

    // Hide UL
    UICtrl.hideList()

    // Remove from UI
    UICtrl.removeItems()
    
    // Clear from local storage
    StorageCtrl.clearAllItems()
  }

  // Update item submit
  const itemEditClick = e => {
    if(e.target.classList.contains('edit-item')) {
      // Get list item id(item-0, item-1, etc)
      const listID = e.target.parentNode.parentNode.id
      // Break into an array with split method
      const listIDArray = listID.split('-') // ["item", "0"]
      // Get actual id
      const id = parseInt(listIDArray[1])

      // Get item
      const itemToEdit = ItemCtrl.getItemById(id)

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit)
      
      // Add item to form
      UICtrl.addItemToForm()
    }
    
    e.preventDefault()
  }

  return {
    init: () => {
      // Clear edit state / set initial state
      UICtrl.clearEditState()

      // Fetch items from data
      const items = ItemCtrl.getItems()

      // Check if any items
      if(items.length === 0) {
        UICtrl.hideList()
      } else {
        // Populate list with items
        UICtrl.populateItemList(items)
      }

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories()
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories)
      
      // Load event listeners
      loadEventListeners()
    }
  }
})(ItemCtrl, UICtrl, StorageCtrl)

// ----- Initialize app -----  //
App.init()

// --- The End ---- //