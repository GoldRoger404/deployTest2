<template>
    <div class="container">
        <div class="filter" @click="openFilter">
            <div class="filter-title">
                Сортировать по:
                </div>
            <div 
            class="filter-selector"
            ref="activeText"
            >
                {{price}}
                </div>
                <div class="vector-wrapper">
                    <div class="vector"></div>    
                </div>
        </div>        
        <div 
        class="filter-list"
        :class="{ active : isActive }"
        >
            <div class="filter-price" @click="sortItems('price')">По {{price}}</div>
            <div class="filter-popular" @click="sortItems('rating')">По {{popular}}</div>
        </div>
        
        <div class="cards">
            <card v-for="item in items" 
            :key="item.id" 
            :item="item"/>
          
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            price: 'цене',
            popular: 'популярности',
            items: [],
            isActive: false
        }
    },
    methods:{
        openFilter(){
            this.isActive = !this.isActive
        },
        sortItems(x){
            if(x === 'price'){
                this.items = this.items.sort( (a,b) => b.price - a.price )
                this.$refs.activeText.textContent = this.price
            }

            if(x === 'rating'){
                this.items = this.items.sort( (a,b) => b.rating - a.rating)
                this.$refs.activeText.textContent = this.popular
            }
            this.isActive = !this.isActive

        }
    },
    mounted(){
        this.$axios
        .get(`https://frontend-test.idaproject.com/api/product`)
        .then((r) => {
            this.items = r.data
            
        })
    }
}
</script>
<style lang="css" scoped>
.container{
    max-width: 1104px;
    padding-right: 0px;
    margin-left: 248px;
    padding-top: 163px;
}
.filter{
    background-color:#FFFFFF;
    border-radius: 8px;
    z-index: 50;
    position:fixed;
    top:108px;
    right:88px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right:16px;
}
.filter-title{
    font-size: 16px;
    color: #1F1F1F
}
.filter-selector{
    padding-left: 6px;
    font-size: 16px;
    color: #59606D;
    display: flex;
    cursor:pointer;
}
.vector-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 6px;
    padding-left: 4px;
}
.vector{
    border: 2px solid transparent; 
    border-top: 2px solid #59606D;
    width: 5px;
    height: 3px;
    position: relative;
}
.filter-list{
    visibility: hidden;
    position: fixed;
    z-index:99;
    top:143px;
    right: 88px;
    width: 160px;
    height: 68px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    color: #959DAD;
    font-size: 14px;
}
.filter-list.active{
    visibility: visible;
}
.filter-price{
    margin-top:8px;
    padding:4px 4px 4px 12px;
    cursor:pointer;
}
.filter-popular{
    margin-bottom: 8px;
    padding:4px 4px 4px 12px;
    cursor:pointer;
}
.filter-popular:hover{
    background-color:#F8F8F8 ;
    color:#1F1F1F;
}
.filter-price:hover{
    background-color:#F8F8F8 ;
    color:#1F1F1F;
}
.cards{
    
    display: flex;
    flex-wrap: wrap;
    
}
</style>