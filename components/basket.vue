<template>
<div 
    class="basket-background "
    
    :class="{active: $store.state.basketOpen}"
    >
    <div class="basket" @click="$store.commit('basketOpen')">
    </div>
    <div class="basket-menu">
            <h1>Корзина</h1>
            <div class="cl-btn-2 cross" @click="$store.commit('basketOpen')">
                    <div>
                    <div class="leftright"></div>
                    <div class="rightleft"></div>
                    </div>
            </div>
            <div class="basket-topsection-title creation" 
            v-if="$store.state.basketCount>0">
                Товары в корзине
            </div>
            <div class="basket-content" 
            v-if="$store.state.basketCount>0">
                <basketContent
                v-for="item of $store.state.bItems"
                :key="item.id" 
                :item="item" />   
            </div>
         
            <div class="basket-empty" v-else>
                <div class="empty-title">
                    Пока что вы ничего не добавили <br>в корзину.
                </div>
                <div class="empty-button">
                    <button 
                    type="submit" 
                    class="basket-empty-button"
                    @click="$store.commit('basketOpen')"
                    >
                        Перейти к выбору
                    </button>
                </div>
            </div>
               
                <div class="basket-topsection-title" v-if="$store.state.basketCount>0">
                Оформить заказ
                </div>
                <basketForm />  
     </div>

</div>    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.basket-background{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height: 100%;
    z-index:999;
    display: flex;
    justify-content: flex-end;
    visibility:hidden;
}
.basket-background.active{
    visibility:visible;
}
.basket{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color:#FFFFFF ;
    opacity: 0.8;
}
.basket-menu{
    position: absolute;
    background-color:#FFFFFF;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0px 0px 8px;
    
    height:100%;
    overflow-y: auto ;
}
h1{
    position: absolute;
    top:38px;
    left:48px;
    font-weight: bold;
    font-style: normal;
    font-size: 32px;
    line-height: 41px;
}
.basket-topsection-title{
    font-size: 18px;
    color:#59606D;
    padding-left:48px;
    padding-top:24px;
}
.creation{
    padding-top:117px;
}
.basket-content{
    padding-top:16px;
    padding-left:48px;
    padding-right:48px;

}

/*  cross options ad animation starts     */

.cross{
    position: absolute;
    top:40px;
    right:53px;
    cursor: pointer;
}
.cl-btn-2 {
    margin: 20px;
    display: flex;
    justify-content: center;
}
.cl-btn-2 .leftright {
    height: 2px;
    width: 20px;
    position: absolute;
    margin-top: 24px;
    background-color: #1F1F1F;
    transform: rotate(45deg);
    transition: all .2s ease-in;
}
.cl-btn-2 .rightleft {
    height: 2px;
    width: 20px;
    position: absolute;
    margin-top: 24px;
    background-color: #1F1F1F;
    transform: rotate(-45deg);
    transition: all .2s ease-in;
}
.cl-btn-2 div:hover .leftright {
    transform: rotate(-45deg);
    background-color: #59606D;
}
.cl-btn-2 div:hover .rightleft {
    transform: rotate(45deg);
    background-color: #59606D;
}
.cl-btn-2 div:hover .close-btn {
    opacity: 1;
}

/*  cross options ad animation ends     */

.basket-empty{
    padding-top: 24px;
    padding-left: 48px;
    padding-right: 48px;
}
.empty-title{
    padding-top: 117px;
    font-size: 22px;
}
.empty-button{
    padding-top:24px;
}
.basket-empty-button{
    background: #1F1F1F;
    border-radius: 8px;
    border:none;
    width: 364px;
    height: 50px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #FFFFFF;
}
.basket-empty-button:hover{
    background: #59606D;
}


</style>