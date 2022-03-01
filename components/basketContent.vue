<template>
    <div class="basket-card">

        <img class="basket-img" 
        :src="`https://frontend-test.idaproject.com${this.$props.item.photo}`"
        :alt="this.$props.item.name" 
        >
      <div class="basket-information">
        <div class="basket-card-title">
            {{this.$props.item.name}}
        </div>
        <div class="basket-card-price">
            {{this.$props.item.price}} ₽
        </div>
        <div class="basket-card-rating">
            <div class="basket-card-star">
                <svg width="14" 
                height="14" 
                viewBox="0 0 14 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M7.00002 0.125C7.2379 0.125 7.45517 0.260045 7.56046 0.47336L9.34643 4.09154L13.3404 4.67532C13.5758 4.70972 13.7712 4.87473 13.8445 5.10098C13.9179 5.32723 13.8565 5.57552 13.6861 5.74147L10.7966 8.55585L11.4785 12.5318C11.5187 12.7663 11.4223 13.0033 11.2299 13.1432C11.0374 13.283 10.7822 13.3014 10.5716 13.1907L7.00002 11.3124L3.42843 13.1907C3.21785 13.3014 2.96267 13.283 2.77018 13.1432C2.5777 13.0033 2.48129 12.7663 2.52151 12.5318L3.20344 8.55585L0.313935 5.74147C0.143549 5.57552 0.0821284 5.32723 0.155489 5.10098C0.22885 4.87473 0.424275 4.70972 0.659626 4.67532L4.6536 4.09154L6.43958 0.47336C6.54487 0.260045 6.76213 0.125 7.00002 0.125ZM7.00002 2.16203L5.62921 4.93914C5.53825 5.12342 5.36251 5.25121 5.15916 5.28093L2.09278 5.72913L4.3111 7.88978C4.45852 8.03336 4.52581 8.24032 4.49102 8.44315L3.96763 11.4948L6.70911 10.0531C6.89122 9.95731 7.10881 9.95731 7.29093 10.0531L10.0324 11.4948L9.50901 8.44315C9.47422 8.24032 9.54151 8.03336 9.68893 7.88978L11.9073 5.72913L8.84087 5.28093C8.63753 5.25121 8.46179 5.12342 8.37083 4.93914L7.00002 2.16203Z" fill="#F2C94C"/>
                </svg>
            </div>
            <div class="star-rating">
                {{this.$props.item.rating}}
            </div>
        </div>
      </div>    
        <div class="basket-card-delete" 
        @click="check"
        :data-id="item.id"
        >
            <svg width="20" 
            height="22" 
            viewBox="0 0 20 22" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 4.44772 0.447715 4 1 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H1C0.447715 6 0 5.55228 0 5Z" fill="#959DAD"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2H8ZM15 4V3C15 2.20435 14.6839 1.44129 14.1213 0.87868C13.5587 0.31607 12.7956 0 12 0H8C7.20435 0 6.44129 0.31607 5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3V4H3C2.44772 4 2 4.44772 2 5V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H15C15.7957 22 16.5587 21.6839 17.1213 21.1213C17.6839 20.5587 18 19.7957 18 19V5C18 4.44772 17.5523 4 17 4H15ZM4 6V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H15C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19V6H4Z" fill="#959DAD"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 9C8.55229 9 9 9.44771 9 10V16C9 16.5523 8.55229 17 8 17C7.44772 17 7 16.5523 7 16V10C7 9.44771 7.44772 9 8 9Z" fill="#959DAD"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C12.5523 9 13 9.44771 13 10V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10C11 9.44771 11.4477 9 12 9Z" fill="#959DAD"/>
            </svg>

        </div>

    </div>
</template>
<script>
export default {
    methods:{
        check(e){
            let itemId = +e.target.getAttribute('data-id')
            this.$store.commit('deleteItem', itemId)
            
        }
    },
    props: ['item']
}
</script>
<style lang="scss" scoped>
.basket-card{
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    width: 364px;
    height: 120px;
    display: grid;
    grid-template-columns: auto auto auto;
    margin-bottom: 12px;
}
.basket-img{
    width: 70.50px;
    height: 90px;
    margin:15px 35px 15px 25px;
    
}
.basket-information{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.basket-card-title{
    padding-top:12px;
    width: 170px;
    height: 36px;
    color:#59606D;
    font-size: 14px;
    padding-bottom: 6px;
}
.basket-card-price{
    font-weight: bold;
    font-size: 14px;
    padding-bottom: 16px;
}
.basket-card-rating{
    display:flex;
    align-content: center;
    padding-bottom: 12px;
}
.star-rating{
    padding-left: 4px;
    padding-top: 3px;
    color:#F2C94C;
    font-weight: bold;
    font-size: 10px;
}
.basket-card-delete{
    display: flex;
    align-items: center;
    cursor: pointer; 
}
.basket-card-delete svg{
    pointer-events: none;
}
.basket-card-delete svg:hover path{
  fill: #1F1F1F;
}

</style>