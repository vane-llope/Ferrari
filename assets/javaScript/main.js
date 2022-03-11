//const app = Vue.createApp({Options Object})
const App = Vue.createApp({
    data: function () {
        return {
            brand:'Ferrari',
            id: '',
            name: '',
            image: './assets/images/ferrari-458-italia-novitec-black.jpg',
            info: '',
            color: '',
            inventory:'',

            Ferrari: [
                {
                    id: 1,
                    name: 'ferrari-novitec-black',
                    image: './assets/images/ferrari-458-italia-novitec-black.jpg',
                    info: 'used in Formula 1 racing, optimizes both power yield and exhaust note while weighing in at 21 kg less than the production exhaust.',
                    inventory: 100,
                    color: 'black',
                },

                {
                    id: 2,
                    name: 'ferrari-enzo-silver',
                    image: './assets/images/ferrari-enzo-silver.jpg',
                    inventory: 8,
                    info: 'Known sometimes simply as Enzo, the Enzo Ferrari is a 12 cylinder mid-engine berlinetta and one of the most powerful naturally aspirated production cars in the world. ',
                    color: 'silver',
                },

                {
                    id: 3,
                    name: 'ferrari-laferrari-red',
                    image: './assets/images/ferrari-laferrari-red.jpg',
                    inventory: 0,
                    info: 'Introduced in 2013, the Ferrari La Ferrari represents Ferrari’s most ambitious project. With 500 units this V12 engine car is a must have car for every car enthusiast. ',
                    color: 'red',
                }]
        }
    },
    methods: {
        showInfoClick(ferrariImage,ferrariId,ferrariInfo,ferrariColor,ferrariInventory) {
            this.image = ferrariImage;
            this.id =ferrariId;
            this.Info =ferrariInfo;
            this.color=ferrariColor;
            this.inventory=ferrariInventory;
        },
        updateImageMouseOver(ferrariImage) {
            this.image = ferrariImage;
        }
    },
    computed:{
        title(){
            return this.brand
         },
    }

});
//mount App
const mountedApp = App.mount('#app');
/*you can change the value of data like:
mountedApp.product = 'sandals';*/