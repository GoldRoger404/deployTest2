<template>
    <div>
        <div class="dataSend"
        :class="{active:this.sendData}"
        >
            <h1>Корзина</h1>
            <div class="cl-btn-2 cross" @click="this.closeOk">
                    <div>
                    <div class="leftright"></div>
                    <div class="rightleft"></div>
                    </div>
            </div>
            <div class="ok">
                <div class="ok-image">
                    <img src="/ok.png">
                </div>
                <div class="ok-title">
                    Заявка успешно отправлена
                </div>
                <div class="ok-title2">
                    Вскоре наш менеджер свяжется с вами
                </div>
            </div>
        </div>
        <form class="form"  v-if="$store.state.basketCount>0" >
        <input
        v-model.trim="nameCustumer"
        type="text" 
        class="basket-input" 
        id="name-input" 
        placeholder="Ваше имя" 
        required
        >
        
        
        <input
        v-mask="'+7 (###) ###-##-##'"
        v-model.trim="number"
        class="basket-input" 
        id="phone-input"
        placeholder="Телефон" 
        masked="true"
        required
        >
        

        <input type="text" 
        class="basket-input" 
        id="address-input" 
        v-model.trim="address"
        placeholder="Адрес" 
        required
        >
        <button type="submit" class="basket-button"
        
        >
            Отправить
        </button>
    </form>
    </div>
    
</template>
<script>

import {mask} from 'vue-the-mask'
import {validationMixin} from 'vuelidate'

export default {
    mixins: [validationMixin],
    directives:{mask},
    data(){
        return{
            
                nameCustumer:'',
                number:'',
                address:'',

                sendData: false    
        }
    },
    methods: {
        submited(){
            console.log(`Имя: ${this.nameCustumer}`,
            `Номер телефона: ${this.number}`,
            `Адрес: ${this.address}`)
            console.log(`Количество покупок: 
            ${this.$store.state.basketCount}`)
            console.log(`Купленный товар: 
            ${JSON.stringify(this.$store.state.bItems)}`)

            this.$store.commit('clearBasket')
            this.nameCustumer = ''
            this.number = ''
            this.address = ''

            this.sendData = !this.sendData
        },
        closeOk(){
            this.sendData = !this.sendData
            this.$store.commit('basketOpen')
        }
      
    },
    validations:{
               
          
    }
   
}
</script>
<style lang="scss" scoped>
.dataSend{
    position: absolute;
    z-index: 999;
    background-color: #FFFFFF;
    top:0px;
    right:0px;
    height: 100%;
    width: 460px;
    visibility:hidden;   
}
.dataSend.active{
    visibility: visible;
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

.ok{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 55%;

    .ok-image{
        display: flex;
        justify-content: center;
        margin-bottom: 24px;
    }
    .ok-title{
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 31px;
        text-align: center;
        color: #000000;
        margin-bottom: 2px;
    }
    .ok-title2{
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        text-align: center;
        color: #59606D;
    }
}
.form{
    margin-left: 48px;
    margin-right:48px;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
}
.basket-input{
    font-size: 16px;
    background: #F8F8F8;
    border-radius:8px;
    border: none;
    max-width: 364px;
    max-height: 50px;
    padding:14px;
    margin-bottom: 16px;

}
.basket-button{
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
.basket-button:hover{
    background: #59606D;
}
</style>