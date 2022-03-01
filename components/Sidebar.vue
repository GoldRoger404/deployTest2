<template>
    <div class="sidebar">
        <div class="sidebar-title">
            <h1>Каталог</h1>
        </div>
        <div class="sidebar-catalog">
            <div class="bags"
            @click="categoryFilter(item.id)"
            :data-id="item.id"
            :class="{active : filterActive}"
            v-for="item of items"
            :key="item.id"
            >
                {{item.name}}
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return { 
       filterActive: false,     
       items:[],  
        }
    },
    methods:{
     categoryFilter(event){
    
        this.$axios.get(`https://frontend-test.idaproject.com/api/product`)
            .then((r) => {
               this.$parent.items = r.data.filter(e=> event === e.category)
         //!! Нужно разобраться с айдбаром, нужно чтобы работал фильтр
         // и чтобы при переключении в каталоге подчеркивалася категория!!
         //this.$el.querySelectorAll('.sidebar-catalog').forEach(el => el.classList.rempve('active'))
        //let elem = e.target
        // elem.classList.add('filterActive')
        //this.$axios.get(`https://frontend-test.idaproject.com/api/product`)
           //.then((r) => {
          //this.$parent.items = r.data.filter(e => Number(elem.getAttribute('data-id'))  === e.category)
                
        })  
        }

    },
    mounted(){
        this.$axios
        .get(`https://frontend-test.idaproject.com/api/product-category`)
        .then((r) => {
            this.items = r.data
        });
    }
 
}    

</script>
<style lang="css" scoped>
.sidebar{
    padding-top: 65px;
    padding-left: 80px;
    width: 250px;
    margin-right: 0px;
    position: fixed;
}
h1{
    font-weight: bold;
    font-size: 32px;
}

.bags{
    cursor: pointer;
    padding-top:16px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #959DAD
}
.bags.active{
    color: #1F1F1F;
    text-decoration-line: underline;
}
.bags:hover{
    color: #59606D;
}
</style>