export const state = () =>({
    basketCount: 0,
    basketOpen: false,
    bItems: [],
});

export const mutations = {

    storageBasket(state){
        if(localStorage.getItem('historyBasketCount') !== null 
        && localStorage.getItem('historyBasketPositions') !== null){
            state.basketCount = JSON.parse(localStorage.getItem('historyBasketCount'))
            state.bItems = JSON.parse(localStorage.getItem('historyBasketPositions'))
        }
    },
    basketCountPlus(state){
        state.basketCount++
        localStorage.setItem('historyBasketCount', state.basketCount)
        
    },
    basketOpen(state){
        state.basketOpen = !state.basketOpen
    },
    pushItem(state,bItem) {
        state.bItems.push(bItem)
        localStorage.setItem('historyBasketPositions', 
        JSON.stringify(state.bItems))
    },
    deleteItem(state,itemId){
        state.bItems = state.bItems.filter(x => itemId !== x.id)
        state.basketCount = state.bItems.length
        localStorage.setItem('historyBasketCount', state.basketCount)
        localStorage.setItem('historyBasketPositions', 
        JSON.stringify(state.bItems))
    },
    clearBasket(state){
        state.bItems = []
        state.basketCount = 0
        localStorage.setItem('historyBasketCount', state.basketCount)
        localStorage.setItem('historyBasketPositions', 
        JSON.stringify(state.bItems))
    }
}